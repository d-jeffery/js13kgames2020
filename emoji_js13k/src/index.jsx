'use strict';

import {h, render} from 'preact';
import Game from "./components/game.jsx";

    console.log('rendering');
    render((<div>
            <Game/>
        </div>
    ), document.body);
