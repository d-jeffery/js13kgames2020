'use strict';

// Don't forget to include h renderer!
import {h, Component} from 'preact';

export default class Card extends Component {
  constructor(props) {
    super();
    this.state = {
      hiddenValue: null,
      flipStatus: DEFAULT,
    };
    this.player = props.player;
    this.cardNumber = props.val;
    this.socket = props.socket;

    this.bind();
  }

  bind() {
    this.socket.on('newRound', () => {
      if (this.state.flipStatus !== MATCHED) {
        setTimeout(() => {
          this.setState({flipStatus: DEFAULT, hiddenValue: null});
        }, 1000);
      }
    });

    this.socket.on('revealCard', (props) => {
      if (this.state.flipStatus !== MATCHED) {
          if (this.cardNumber === props.val && this.player === props.player) {
          this.setState({flipStatus: FLIPPED, hiddenValue: props.emoji});
        }
      }
    });

    this.socket.on('matchCard', (props) => {
      if (this.player === PLAYER_1 && this.cardNumber === props.user1) {
        this.setState({flipStatus: MATCHED});
      } else if (this.player === PLAYER_2 && this.cardNumber === props.user2) {
        this.setState({flipStatus: MATCHED});
      }
    });
  }

  guess(val) {
    this.socket.emit('flip', {'player': this.player, 'guess': val});
  };

  render(props, state) {
    return (<div class="card" data-flipStatus={this.state.flipStatus} data-player={props.player}>
      <button class="front" onClick={this.guess.bind(this, props.val)} disabled={props.disabled}>
            ?
      </button>
      <div className="back">{this.state.hiddenValue}</div>
    </div>);
  }
}
