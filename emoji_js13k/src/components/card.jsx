'use strict';

// Don't forget to include h renderer!
import {h, Component} from 'preact';


export default class Card extends Component {
  constructor() {
    super();
    this.state = {
      hiddenValue: null,
      flipStatus: DEFAULT,
    };
  }

  reset() {
    setTimeout(() => {
      this.setState({flipStatus: DEFAULT, hiddenValue: null})
    }, 2000);
  }

  flip(socket, val) {
    socket.emit("flip", {"guess": val}, (cardFace) => {
      this.setState({flipStatus: FLIPPED, hiddenValue: cardFace.emoji});
    });
  };

  render(props, state) {
    return (<div class="card" data-flipStatus={this.state.flipStatus} data-player={props.player}>
      <button class="front" onClick={this.flip.bind(this, props.socket, props.val)} disabled={props.disabled}>
            ?
      </button>
      <div className="back">{state.hiddenValue}</div>
    </div>);
  }
}
