'use strict';

// Don't forget to include h renderer!
import {h, Component, createRef} from 'preact';


export default class Card extends Component {
  constructor(props) {
    super();
    this.state = {
      hiddenValue: null,
      flipStatus: DEFAULT,
    };
    this.socket = props.socket;

    this.bind();
  }

  bind() {
    this.socket.on("newRound", () => {
      setTimeout(() => {
        this.setState({flipStatus: DEFAULT, hiddenValue: null})
      }, 1000);
    });
  }

  flip(val) {
    this.socket.emit("flip", {"guess": val}, (cardFace) => {
      this.setState({flipStatus: FLIPPED, hiddenValue: cardFace.emoji});
    });
  };

  render(props, state) {
    return (<div class="card" data-flipStatus={this.state.flipStatus} data-player={props.player}>
      <button class="front" onClick={this.flip.bind(this, props.val)} disabled={props.disabled}>
            ?
      </button>
      <div className="back">{state.hiddenValue}</div>
    </div>);
  }
}
