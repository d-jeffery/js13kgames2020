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
    this.socket.on("newRound", () => {
      setTimeout(() => {
        this.setState({flipStatus: DEFAULT, hiddenValue: null})
      }, 1000);
    });

    this.socket.on("revealCard", (props) => {
      console.log(props)
      if (this.cardNumber === props.val && this.player === props.player) {
        this.setState({flipStatus: FLIPPED, hiddenValue: props.emoji});
      }
    });

    //
    // this.socket.on("turn", (cardFace) => {
    //   console.log(cardFace)
    //   this.setState({flipStatus: DEFAULT, hiddenValue: cardFace.emoji})
    // });
  }

  guess(val) {
    this.socket.emit("flip", {player: this.player, "guess": val});
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
