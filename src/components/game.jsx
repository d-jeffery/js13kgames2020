'use strict';

// Don't forget to include h renderer!
import {h, Component, createContext} from 'preact';
import {useContext} from 'preact/hooks';

import Card from './card.jsx';

const Socket = createContext(io({upgrade: false, transports: ['websocket']}));

export default class Game extends Component {
  constructor() {
    super();
    this.state = {
      player1: 0,
      player2: 0,
      started: false,
      // waiting: true,
      turn: PLAYER_1,
      // opponentGuess: {card: null, emoji: null},
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
      this.setState({turn: props.turn, started: true});
      this.setState({player1: 0})
      this.setState({player2: 0})
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
    });

    this.socket.on("lose", (props) => {
      console.log("lose", props);
    });

    this.socket.on("draw", (props) => {
      console.log("draw", props);
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
