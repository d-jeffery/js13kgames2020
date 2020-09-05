'use strict';

import {h, render} from 'preact';
import Splash from './components/splash.jsx';

console.log('rendering');
render((
  <div>
    <Splash />
  </div>
), document.body);
