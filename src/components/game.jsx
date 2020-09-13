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
      waiting: true,
      opponentGuess: {card: null, emoji: null},
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
      console.log('Start game');
      this.player = props.playerNo;
      this.setState({started: true});
      this.setState({player1: 0})
      this.setState({player2: 0})
    });

    this.socket.on('newRound', (props) => {
      console.log('Round starting');
    });

    this.socket.on('turn', (val) => {
      this.setState({waiting: false});
    });

    this.socket.on('wait', (val) => {
      this.setState({waiting: true});
    });

    this.socket.on('end', () => {
      console.log('End');
      this.setState({started: false});
    });

    this.socket.on('error', () => {
      console.error('An error with the server occurred.');
    });

    this.socket.on('matched', (props) => {
      console.log('Matched!', props);
      const player1 = this.state.player1;
      const player2 = this.state.player2;

      if (props.player === PLAYER_1) {
        this.setState({ player1: player1 + 1 })
      } else {
        this.setState({ player2: player2 + 1 });
      }
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
      <h2>Player: {this.state.waiting ? 'Opponent\'s turn' : 'Your Turn'} </h2>
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
