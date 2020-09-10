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

  flip(socket, val) {
    socket.emit("flip", {"guess": val}, (cardFace) => {
      console.log(cardFace);
      this.setState({flipStatus: FLIPPED, hiddenValue: cardFace.emoji});
    });
  };

  render(props, state) {
    return (<div class="card" data-flipStatus={this.state.flipStatus} data-val={props.val}>
      <button class="front" onClick={this.flip.bind(this, props.socket, props.val)}>
            ?
      </button>
      <div className="back">{state.hiddenValue}</div>
    </div>);
  }
}
