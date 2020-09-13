'use strict';

import {h, render} from 'preact';
import Game from "./components/game.jsx";
import "./style/index.css";

    console.log('rendering');
    render((<div>
            <Game/>
        </div>
    ), document.body);
