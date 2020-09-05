'use strict';

// Don't forget to include h renderer!
import {h, Component} from 'preact';
import Card from './card.jsx';
import style from './style.css';

export default class Game extends Component {
  constructor() {
    super();
    this.state = {
      flippedCards: { first: {}, second: {} },
      isMatched: {},
      score: 0};
  }

  render(props, state) {
    return (<div className={style.home}>
      <div className={style.head}>
        <div className={style.grid}>
        <h2>Game</h2>
        {props.cards.map(card => (
            <Card hiddenValue={card.emoji}/>
        ))}
        </div>
      </div>
    </div>);
  }
}
