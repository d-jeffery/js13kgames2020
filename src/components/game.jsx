'use strict';

// Don't forget to include h renderer!
import {h, Component, createContext} from 'preact';
import {useContext} from 'preact/hooks';

import Card from './card.jsx';

const Socket = createContext(io({upgrade: false, transports: ['websocket']}));

const IN_PLAY = 0;
const WIN = 1;
const LOSE = 2;
const DRAW = 3;

export default class Game extends Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      started: false,
      turn: PLAYER_1,
      outcome: IN_PLAY
    };
    this.player = PLAYER_1;
    this.socket = useContext(Socket);

    console.log('Binding');
    this.bind();
  }

  bind() {
    this.socket.on('connect', () => {
      console.log('Connected');
    });

    this.socket.on('disconnect', () => {
      console.log('Disconnected');
    });

    this.socket.on('start', (props) => {
      console.log('Start game', props.playerNo, props.turn);
      this.player = props.playerNo;
      this.setState({turn: props.turn, started: true, score: 0, outcome: IN_PLAY});
    });

    this.socket.on('newRound', (props) => {
      console.log('Round starting');
    });

    this.socket.on('turn', (props) => {
      console.log('turn', props)
      this.setState({turn: props.turn});
    });

    this.socket.on('end', () => {
      console.log('End');
      this.setState({started: false});
    });

    this.socket.on('error', () => {
      console.error('An error with the server occurred.');
    });

    this.socket.on("win", (props) => {
      console.log("Win", props);
      this.setState({score: props.score, outcome: WIN});
    });

    this.socket.on("lose", (props) => {
      console.log("Lose", props);
      this.setState({score: props.score, outcome: LOSE});
    });

    this.socket.on("draw", (props) => {
      console.log("Draw", props);
      this.setState({score: props.score, outcome: DRAW});
    });
  }

  createCard(props) {
    return (<Socket.Consumer>
      {(socket) => {
        return <Card {...props} socket={socket}/>;
      }}
    </Socket.Consumer>);
  }

  createHand(player) {
    const hand = [];

    for (let i = 0; i < EMOJIS.length; i++) {
      hand.push(this.createCard({player, val: i}));
    }
    return hand;
  }

  render(props, state) {
    const player = this.player;
    const opponent = (this.player === PLAYER_1) ? PLAYER_2 : PLAYER_1;

    if (!this.state.started) {
      return (<div className="game">
        <div class="head">
          <h2>Waiting for opponent...</h2>
        </div>
      </div>);
    }

    if (this.state.started) {
      if (this.state.outcome === WIN) {
        return <div class="results">
            <h1>YOU WIN</h1>
            <h2>Final score: {this.state.score} / {EMOJIS.length}</h2>
          </div>
      } else if (this.state.outcome === LOSE) {
        return <div class="results">
            <h1>YOU LOSE</h1>
            <h2>Final score: {this.state.score} / {EMOJIS.length}</h2>
          </div>
      } else if (this.state.outcome === DRAW) {
        return <div class="results">
            <h1>DRAW</h1>
            <h2>Final score: {this.state.score} / {EMOJIS.length}</h2>
          </div>
      }
    }

    return (<div class="game">
      <h2>Player: {this.state.turn !== this.player ? 'Opponent\'s turn' : 'Your Turn'} </h2>
      <div class="grid">
        {
          this.createHand(player).map((index) => index)
        }
      </div>
      <hr class="break"/>
      <div class="grid">
        {
          this.createHand(opponent).map((index) => index)
        }
      </div>
      <h2>Opponent</h2>
    </div>);
  }
}
