'use strict';

// Don't forget to include h renderer!
import {h, Component} from 'preact';
import style from './style.css';
import Game from './game.jsx';

function generateCardGrid() {
  const emojis = ['🚀', '😺', '🐶', '🏈', '📦', '🙊'];

  return [...emojis, ...emojis]
      .sort(() => Math.random() - Math.random())
      .map((emoji, idx) => ({key: idx, emoji}));
}

export default class Splash extends Component {
  constructor() {
    super();
    this.state = {started: false};
  }

  startGame() {
    console.log('Starting game');
    this.setState({started: true});
  }

  render(props, state) {
    if (state.started) {
      return <Game cards={generateCardGrid()}/>;
    }
    return <div className={style.home}>
      <div className={style.head}>
        <h2>Match Game</h2>
      </div>
      <button className={style.button} onClick={this.startGame.bind(this)}>New Game</button>
    </div>;
  }
}
