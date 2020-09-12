"use strict";

/**
 * User sessions
 * @param {Array} users
 */
const users = [];

/**
 * Find opponent for a user
 * @param {User} user
 */
function findOpponent(user) {
	for (let i = 0; i < users.length; i++) {
		if (
			user !== users[i] &&
			users[i].opponent === null
		) {
			new Game(user, users[i]).start();
		}
	}
}

/**
 * Remove user session
 * @param {User} user
 */
function removeUser(user) {
	users.splice(users.indexOf(user), 1);
}

/**
 *
 * @returns {{emoji: *, key: *}[]}
 */
function generateCardGrid() {
	return [...EMOJIS]
		.sort(() => Math.random() - 0.5)
		.map((emoji, idx) => ({key: idx, emoji}));
}

/**
 * Game class
 */
class Game {

	/**
	 * @param {User} user1
	 * @param {User} user2
	 */
	constructor(user1, user2) {
		this.user1 = user1;
		this.user2 = user2;
		this.user1.player = PLAYER_1
		this.user2.player = PLAYER_2
		this.turn = Math.floor(Math.random() * 2);
	}

	/**
	 * Start new game
	 */
	start() {
		this.user1.start(this, this.user2);
		this.user2.start(this, this.user1);
	}

	/**
	 * Is game ended
	 * @return {boolean}
	 */
	ended() {
		// return this.user1.guess !== GUESS_NO && this.user2.guess !== GUESS_NO;
	}

	doTurn() {
		this.turn = (this.turn + 1) % 2;
	}

	endRound() {
		this.user1.setGuessed(null);
		this.user2.setGuessed(null);
		this.user1.socket.emit("newRound");
		this.user2.socket.emit("newRound");
	}

	/**
	 * Final score
	 */
	score() {
		console.log(this.user1.hand[this.user1.guessed], this.user2.hand[this.user2.guessed])
		if (this.user1.hand[this.user1.guessed] === this.user2.hand[this.user2.guessed]) {
			if (this.turn === PLAYER_1) {
				this.user1.matched();
				this.turn = PLAYER_1;
			} else {
				this.user2.matched();
				this.turn = PLAYER_2;
			}
		}


		// if (
		// 	this.user1.guess === GUESS_ROCK && this.user2.guess === GUESS_SCISSORS ||
		// 	this.user1.guess === GUESS_PAPER && this.user2.guess === GUESS_ROCK ||
		// 	this.user1.guess === GUESS_SCISSORS && this.user2.guess === GUESS_PAPER
		// ) {
		// 	this.user1.win();
		// 	this.user2.lose();
		// } else if (
		// 	this.user2.guess === GUESS_ROCK && this.user1.guess === GUESS_SCISSORS ||
		// 	this.user2.guess === GUESS_PAPER && this.user1.guess === GUESS_ROCK ||
		// 	this.user2.guess === GUESS_SCISSORS && this.user1.guess === GUESS_PAPER
		// ) {
		// 	this.user2.win();
		// 	this.user1.lose();
		// } else {
		// 	this.user1.draw();
		// 	this.user2.draw();
		// }
	}

}

/**
 * User session class
 */
class User {

	/**
	 * @param {Socket} socket
	 */
	constructor(socket) {
		this.socket = socket;
		this.game = null;
		this.opponent = null;
		this.hand = [];
		this.guessed = null;
	}

	/**
	 * Set guessed value
	 * @param {number} guessed
	 */
	setGuessed(guessed) {
		this.guessed = guessed;
	}

	/**
	 * Start new game
	 * @param {Game} game
	 * @param {User} opponent
	 */
	start(game, opponent) {
		this.game = game;
		this.opponent = opponent;
		this.socket.emit("start");
		this.hand = generateCardGrid();
	}

	wait() {
		console.log("Player " + this.player + " is waiting.")
		this.socket.emit("wait");
	}

	turn() {
		console.log("Player " + this.player + " is turn.")
		this.socket.emit("turn");
	}

	/**
	 * Terminate game
	 */
	end() {
		this.game = null;
		this.opponent = null;
		this.socket.emit("end");
	}

	matched() {
		console.log("matched")
		this.socket.emit("matched", ({guessed: this.guessed, match: this.opponent.guessed}));
		this.guessed = null;
	}

	/**
	 * Trigger win event
	 */
	win() {
		this.socket.emit("win", this.opponent.guess);
	}

	/**
	 * Trigger lose event
	 */
	lose() {
		this.socket.emit("lose", this.opponent.guess);
	}

	/**
	 * Trigger draw event
	 */
	draw() {
		this.socket.emit("draw", this.opponent.guess);
	}
}


/**
 * Socket.IO on connect event
 * @param {Socket} socket
 */
module.exports = {

	io: (socket) => {
		const user = new User(socket);
		users.push(user);
		findOpponent(user);

		if (user.opponent) {
			if (user.game.turn === user.player) {
				user.opponent.wait();
				user.turn();
			} else {
				user.opponent.turn();
				user.wait();
			}
		}

		socket.on("disconnect", () => {
			console.log("Disconnected: " + socket.id);
			removeUser(user);
			if (user.opponent) {
				user.opponent.end();
				findOpponent(user.opponent);
			}
		});

		socket.on("flip", (props, callback) => {
			if (user.game.turn === user.player) {
				// Set guess
				user.setGuessed(props.guess);
				// Do turn
				user.wait();
				user.opponent.turn();
				user.game.doTurn();

				callback(user.hand[props.guess], user.player);
			}

			if (user.guessed !== null && user.opponent.guessed !== null ) {
				user.game.endRound();
			}
		});

		// socket.on("guess", (guess) => {
		// 	console.log("Guess: " + socket.id);
		// 	if (user.setGuess(guess) && user.game.ended()) {
		// 		user.game.score();
		// 		user.game.start();
		// 		storage.get('games', 0).then(games => {
		// 			storage.set('games', games + 1);
		// 		});
		// 	}
		// });

		console.log("Connected: " + socket.id);
	},

	stat: (req, res) => {
		storage.get('games', 0).then(games => {
			res.send(`<h1>Games played: ${games}</h1>`);
		});
	}

};
