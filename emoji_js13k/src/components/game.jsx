'use strict';

// Don't forget to include h renderer!
import {h, Component} from 'preact';
import Card from './card.jsx';

export default class Game extends Component {
  constructor() {
    super();
    this.state = {
      flippedCards: {first: {}, second: {}},
      isMatched: {},
      score: 0,
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

    this.socket.on("start", () => {
      console.log("Round starting");
      this.setState({started: true});
    });
  }

  generateCardGrid() {
    const emojis = ['🚀', '😺', '🐶', '🏈', '📦', '🙊'];

    return [...emojis, ...emojis]
        .sort(() => Math.random() - Math.random())
        .map((emoji, idx) => ({key: idx, emoji}));
  }

  render(props, state) {
    if (!this.state.started) {
      return <div className="game">
        <div class="head">
          <h2>Waiting for opponent...</h2>
        </div>
      </div>;
    }
    return (<div class="game">
      <div class="head">
        <h2>Game</h2>
      </div>
      <div class="grid">
        {this.generateCardGrid().map((card) => (
          <Card hiddenValue={card.emoji}/>
        ))}
      </div>
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
//     socket.on("start", () => {
//       enableButtons();
//       console.log("Round starting");
//     });
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
//     socket.on("end", () => {
//       console.log("Waiting for opponent...");
//     });
//
//     socket.on("connect", () => {
//       console.log("Connected")
//     });
//
//     socket.on("disconnect", () => {
//       console.log("Disconnected")
//     });
//
//     socket.on("error", () => {
//       console.log("Error")
//     });
//
//   }
//
//   /**
//    * Client module init
//    */
//   function init() {
//     socket = io({ upgrade: false, transports: ["websocket"] });
//     bind();
//   }
//
//   window.addEventListener("load", init, false);
//   })();

