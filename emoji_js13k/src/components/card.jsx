'use strict';

// Don't forget to include h renderer!
import {h, Component} from 'preact';

export default class Game extends Component {
    constructor() {
        super();

    }

    render(props, state) {
        return (<div>{props.emoji}</div>);
    }
}
