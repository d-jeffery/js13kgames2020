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
		if (this.user1.hand[this.user1.guessed].emoji === this.user2.hand[this.user2.guessed].emoji) {
			if (this.turn === PLAYER_1) {
				this.user1.matched({
					score: this.user1.player,
					user1: this.user1.guessed,
					user2: this.user2.guessed
				});
				this.user2.matched({
					score: this.user1.player,
					user1: this.user1.guessed,
					user2: this.user2.guessed
				});
				this.turn = PLAYER_2;
			} else {
				this.user1.matched({
					score: this.user2.player,
					user1: this.user1.guessed,
					user2: this.user2.guessed
				});
				this.user2.matched({
					score: this.user2.player,
					user1: this.user1.guessed,
					user2: this.user2.guessed
				});
				this.turn =
					this.turn = PLAYER_1;
			}
		}
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
		this.socket.emit("start", {playerNo: this.player});
		this.hand = generateCardGrid();
	}

	wait() {
		this.socket.emit("wait",);
	}

	turn() {
		this.socket.emit("turn");
	}

	revealCard(props) {
		this.socket.emit("revealCard", {...props})
		this.opponent.socket.emit("revealCard", {...props})
	}

	/**
	 * Terminate game
	 */
	end() {
		this.game = null;
		this.opponent = null;
		this.socket.emit("end");
	}

	matched(props) {
		console.log(props)
		this.socket.emit("matchCard", {...props})
		this.opponent.socket.emit("matchCard", {...props})
		this.socket.emit("matched", {...props});
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

		socket.on("flip", (props) => {
			if (user.game.turn === user.player &&
				props.player === user.player) {
				// Set guess
				user.setGuessed(props.guess);
				user.revealCard({
					val: props.guess,
					emoji: user.hand[props.guess].emoji,
					player: user.player});
				// Do turn
				user.wait();
				user.opponent.turn();
				user.game.doTurn();
			}

			if (user.guessed !== null && user.opponent.guessed !== null ) {
				user.game.score();

				if (user.game.turn === user.player) {
					user.game.turn = user.opponent.player;
					user.wait();
					user.opponent.turn();
				} else {
					user.game.turn = user.player;
					user.turn();
					user.opponent.wait();
				}

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
