'use strict';

// Don't forget to include h renderer!
import {h, Component} from 'preact';

export default class Card extends Component {
  constructor() {
    super();
    this.state = {
      hiddenValue: null,
      flipStatus: DEFAULT,
      onclick: null,
    };
  }

  render(props, state) {
    return (<div class="card" data-flipStatus={props.flipStatus}>
      <button class="front" onClick={props.onClick}>
            ?
      </button>
      <div class="back">{props.hiddenValue}</div>
    </div>);
  }
}
