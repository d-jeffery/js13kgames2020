'use strict';

// Don't forget to include h renderer!
import {h, Component} from 'preact';
import Card from './card.jsx';

export default class Game extends Component {
  constructor() {
    super();
    this.state = {
      cards: {player1: [], player2: []},
      score: {player1: 0, player2: 0},
      flippedCards: {first: {}, second: {}},
      isMatched: {},
      turn: PLAYER_1,
      started: false,
    };

    this.socket = io({ upgrade: false, transports: ["websocket"] })

    console.log("Binding");
    this.bind();
  }

  bind() {
    this.socket.on("connect", () => {
      console.log("Connected")
    });

    this.socket.on("disconnect", () => {
      console.log("Disconnected")
    });

    this.socket.on("start", (numOfCards) => {
      console.log("Round starting");
      this.setState({started: true, });
    });

    this.socket.on("end", () => {
      console.log("End");
      this.setState({started: false});
    });

    this.socket.on("error", () => {
      console.error("An error with the server occurred.")
    });

  }

  render(props, state) {
    if (!this.state.started) {
      return (<div className="game">
        <div class="head">
          <h2>Waiting for opponent...</h2>
        </div>
      </div>);
    }
    const items = []
    for (let i = 0; i < EMOJIS.length; i++) {
      items.push(<Card val={i} socket={this.socket}/>)
    }
    return (<div class="game">
      <h2>Player 1</h2>
      <div class="grid">
        {items.map((index) => index)}
      </div>
      <hr class="break"/>
      <div class="grid">
        {items.map((index) => index)}
      </div>
      <h2>Player 2</h2>
    </div>);
  }
}
//
// (function () {
//
//   let socket; //Socket.IO client
//
//   /**
//    * Binde Socket.IO and button events
//    */
//   function bind() {
//
//     socket.on("win", () => {
//       console.log("You win!");
//     });
//
//     socket.on("lose", () => {
//       console.log("You lose!");
//     });
//
//     socket.on("draw", () => {
//       console.log("Draw!");
//     });
//
//   }


