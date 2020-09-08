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

  flip() {
    console.log("flip");
    this.setState({flipStatus: FLIPPED})
  };

  render(props, state) {
    return (<div class="card" data-flipStatus={this.state.flipStatus}>
      <button class="front" onClick={this.flip.bind(this)}>
            ?
      </button>
      <div class="back">{props.hiddenValue}</div>
    </div>);
  }
}
