(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var n,l,u,t,i,o,r,f={},e=[],c=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function s(n,l){for(var u in l)n[u]=l[u];return n}function a(n){var l=n.parentNode;l&&l.removeChild(n)}function p(n,l,u){var t,i,o,r=arguments,f={};for(o in l)"key"==o?t=l[o]:"ref"==o?i=l[o]:f[o]=l[o];if(arguments.length>3)for(u=[u],o=3;o<arguments.length;o++)u.push(r[o]);if(null!=u&&(f.children=u),"function"==typeof n&&null!=n.defaultProps)for(o in n.defaultProps)void 0===f[o]&&(f[o]=n.defaultProps[o]);return v(n,f,t,i,null)}function v(l,u,t,i,o){var r={type:l,props:u,key:t,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o};return null==o&&(r.__v=r),null!=n.vnode&&n.vnode(r),r}function h(n){return n.children}function y(n,l){this.props=n,this.context=l}function d(n,l){if(null==l)return n.__?d(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?d(n):null}function _(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return _(n)}}function w(l){(!l.__d&&(l.__d=!0)&&u.push(l)&&!x.__r++||i!==n.debounceRendering)&&((i=n.debounceRendering)||t)(x)}function x(){for(var n;x.__r=u.length;)n=u.sort(function(n,l){return n.__v.__b-l.__v.__b}),u=[],n.some(function(n){var l,u,t,i,o,r,f;n.__d&&(r=(o=(l=n).__v).__e,(f=l.__P)&&(u=[],(t=s({},o)).__v=t,i=z(f,o,t,l.__n,void 0!==f.ownerSVGElement,null,u,null==r?d(o):r),N(u,o),i!=r&&_(o)))})}function k(n,l,u,t,i,o,r,c,s,p){var y,_,w,x,k,g,b,A=t&&t.__k||e,P=A.length;for(s==f&&(s=null!=r?r[0]:P?d(t,0):null),u.__k=[],y=0;y<l.length;y++)if(null!=(x=u.__k[y]=null==(x=l[y])||"boolean"==typeof x?null:"string"==typeof x||"number"==typeof x?v(null,x,null,null,x):Array.isArray(x)?v(h,{children:x},null,null,null):null!=x.__e||null!=x.__c?v(x.type,x.props,x.key,null,x.__v):x)){if(x.__=u,x.__b=u.__b+1,null===(w=A[y])||w&&x.key==w.key&&x.type===w.type)A[y]=void 0;else for(_=0;_<P;_++){if((w=A[_])&&x.key==w.key&&x.type===w.type){A[_]=void 0;break}w=null}k=z(n,x,w=w||f,i,o,r,c,s,p),(_=x.ref)&&w.ref!=_&&(b||(b=[]),w.ref&&b.push(w.ref,null,x),b.push(_,x.__c||k,x)),null!=k?(null==g&&(g=k),s=m(n,x,w,A,r,k,s),p||"option"!=u.type?"function"==typeof u.type&&(u.__d=s):n.value=""):s&&w.__e==s&&s.parentNode!=n&&(s=d(w))}if(u.__e=g,null!=r&&"function"!=typeof u.type)for(y=r.length;y--;)null!=r[y]&&a(r[y]);for(y=P;y--;)null!=A[y]&&j(A[y],A[y]);if(b)for(y=0;y<b.length;y++)$(b[y],b[++y],b[++y])}function m(n,l,u,t,i,o,r){var f,e,c;if(void 0!==l.__d)f=l.__d,l.__d=void 0;else if(i==u||o!=r||null==o.parentNode)n:if(null==r||r.parentNode!==n)n.appendChild(o),f=null;else{for(e=r,c=0;(e=e.nextSibling)&&c<t.length;c+=2)if(e==o)break n;n.insertBefore(o,r),f=r}return void 0!==f?f:o.nextSibling}function g(n,l,u,t,i){var o;for(o in u)"children"===o||"key"===o||o in l||A(n,o,null,u[o],t);for(o in l)i&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||A(n,o,l[o],u[o],t)}function b(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||c.test(l)?u:u+"px"}function A(n,l,u,t,i){var o,r;if(i&&"className"==l&&(l="class"),"style"===l)if("string"==typeof u)n.style=u;else{if("string"==typeof t&&(n.style=t=""),t)for(l in t)u&&l in u||b(n.style,l,"");if(u)for(l in u)t&&u[l]===t[l]||b(n.style,l,u[l])}else"o"===l[0]&&"n"===l[1]?(o=l!==(l=l.replace(/Capture$/,"")),(r=l.toLowerCase())in n&&(l=r),l=l.slice(2),n.l||(n.l={}),n.l[l]=u,u?t||n.addEventListener(l,P,o):n.removeEventListener(l,P,o)):"list"!==l&&"tagName"!==l&&"form"!==l&&"type"!==l&&"size"!==l&&"download"!==l&&"href"!==l&&!i&&l in n?n[l]=null==u?"":u:"function"!=typeof u&&"dangerouslySetInnerHTML"!==l&&(l!==(l=l.replace(/xlink:?/,""))?null==u||!1===u?n.removeAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase()):n.setAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase(),u):null==u||!1===u&&!/^ar/.test(l)?n.removeAttribute(l):n.setAttribute(l,u))}function P(l){this.l[l.type](n.event?n.event(l):l)}function C(n,l,u){var t,i;for(t=0;t<n.__k.length;t++)(i=n.__k[t])&&(i.__=n,i.__e&&("function"==typeof i.type&&i.__k.length>1&&C(i,l,u),l=m(u,i,i,n.__k,null,i.__e,l),"function"==typeof n.type&&(n.__d=l)))}function z(l,u,t,i,o,r,f,e,c){var a,p,v,d,_,w,x,m,g,b,A,P=u.type;if(void 0!==u.constructor)return null;(a=n.__b)&&a(u);try{n:if("function"==typeof P){if(m=u.props,g=(a=P.contextType)&&i[a.__c],b=a?g?g.props.value:a.__:i,t.__c?x=(p=u.__c=t.__c).__=p.__E:("prototype"in P&&P.prototype.render?u.__c=p=new P(m,b):(u.__c=p=new y(m,b),p.constructor=P,p.render=H),g&&g.sub(p),p.props=m,p.state||(p.state={}),p.context=b,p.__n=i,v=p.__d=!0,p.__h=[]),null==p.__s&&(p.__s=p.state),null!=P.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=s({},p.__s)),s(p.__s,P.getDerivedStateFromProps(m,p.__s))),d=p.props,_=p.state,v)null==P.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==P.getDerivedStateFromProps&&m!==d&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(m,b),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(m,p.__s,b)||u.__v===t.__v){p.props=m,p.state=p.__s,u.__v!==t.__v&&(p.__d=!1),p.__v=u,u.__e=t.__e,u.__k=t.__k,p.__h.length&&f.push(p),C(u,e,l);break n}null!=p.componentWillUpdate&&p.componentWillUpdate(m,p.__s,b),null!=p.componentDidUpdate&&p.__h.push(function(){p.componentDidUpdate(d,_,w)})}p.context=b,p.props=m,p.state=p.__s,(a=n.__r)&&a(u),p.__d=!1,p.__v=u,p.__P=l,a=p.render(p.props,p.state,p.context),p.state=p.__s,null!=p.getChildContext&&(i=s(s({},i),p.getChildContext())),v||null==p.getSnapshotBeforeUpdate||(w=p.getSnapshotBeforeUpdate(d,_)),A=null!=a&&a.type==h&&null==a.key?a.props.children:a,k(l,Array.isArray(A)?A:[A],u,t,i,o,r,f,e,c),p.base=u.__e,p.__h.length&&f.push(p),x&&(p.__E=p.__=null),p.__e=!1}else null==r&&u.__v===t.__v?(u.__k=t.__k,u.__e=t.__e):u.__e=T(t.__e,u,t,i,o,r,f,c);(a=n.diffed)&&a(u)}catch(l){u.__v=null,n.__e(l,u,t)}return u.__e}function N(l,u){n.__c&&n.__c(u,l),l.some(function(u){try{l=u.__h,u.__h=[],l.some(function(n){n.call(u)})}catch(l){n.__e(l,u.__v)}})}function T(n,l,u,t,i,o,r,c){var s,a,p,v,h,y=u.props,d=l.props;if(i="svg"===l.type||i,null!=o)for(s=0;s<o.length;s++)if(null!=(a=o[s])&&((null===l.type?3===a.nodeType:a.localName===l.type)||n==a)){n=a,o[s]=null;break}if(null==n){if(null===l.type)return document.createTextNode(d);n=i?document.createElementNS("http://www.w3.org/2000/svg",l.type):document.createElement(l.type,d.is&&{is:d.is}),o=null,c=!1}if(null===l.type)y!==d&&n.data!==d&&(n.data=d);else{if(null!=o&&(o=e.slice.call(n.childNodes)),p=(y=u.props||f).dangerouslySetInnerHTML,v=d.dangerouslySetInnerHTML,!c){if(null!=o)for(y={},h=0;h<n.attributes.length;h++)y[n.attributes[h].name]=n.attributes[h].value;(v||p)&&(v&&p&&v.__html==p.__html||(n.innerHTML=v&&v.__html||""))}g(n,d,y,i,c),v?l.__k=[]:(s=l.props.children,k(n,Array.isArray(s)?s:[s],l,u,t,"foreignObject"!==l.type&&i,o,r,f,c)),c||("value"in d&&void 0!==(s=d.value)&&s!==n.value&&A(n,"value",s,y.value,!1),"checked"in d&&void 0!==(s=d.checked)&&s!==n.checked&&A(n,"checked",s,y.checked,!1))}return n}function $(l,u,t){try{"function"==typeof l?l(u):l.current=u}catch(l){n.__e(l,t)}}function j(l,u,t){var i,o,r;if(n.unmount&&n.unmount(l),(i=l.ref)&&(i.current&&i.current!==l.__e||$(i,null,u)),t||"function"==typeof l.type||(t=null!=(o=l.__e)),l.__e=l.__d=void 0,null!=(i=l.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(l){n.__e(l,u)}i.base=i.__P=null}if(i=l.__k)for(r=0;r<i.length;r++)i[r]&&j(i[r],u,t);null!=o&&a(o)}function H(n,l,u){return this.constructor(n,u)}function I(l,u,t){var i,r,c;n.__&&n.__(l,u),r=(i=t===o)?null:t&&t.__k||u.__k,l=p(h,null,[l]),c=[],z(u,(i?u:t||u).__k=l,r||f,f,void 0!==u.ownerSVGElement,t&&!i?[t]:r?null:u.childNodes.length?e.slice.call(u.childNodes):null,c,t||f,i),N(c,l)}n={__e:function(n,l){for(var u,t;l=l.__;)if((u=l.__c)&&!u.__)try{if(u.constructor&&null!=u.constructor.getDerivedStateFromError&&(t=!0,u.setState(u.constructor.getDerivedStateFromError(n))),null!=u.componentDidCatch&&(t=!0,u.componentDidCatch(n)),t)return w(u.__E=u)}catch(l){n=l}throw n}},l=function(n){return null!=n&&void 0===n.constructor},y.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=s({},this.state),"function"==typeof n&&(n=n(s({},u),this.props)),n&&s(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),w(this))},y.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),w(this))},y.prototype.render=h,u=[],t="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,x.__r=0,o=f,r=0,exports.render=I,exports.hydrate=function(n,l){I(n,l,o)},exports.createElement=p,exports.h=p,exports.Fragment=h,exports.createRef=function(){return{current:null}},exports.isValidElement=l,exports.Component=y,exports.cloneElement=function(n,l,u){var t,i,o,r=arguments,f=s({},n.props);for(o in l)"key"==o?t=l[o]:"ref"==o?i=l[o]:f[o]=l[o];if(arguments.length>3)for(u=[u],o=3;o<arguments.length;o++)u.push(r[o]);return null!=u&&(f.children=u),v(n.type,f,t||n.key,i||n.ref,null)},exports.createContext=function(n,l){var u={__c:l="__cC"+r++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n,u,t){return this.getChildContext||(u=[],(t={})[l]=this,this.getChildContext=function(){return t},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(w)},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n)}}),n.children}};return u.Provider.__=u.Consumer.contextType=u},exports.toChildArray=function n(l,u){return u=u||[],null==l||"boolean"==typeof l||(Array.isArray(l)?l.some(function(l){n(l,u)}):u.push(l)),u},exports.__u=j,exports.options=n;


},{}],2:[function(require,module,exports){
var n,t,r,u=require("preact"),o=0,i=[],c=u.options.__r,e=u.options.diffed,f=u.options.__c,a=u.options.unmount;function p(n,r){u.options.__h&&u.options.__h(t,n,o||r),o=0;var i=t.__H||(t.__H={__:[],__h:[]});return n>=i.__.length&&i.__.push({}),i.__[n]}function v(n){return o=1,s(A,n)}function s(r,u,o){var i=p(n++,2);return i.t=r,i.__c||(i.__c=t,i.__=[o?o(u):A(void 0,u),function(n){var t=i.t(i.__[0],n);i.__[0]!==t&&(i.__=[t,i.__[1]],i.__c.setState({}))}]),i.__}function x(r,o){var i=p(n++,4);!u.options.__s&&q(i.__H,o)&&(i.__=r,i.__H=o,t.__h.push(i))}function m(t,r){var u=p(n++,7);return q(u.__H,r)?(u.__H=r,u.__h=t,u.__=t()):u.__}function y(){i.some(function(n){if(n.__P)try{n.__H.__h.forEach(h),n.__H.__h.forEach(_),n.__H.__h=[]}catch(t){return n.__H.__h=[],u.options.__e(t,n.__v),!0}}),i=[]}u.options.__r=function(r){c&&c(r),n=0;var u=(t=r.__c).__H;u&&(u.__h.forEach(h),u.__h.forEach(_),u.__h=[])},u.options.diffed=function(n){e&&e(n);var t=n.__c;t&&t.__H&&t.__H.__h.length&&(1!==i.push(t)&&r===u.options.requestAnimationFrame||((r=u.options.requestAnimationFrame)||function(n){var t,r=function(){clearTimeout(u),l&&cancelAnimationFrame(t),setTimeout(n)},u=setTimeout(r,100);l&&(t=requestAnimationFrame(r))})(y))},u.options.__c=function(n,t){t.some(function(n){try{n.__h.forEach(h),n.__h=n.__h.filter(function(n){return!n.__||_(n)})}catch(r){t.some(function(n){n.__h&&(n.__h=[])}),t=[],u.options.__e(r,n.__v)}}),f&&f(n,t)},u.options.unmount=function(n){a&&a(n);var t=n.__c;if(t&&t.__H)try{t.__H.__.forEach(h)}catch(n){u.options.__e(n,t.__v)}};var l="function"==typeof requestAnimationFrame;function h(n){"function"==typeof n.u&&n.u()}function _(n){n.u=n.__()}function q(n,t){return!n||t.some(function(t,r){return t!==n[r]})}function A(n,t){return"function"==typeof t?t(n):t}exports.useState=v,exports.useReducer=s,exports.useEffect=function(r,o){var i=p(n++,3);!u.options.__s&&q(i.__H,o)&&(i.__=r,i.__H=o,t.__H.__h.push(i))},exports.useLayoutEffect=x,exports.useRef=function(n){return o=5,m(function(){return{current:n}},[])},exports.useImperativeHandle=function(n,t,r){o=6,x(function(){"function"==typeof n?n(t()):n&&(n.current=t())},null==r?r:r.concat(n))},exports.useMemo=m,exports.useCallback=function(n,t){return o=8,m(function(){return n},t)},exports.useContext=function(r){var u=t.context[r.__c],o=p(n++,9);return o.__c=r,u?(null==o.__&&(o.__=!0,u.sub(t)),u.props.value):r.__},exports.useDebugValue=function(n,t){u.options.useDebugValue&&u.options.useDebugValue(t?t(n):n)},exports.useErrorBoundary=function(r){var u=p(n++,10),o=v();return u.__=r,t.componentDidCatch||(t.componentDidCatch=function(n){u.__&&u.__(n),o[1](n)}),[o[0],function(){o[1](void 0)}]};


},{"preact":1}],3:[function(require,module,exports){
'use strict';

// Don't forget to include h renderer!

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = require('preact');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Card = function (_Component) {
  _inherits(Card, _Component);

  function Card(props) {
    _classCallCheck(this, Card);

    var _this = _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).call(this));

    _this.state = {
      hiddenValue: null,
      flipStatus: DEFAULT
    };
    _this.socket = props.socket;

    _this.bind();
    return _this;
  }

  _createClass(Card, [{
    key: 'bind',
    value: function bind() {
      var _this2 = this;

      this.socket.on("newRound", function () {
        setTimeout(function () {
          _this2.setState({ flipStatus: DEFAULT, hiddenValue: null });
        }, 1000);
      });
    }
  }, {
    key: 'flip',
    value: function flip(val) {
      var _this3 = this;

      this.socket.emit("flip", { "guess": val }, function (cardFace) {
        _this3.setState({ flipStatus: FLIPPED, hiddenValue: cardFace.emoji });
      });
    }
  }, {
    key: 'render',
    value: function render(props, state) {
      return (0, _preact.h)(
        'div',
        { 'class': 'card', 'data-flipStatus': this.state.flipStatus, 'data-player': props.player },
        (0, _preact.h)(
          'button',
          { 'class': 'front', onClick: this.flip.bind(this, props.val), disabled: props.disabled },
          '?'
        ),
        (0, _preact.h)(
          'div',
          { className: 'back' },
          state.hiddenValue
        )
      );
    }
  }]);

  return Card;
}(_preact.Component);

exports.default = Card;

},{"preact":1}],4:[function(require,module,exports){
'use strict';

// Don't forget to include h renderer!

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = require('preact');

var _hooks = require('preact/hooks');

var _card = require('./card.jsx');

var _card2 = _interopRequireDefault(_card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Socket = (0, _preact.createContext)(io({ upgrade: false, transports: ["websocket"] }));

var Game = function (_Component) {
  _inherits(Game, _Component);

  function Game() {
    _classCallCheck(this, Game);

    var _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this));

    _this.state = {
      cards: { player1: [], player2: [] },
      score: { player1: 0, player2: 0 },
      flippedCards: { first: {}, second: {} },
      started: false,
      waiting: true
    };

    _this.socket = (0, _hooks.useContext)(Socket);

    console.log("Binding");
    _this.bind();
    return _this;
  }

  _createClass(Game, [{
    key: 'bind',
    value: function bind() {
      var _this2 = this;

      this.socket.on("connect", function () {
        console.log("Connected");
      });

      this.socket.on("disconnect", function () {
        console.log("Disconnected");
      });

      this.socket.on("start", function (numOfCards) {
        console.log("Start game");
        _this2.setState({ started: true });
      });

      this.socket.on("newRound", function () {
        console.log("Round starting");
      });

      this.socket.on("turn", function () {
        console.log("Turning");
        _this2.setState({ waiting: false });
      });

      this.socket.on("wait", function () {
        console.log("Waiting");
        _this2.setState({ waiting: true });
      });

      this.socket.on("end", function () {
        console.log("End");
        _this2.setState({ started: false });
      });

      this.socket.on("error", function () {
        console.error("An error with the server occurred.");
      });

      this.socket.on("matched", function (cards) {
        console.log("Matched!", cards);
      });
    }
  }, {
    key: 'createCard',
    value: function createCard(props) {
      return (0, _preact.h)(
        Socket.Consumer,
        null,
        function (socket) {
          return (0, _preact.h)(_card2.default, _extends({}, props, { socket: socket }));
        }
      );
    }
  }, {
    key: 'createHand',
    value: function createHand(player) {
      var hand = [];
      for (var i = 0; i < EMOJIS.length; i++) {
        if (player === PLAYER_1) {
          if (this.state.waiting) {
            hand.push(this.createCard({ player: player, val: i, disabled: true }));
          } else {
            hand.push(this.createCard({ player: player, val: i }));
          }
        } else {
          hand.push(this.createCard({ player: player, val: i, disabled: true }));
        }
      }
      return hand;
    }
  }, {
    key: 'render',
    value: function render(props, state) {
      if (!this.state.started) {
        return (0, _preact.h)(
          'div',
          { className: 'game' },
          (0, _preact.h)(
            'div',
            { 'class': 'head' },
            (0, _preact.h)(
              'h2',
              null,
              'Waiting for opponent...'
            )
          )
        );
      }
      return (0, _preact.h)(
        'div',
        { 'class': 'game' },
        (0, _preact.h)(
          'h2',
          null,
          'Player: ',
          this.state.waiting ? "Opponent's turn" : "Your Turn",
          ' '
        ),
        (0, _preact.h)(
          'div',
          { 'class': 'grid' },
          this.createHand(PLAYER_1).map(function (index) {
            return index;
          })
        ),
        (0, _preact.h)('hr', { 'class': 'break' }),
        (0, _preact.h)(
          'div',
          { 'class': 'grid' },
          this.createHand(PLAYER_2).map(function (index) {
            return index;
          })
        ),
        (0, _preact.h)(
          'h2',
          null,
          'Opponent'
        )
      );
    }
  }]);

  return Game;
}(_preact.Component);

exports.default = Game;

},{"./card.jsx":3,"preact":1,"preact/hooks":2}],5:[function(require,module,exports){
'use strict';

var _preact = require('preact');

var _game = require('./components/game.jsx');

var _game2 = _interopRequireDefault(_game);

require('./style/index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('rendering');
(0, _preact.render)((0, _preact.h)(
    'div',
    null,
    (0, _preact.h)(_game2.default, null)
), document.body);

},{"./components/game.jsx":4,"./style/index.css":6,"preact":1}],6:[function(require,module,exports){

},{}]},{},[5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvcHJlYWN0L2Rpc3QvcHJlYWN0LmpzIiwibm9kZV9tb2R1bGVzL3ByZWFjdC9ob29rcy9kaXN0L2hvb2tzLmpzIiwic3JjL2NvbXBvbmVudHMvY2FyZC5qc3giLCJzcmMvY29tcG9uZW50cy9nYW1lLmpzeCIsInNyYy9pbmRleC5qc3giLCJzcmMvc3R5bGUvaW5kZXguY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTs7QUNGQTs7QUFFQTs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7SUFFcUIsSTs7O0FBQ25CLGdCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFFakIsVUFBSyxLQUFMLEdBQWE7QUFDWCxtQkFBYSxJQURGO0FBRVgsa0JBQVk7QUFGRCxLQUFiO0FBSUEsVUFBSyxNQUFMLEdBQWMsTUFBTSxNQUFwQjs7QUFFQSxVQUFLLElBQUw7QUFSaUI7QUFTbEI7Ozs7MkJBRU07QUFBQTs7QUFDTCxXQUFLLE1BQUwsQ0FBWSxFQUFaLENBQWUsVUFBZixFQUEyQixZQUFNO0FBQy9CLG1CQUFXLFlBQU07QUFDZixpQkFBSyxRQUFMLENBQWMsRUFBQyxZQUFZLE9BQWIsRUFBc0IsYUFBYSxJQUFuQyxFQUFkO0FBQ0QsU0FGRCxFQUVHLElBRkg7QUFHRCxPQUpEO0FBS0Q7Ozt5QkFFSSxHLEVBQUs7QUFBQTs7QUFDUixXQUFLLE1BQUwsQ0FBWSxJQUFaLENBQWlCLE1BQWpCLEVBQXlCLEVBQUMsU0FBUyxHQUFWLEVBQXpCLEVBQXlDLFVBQUMsUUFBRCxFQUFjO0FBQ3JELGVBQUssUUFBTCxDQUFjLEVBQUMsWUFBWSxPQUFiLEVBQXNCLGFBQWEsU0FBUyxLQUE1QyxFQUFkO0FBQ0QsT0FGRDtBQUdEOzs7MkJBRU0sSyxFQUFPLEssRUFBTztBQUNuQixhQUFRO0FBQUE7QUFBQSxVQUFLLFNBQU0sTUFBWCxF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QjtBQUZKLFNBRk07QUFPTiwrQkFBSSxTQUFNLE9BQVYsR0FQTTtBQVFOO0FBQUE7QUFBQSxZQUFLLFNBQU0sTUFBWDtBQUVJLGVBQUssVUFBTCxDQUFnQixRQUFoQixFQUEwQixHQUExQixDQUE4QixVQUFDLEtBQUQ7QUFBQSxtQkFBVyxLQUFYO0FBQUEsV0FBOUI7QUFGSixTQVJNO0FBYU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWJNLE9BQVI7QUFlRDs7Ozs7O2tCQTFHa0IsSTs7O0FDVnJCOztBQUVBOztBQUNBOzs7O0FBQ0E7Ozs7QUFFSSxRQUFRLEdBQVIsQ0FBWSxXQUFaO0FBQ0Esb0JBQVE7QUFBQTtBQUFBO0FBQ0E7QUFEQSxDQUFSLEVBR0csU0FBUyxJQUhaOzs7QUNQSiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsInZhciBuLGwsdSx0LGksbyxyLGY9e30sZT1bXSxjPS9hY2l0fGV4KD86c3xnfG58cHwkKXxycGh8Z3JpZHxvd3N8bW5jfG50d3xpbmVbY2hdfHpvb3xeb3JkfGl0ZXJhL2k7ZnVuY3Rpb24gcyhuLGwpe2Zvcih2YXIgdSBpbiBsKW5bdV09bFt1XTtyZXR1cm4gbn1mdW5jdGlvbiBhKG4pe3ZhciBsPW4ucGFyZW50Tm9kZTtsJiZsLnJlbW92ZUNoaWxkKG4pfWZ1bmN0aW9uIHAobixsLHUpe3ZhciB0LGksbyxyPWFyZ3VtZW50cyxmPXt9O2ZvcihvIGluIGwpXCJrZXlcIj09bz90PWxbb106XCJyZWZcIj09bz9pPWxbb106ZltvXT1sW29dO2lmKGFyZ3VtZW50cy5sZW5ndGg+Mylmb3IodT1bdV0sbz0zO288YXJndW1lbnRzLmxlbmd0aDtvKyspdS5wdXNoKHJbb10pO2lmKG51bGwhPXUmJihmLmNoaWxkcmVuPXUpLFwiZnVuY3Rpb25cIj09dHlwZW9mIG4mJm51bGwhPW4uZGVmYXVsdFByb3BzKWZvcihvIGluIG4uZGVmYXVsdFByb3BzKXZvaWQgMD09PWZbb10mJihmW29dPW4uZGVmYXVsdFByb3BzW29dKTtyZXR1cm4gdihuLGYsdCxpLG51bGwpfWZ1bmN0aW9uIHYobCx1LHQsaSxvKXt2YXIgcj17dHlwZTpsLHByb3BzOnUsa2V5OnQscmVmOmksX19rOm51bGwsX186bnVsbCxfX2I6MCxfX2U6bnVsbCxfX2Q6dm9pZCAwLF9fYzpudWxsLGNvbnN0cnVjdG9yOnZvaWQgMCxfX3Y6b307cmV0dXJuIG51bGw9PW8mJihyLl9fdj1yKSxudWxsIT1uLnZub2RlJiZuLnZub2RlKHIpLHJ9ZnVuY3Rpb24gaChuKXtyZXR1cm4gbi5jaGlsZHJlbn1mdW5jdGlvbiB5KG4sbCl7dGhpcy5wcm9wcz1uLHRoaXMuY29udGV4dD1sfWZ1bmN0aW9uIGQobixsKXtpZihudWxsPT1sKXJldHVybiBuLl9fP2Qobi5fXyxuLl9fLl9fay5pbmRleE9mKG4pKzEpOm51bGw7Zm9yKHZhciB1O2w8bi5fX2subGVuZ3RoO2wrKylpZihudWxsIT0odT1uLl9fa1tsXSkmJm51bGwhPXUuX19lKXJldHVybiB1Ll9fZTtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBuLnR5cGU/ZChuKTpudWxsfWZ1bmN0aW9uIF8obil7dmFyIGwsdTtpZihudWxsIT0obj1uLl9fKSYmbnVsbCE9bi5fX2Mpe2ZvcihuLl9fZT1uLl9fYy5iYXNlPW51bGwsbD0wO2w8bi5fX2subGVuZ3RoO2wrKylpZihudWxsIT0odT1uLl9fa1tsXSkmJm51bGwhPXUuX19lKXtuLl9fZT1uLl9fYy5iYXNlPXUuX19lO2JyZWFrfXJldHVybiBfKG4pfX1mdW5jdGlvbiB3KGwpeyghbC5fX2QmJihsLl9fZD0hMCkmJnUucHVzaChsKSYmIXguX19yKyt8fGkhPT1uLmRlYm91bmNlUmVuZGVyaW5nKSYmKChpPW4uZGVib3VuY2VSZW5kZXJpbmcpfHx0KSh4KX1mdW5jdGlvbiB4KCl7Zm9yKHZhciBuO3guX19yPXUubGVuZ3RoOyluPXUuc29ydChmdW5jdGlvbihuLGwpe3JldHVybiBuLl9fdi5fX2ItbC5fX3YuX19ifSksdT1bXSxuLnNvbWUoZnVuY3Rpb24obil7dmFyIGwsdSx0LGksbyxyLGY7bi5fX2QmJihyPShvPShsPW4pLl9fdikuX19lLChmPWwuX19QKSYmKHU9W10sKHQ9cyh7fSxvKSkuX192PXQsaT16KGYsbyx0LGwuX19uLHZvaWQgMCE9PWYub3duZXJTVkdFbGVtZW50LG51bGwsdSxudWxsPT1yP2Qobyk6ciksTih1LG8pLGkhPXImJl8obykpKX0pfWZ1bmN0aW9uIGsobixsLHUsdCxpLG8scixjLHMscCl7dmFyIHksXyx3LHgsayxnLGIsQT10JiZ0Ll9fa3x8ZSxQPUEubGVuZ3RoO2ZvcihzPT1mJiYocz1udWxsIT1yP3JbMF06UD9kKHQsMCk6bnVsbCksdS5fX2s9W10seT0wO3k8bC5sZW5ndGg7eSsrKWlmKG51bGwhPSh4PXUuX19rW3ldPW51bGw9PSh4PWxbeV0pfHxcImJvb2xlYW5cIj09dHlwZW9mIHg/bnVsbDpcInN0cmluZ1wiPT10eXBlb2YgeHx8XCJudW1iZXJcIj09dHlwZW9mIHg/dihudWxsLHgsbnVsbCxudWxsLHgpOkFycmF5LmlzQXJyYXkoeCk/dihoLHtjaGlsZHJlbjp4fSxudWxsLG51bGwsbnVsbCk6bnVsbCE9eC5fX2V8fG51bGwhPXguX19jP3YoeC50eXBlLHgucHJvcHMseC5rZXksbnVsbCx4Ll9fdik6eCkpe2lmKHguX189dSx4Ll9fYj11Ll9fYisxLG51bGw9PT0odz1BW3ldKXx8dyYmeC5rZXk9PXcua2V5JiZ4LnR5cGU9PT13LnR5cGUpQVt5XT12b2lkIDA7ZWxzZSBmb3IoXz0wO188UDtfKyspe2lmKCh3PUFbX10pJiZ4LmtleT09dy5rZXkmJngudHlwZT09PXcudHlwZSl7QVtfXT12b2lkIDA7YnJlYWt9dz1udWxsfWs9eihuLHgsdz13fHxmLGksbyxyLGMscyxwKSwoXz14LnJlZikmJncucmVmIT1fJiYoYnx8KGI9W10pLHcucmVmJiZiLnB1c2gody5yZWYsbnVsbCx4KSxiLnB1c2goXyx4Ll9fY3x8ayx4KSksbnVsbCE9az8obnVsbD09ZyYmKGc9aykscz1tKG4seCx3LEEscixrLHMpLHB8fFwib3B0aW9uXCIhPXUudHlwZT9cImZ1bmN0aW9uXCI9PXR5cGVvZiB1LnR5cGUmJih1Ll9fZD1zKTpuLnZhbHVlPVwiXCIpOnMmJncuX19lPT1zJiZzLnBhcmVudE5vZGUhPW4mJihzPWQodykpfWlmKHUuX19lPWcsbnVsbCE9ciYmXCJmdW5jdGlvblwiIT10eXBlb2YgdS50eXBlKWZvcih5PXIubGVuZ3RoO3ktLTspbnVsbCE9clt5XSYmYShyW3ldKTtmb3IoeT1QO3ktLTspbnVsbCE9QVt5XSYmaihBW3ldLEFbeV0pO2lmKGIpZm9yKHk9MDt5PGIubGVuZ3RoO3krKykkKGJbeV0sYlsrK3ldLGJbKyt5XSl9ZnVuY3Rpb24gbShuLGwsdSx0LGksbyxyKXt2YXIgZixlLGM7aWYodm9pZCAwIT09bC5fX2QpZj1sLl9fZCxsLl9fZD12b2lkIDA7ZWxzZSBpZihpPT11fHxvIT1yfHxudWxsPT1vLnBhcmVudE5vZGUpbjppZihudWxsPT1yfHxyLnBhcmVudE5vZGUhPT1uKW4uYXBwZW5kQ2hpbGQobyksZj1udWxsO2Vsc2V7Zm9yKGU9cixjPTA7KGU9ZS5uZXh0U2libGluZykmJmM8dC5sZW5ndGg7Yys9MilpZihlPT1vKWJyZWFrIG47bi5pbnNlcnRCZWZvcmUobyxyKSxmPXJ9cmV0dXJuIHZvaWQgMCE9PWY/ZjpvLm5leHRTaWJsaW5nfWZ1bmN0aW9uIGcobixsLHUsdCxpKXt2YXIgbztmb3IobyBpbiB1KVwiY2hpbGRyZW5cIj09PW98fFwia2V5XCI9PT1vfHxvIGluIGx8fEEobixvLG51bGwsdVtvXSx0KTtmb3IobyBpbiBsKWkmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGxbb118fFwiY2hpbGRyZW5cIj09PW98fFwia2V5XCI9PT1vfHxcInZhbHVlXCI9PT1vfHxcImNoZWNrZWRcIj09PW98fHVbb109PT1sW29dfHxBKG4sbyxsW29dLHVbb10sdCl9ZnVuY3Rpb24gYihuLGwsdSl7XCItXCI9PT1sWzBdP24uc2V0UHJvcGVydHkobCx1KTpuW2xdPW51bGw9PXU/XCJcIjpcIm51bWJlclwiIT10eXBlb2YgdXx8Yy50ZXN0KGwpP3U6dStcInB4XCJ9ZnVuY3Rpb24gQShuLGwsdSx0LGkpe3ZhciBvLHI7aWYoaSYmXCJjbGFzc05hbWVcIj09bCYmKGw9XCJjbGFzc1wiKSxcInN0eWxlXCI9PT1sKWlmKFwic3RyaW5nXCI9PXR5cGVvZiB1KW4uc3R5bGU9dTtlbHNle2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0JiYobi5zdHlsZT10PVwiXCIpLHQpZm9yKGwgaW4gdCl1JiZsIGluIHV8fGIobi5zdHlsZSxsLFwiXCIpO2lmKHUpZm9yKGwgaW4gdSl0JiZ1W2xdPT09dFtsXXx8YihuLnN0eWxlLGwsdVtsXSl9ZWxzZVwib1wiPT09bFswXSYmXCJuXCI9PT1sWzFdPyhvPWwhPT0obD1sLnJlcGxhY2UoL0NhcHR1cmUkLyxcIlwiKSksKHI9bC50b0xvd2VyQ2FzZSgpKWluIG4mJihsPXIpLGw9bC5zbGljZSgyKSxuLmx8fChuLmw9e30pLG4ubFtsXT11LHU/dHx8bi5hZGRFdmVudExpc3RlbmVyKGwsUCxvKTpuLnJlbW92ZUV2ZW50TGlzdGVuZXIobCxQLG8pKTpcImxpc3RcIiE9PWwmJlwidGFnTmFtZVwiIT09bCYmXCJmb3JtXCIhPT1sJiZcInR5cGVcIiE9PWwmJlwic2l6ZVwiIT09bCYmXCJkb3dubG9hZFwiIT09bCYmXCJocmVmXCIhPT1sJiYhaSYmbCBpbiBuP25bbF09bnVsbD09dT9cIlwiOnU6XCJmdW5jdGlvblwiIT10eXBlb2YgdSYmXCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiIT09bCYmKGwhPT0obD1sLnJlcGxhY2UoL3hsaW5rOj8vLFwiXCIpKT9udWxsPT11fHwhMT09PXU/bi5yZW1vdmVBdHRyaWJ1dGVOUyhcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIixsLnRvTG93ZXJDYXNlKCkpOm4uc2V0QXR0cmlidXRlTlMoXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsbC50b0xvd2VyQ2FzZSgpLHUpOm51bGw9PXV8fCExPT09dSYmIS9eYXIvLnRlc3QobCk/bi5yZW1vdmVBdHRyaWJ1dGUobCk6bi5zZXRBdHRyaWJ1dGUobCx1KSl9ZnVuY3Rpb24gUChsKXt0aGlzLmxbbC50eXBlXShuLmV2ZW50P24uZXZlbnQobCk6bCl9ZnVuY3Rpb24gQyhuLGwsdSl7dmFyIHQsaTtmb3IodD0wO3Q8bi5fX2subGVuZ3RoO3QrKykoaT1uLl9fa1t0XSkmJihpLl9fPW4saS5fX2UmJihcImZ1bmN0aW9uXCI9PXR5cGVvZiBpLnR5cGUmJmkuX19rLmxlbmd0aD4xJiZDKGksbCx1KSxsPW0odSxpLGksbi5fX2ssbnVsbCxpLl9fZSxsKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBuLnR5cGUmJihuLl9fZD1sKSkpfWZ1bmN0aW9uIHoobCx1LHQsaSxvLHIsZixlLGMpe3ZhciBhLHAsdixkLF8sdyx4LG0sZyxiLEEsUD11LnR5cGU7aWYodm9pZCAwIT09dS5jb25zdHJ1Y3RvcilyZXR1cm4gbnVsbDsoYT1uLl9fYikmJmEodSk7dHJ5e246aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgUCl7aWYobT11LnByb3BzLGc9KGE9UC5jb250ZXh0VHlwZSkmJmlbYS5fX2NdLGI9YT9nP2cucHJvcHMudmFsdWU6YS5fXzppLHQuX19jP3g9KHA9dS5fX2M9dC5fX2MpLl9fPXAuX19FOihcInByb3RvdHlwZVwiaW4gUCYmUC5wcm90b3R5cGUucmVuZGVyP3UuX19jPXA9bmV3IFAobSxiKToodS5fX2M9cD1uZXcgeShtLGIpLHAuY29uc3RydWN0b3I9UCxwLnJlbmRlcj1IKSxnJiZnLnN1YihwKSxwLnByb3BzPW0scC5zdGF0ZXx8KHAuc3RhdGU9e30pLHAuY29udGV4dD1iLHAuX19uPWksdj1wLl9fZD0hMCxwLl9faD1bXSksbnVsbD09cC5fX3MmJihwLl9fcz1wLnN0YXRlKSxudWxsIT1QLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmKHAuX19zPT1wLnN0YXRlJiYocC5fX3M9cyh7fSxwLl9fcykpLHMocC5fX3MsUC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobSxwLl9fcykpKSxkPXAucHJvcHMsXz1wLnN0YXRlLHYpbnVsbD09UC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJm51bGwhPXAuY29tcG9uZW50V2lsbE1vdW50JiZwLmNvbXBvbmVudFdpbGxNb3VudCgpLG51bGwhPXAuY29tcG9uZW50RGlkTW91bnQmJnAuX19oLnB1c2gocC5jb21wb25lbnREaWRNb3VudCk7ZWxzZXtpZihudWxsPT1QLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmbSE9PWQmJm51bGwhPXAuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyYmcC5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG0sYiksIXAuX19lJiZudWxsIT1wLnNob3VsZENvbXBvbmVudFVwZGF0ZSYmITE9PT1wLnNob3VsZENvbXBvbmVudFVwZGF0ZShtLHAuX19zLGIpfHx1Ll9fdj09PXQuX192KXtwLnByb3BzPW0scC5zdGF0ZT1wLl9fcyx1Ll9fdiE9PXQuX192JiYocC5fX2Q9ITEpLHAuX192PXUsdS5fX2U9dC5fX2UsdS5fX2s9dC5fX2sscC5fX2gubGVuZ3RoJiZmLnB1c2gocCksQyh1LGUsbCk7YnJlYWsgbn1udWxsIT1wLmNvbXBvbmVudFdpbGxVcGRhdGUmJnAuY29tcG9uZW50V2lsbFVwZGF0ZShtLHAuX19zLGIpLG51bGwhPXAuY29tcG9uZW50RGlkVXBkYXRlJiZwLl9faC5wdXNoKGZ1bmN0aW9uKCl7cC5jb21wb25lbnREaWRVcGRhdGUoZCxfLHcpfSl9cC5jb250ZXh0PWIscC5wcm9wcz1tLHAuc3RhdGU9cC5fX3MsKGE9bi5fX3IpJiZhKHUpLHAuX19kPSExLHAuX192PXUscC5fX1A9bCxhPXAucmVuZGVyKHAucHJvcHMscC5zdGF0ZSxwLmNvbnRleHQpLHAuc3RhdGU9cC5fX3MsbnVsbCE9cC5nZXRDaGlsZENvbnRleHQmJihpPXMocyh7fSxpKSxwLmdldENoaWxkQ29udGV4dCgpKSksdnx8bnVsbD09cC5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZXx8KHc9cC5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZShkLF8pKSxBPW51bGwhPWEmJmEudHlwZT09aCYmbnVsbD09YS5rZXk/YS5wcm9wcy5jaGlsZHJlbjphLGsobCxBcnJheS5pc0FycmF5KEEpP0E6W0FdLHUsdCxpLG8scixmLGUsYykscC5iYXNlPXUuX19lLHAuX19oLmxlbmd0aCYmZi5wdXNoKHApLHgmJihwLl9fRT1wLl9fPW51bGwpLHAuX19lPSExfWVsc2UgbnVsbD09ciYmdS5fX3Y9PT10Ll9fdj8odS5fX2s9dC5fX2ssdS5fX2U9dC5fX2UpOnUuX19lPVQodC5fX2UsdSx0LGksbyxyLGYsYyk7KGE9bi5kaWZmZWQpJiZhKHUpfWNhdGNoKGwpe3UuX192PW51bGwsbi5fX2UobCx1LHQpfXJldHVybiB1Ll9fZX1mdW5jdGlvbiBOKGwsdSl7bi5fX2MmJm4uX19jKHUsbCksbC5zb21lKGZ1bmN0aW9uKHUpe3RyeXtsPXUuX19oLHUuX19oPVtdLGwuc29tZShmdW5jdGlvbihuKXtuLmNhbGwodSl9KX1jYXRjaChsKXtuLl9fZShsLHUuX192KX19KX1mdW5jdGlvbiBUKG4sbCx1LHQsaSxvLHIsYyl7dmFyIHMsYSxwLHYsaCx5PXUucHJvcHMsZD1sLnByb3BzO2lmKGk9XCJzdmdcIj09PWwudHlwZXx8aSxudWxsIT1vKWZvcihzPTA7czxvLmxlbmd0aDtzKyspaWYobnVsbCE9KGE9b1tzXSkmJigobnVsbD09PWwudHlwZT8zPT09YS5ub2RlVHlwZTphLmxvY2FsTmFtZT09PWwudHlwZSl8fG49PWEpKXtuPWEsb1tzXT1udWxsO2JyZWFrfWlmKG51bGw9PW4pe2lmKG51bGw9PT1sLnR5cGUpcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGQpO249aT9kb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLGwudHlwZSk6ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChsLnR5cGUsZC5pcyYme2lzOmQuaXN9KSxvPW51bGwsYz0hMX1pZihudWxsPT09bC50eXBlKXkhPT1kJiZuLmRhdGEhPT1kJiYobi5kYXRhPWQpO2Vsc2V7aWYobnVsbCE9byYmKG89ZS5zbGljZS5jYWxsKG4uY2hpbGROb2RlcykpLHA9KHk9dS5wcm9wc3x8ZikuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwsdj1kLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLCFjKXtpZihudWxsIT1vKWZvcih5PXt9LGg9MDtoPG4uYXR0cmlidXRlcy5sZW5ndGg7aCsrKXlbbi5hdHRyaWJ1dGVzW2hdLm5hbWVdPW4uYXR0cmlidXRlc1toXS52YWx1ZTsodnx8cCkmJih2JiZwJiZ2Ll9faHRtbD09cC5fX2h0bWx8fChuLmlubmVySFRNTD12JiZ2Ll9faHRtbHx8XCJcIikpfWcobixkLHksaSxjKSx2P2wuX19rPVtdOihzPWwucHJvcHMuY2hpbGRyZW4sayhuLEFycmF5LmlzQXJyYXkocyk/czpbc10sbCx1LHQsXCJmb3JlaWduT2JqZWN0XCIhPT1sLnR5cGUmJmksbyxyLGYsYykpLGN8fChcInZhbHVlXCJpbiBkJiZ2b2lkIDAhPT0ocz1kLnZhbHVlKSYmcyE9PW4udmFsdWUmJkEobixcInZhbHVlXCIscyx5LnZhbHVlLCExKSxcImNoZWNrZWRcImluIGQmJnZvaWQgMCE9PShzPWQuY2hlY2tlZCkmJnMhPT1uLmNoZWNrZWQmJkEobixcImNoZWNrZWRcIixzLHkuY2hlY2tlZCwhMSkpfXJldHVybiBufWZ1bmN0aW9uICQobCx1LHQpe3RyeXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBsP2wodSk6bC5jdXJyZW50PXV9Y2F0Y2gobCl7bi5fX2UobCx0KX19ZnVuY3Rpb24gaihsLHUsdCl7dmFyIGksbyxyO2lmKG4udW5tb3VudCYmbi51bm1vdW50KGwpLChpPWwucmVmKSYmKGkuY3VycmVudCYmaS5jdXJyZW50IT09bC5fX2V8fCQoaSxudWxsLHUpKSx0fHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBsLnR5cGV8fCh0PW51bGwhPShvPWwuX19lKSksbC5fX2U9bC5fX2Q9dm9pZCAwLG51bGwhPShpPWwuX19jKSl7aWYoaS5jb21wb25lbnRXaWxsVW5tb3VudCl0cnl7aS5jb21wb25lbnRXaWxsVW5tb3VudCgpfWNhdGNoKGwpe24uX19lKGwsdSl9aS5iYXNlPWkuX19QPW51bGx9aWYoaT1sLl9faylmb3Iocj0wO3I8aS5sZW5ndGg7cisrKWlbcl0mJmooaVtyXSx1LHQpO251bGwhPW8mJmEobyl9ZnVuY3Rpb24gSChuLGwsdSl7cmV0dXJuIHRoaXMuY29uc3RydWN0b3Iobix1KX1mdW5jdGlvbiBJKGwsdSx0KXt2YXIgaSxyLGM7bi5fXyYmbi5fXyhsLHUpLHI9KGk9dD09PW8pP251bGw6dCYmdC5fX2t8fHUuX19rLGw9cChoLG51bGwsW2xdKSxjPVtdLHoodSwoaT91OnR8fHUpLl9faz1sLHJ8fGYsZix2b2lkIDAhPT11Lm93bmVyU1ZHRWxlbWVudCx0JiYhaT9bdF06cj9udWxsOnUuY2hpbGROb2Rlcy5sZW5ndGg/ZS5zbGljZS5jYWxsKHUuY2hpbGROb2Rlcyk6bnVsbCxjLHR8fGYsaSksTihjLGwpfW49e19fZTpmdW5jdGlvbihuLGwpe2Zvcih2YXIgdSx0O2w9bC5fXzspaWYoKHU9bC5fX2MpJiYhdS5fXyl0cnl7aWYodS5jb25zdHJ1Y3RvciYmbnVsbCE9dS5jb25zdHJ1Y3Rvci5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3ImJih0PSEwLHUuc2V0U3RhdGUodS5jb25zdHJ1Y3Rvci5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IobikpKSxudWxsIT11LmNvbXBvbmVudERpZENhdGNoJiYodD0hMCx1LmNvbXBvbmVudERpZENhdGNoKG4pKSx0KXJldHVybiB3KHUuX19FPXUpfWNhdGNoKGwpe249bH10aHJvdyBufX0sbD1mdW5jdGlvbihuKXtyZXR1cm4gbnVsbCE9biYmdm9pZCAwPT09bi5jb25zdHJ1Y3Rvcn0seS5wcm90b3R5cGUuc2V0U3RhdGU9ZnVuY3Rpb24obixsKXt2YXIgdTt1PW51bGwhPXRoaXMuX19zJiZ0aGlzLl9fcyE9PXRoaXMuc3RhdGU/dGhpcy5fX3M6dGhpcy5fX3M9cyh7fSx0aGlzLnN0YXRlKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBuJiYobj1uKHMoe30sdSksdGhpcy5wcm9wcykpLG4mJnModSxuKSxudWxsIT1uJiZ0aGlzLl9fdiYmKGwmJnRoaXMuX19oLnB1c2gobCksdyh0aGlzKSl9LHkucHJvdG90eXBlLmZvcmNlVXBkYXRlPWZ1bmN0aW9uKG4pe3RoaXMuX192JiYodGhpcy5fX2U9ITAsbiYmdGhpcy5fX2gucHVzaChuKSx3KHRoaXMpKX0seS5wcm90b3R5cGUucmVuZGVyPWgsdT1bXSx0PVwiZnVuY3Rpb25cIj09dHlwZW9mIFByb21pc2U/UHJvbWlzZS5wcm90b3R5cGUudGhlbi5iaW5kKFByb21pc2UucmVzb2x2ZSgpKTpzZXRUaW1lb3V0LHguX19yPTAsbz1mLHI9MCxleHBvcnRzLnJlbmRlcj1JLGV4cG9ydHMuaHlkcmF0ZT1mdW5jdGlvbihuLGwpe0kobixsLG8pfSxleHBvcnRzLmNyZWF0ZUVsZW1lbnQ9cCxleHBvcnRzLmg9cCxleHBvcnRzLkZyYWdtZW50PWgsZXhwb3J0cy5jcmVhdGVSZWY9ZnVuY3Rpb24oKXtyZXR1cm57Y3VycmVudDpudWxsfX0sZXhwb3J0cy5pc1ZhbGlkRWxlbWVudD1sLGV4cG9ydHMuQ29tcG9uZW50PXksZXhwb3J0cy5jbG9uZUVsZW1lbnQ9ZnVuY3Rpb24obixsLHUpe3ZhciB0LGksbyxyPWFyZ3VtZW50cyxmPXMoe30sbi5wcm9wcyk7Zm9yKG8gaW4gbClcImtleVwiPT1vP3Q9bFtvXTpcInJlZlwiPT1vP2k9bFtvXTpmW29dPWxbb107aWYoYXJndW1lbnRzLmxlbmd0aD4zKWZvcih1PVt1XSxvPTM7bzxhcmd1bWVudHMubGVuZ3RoO28rKyl1LnB1c2gocltvXSk7cmV0dXJuIG51bGwhPXUmJihmLmNoaWxkcmVuPXUpLHYobi50eXBlLGYsdHx8bi5rZXksaXx8bi5yZWYsbnVsbCl9LGV4cG9ydHMuY3JlYXRlQ29udGV4dD1mdW5jdGlvbihuLGwpe3ZhciB1PXtfX2M6bD1cIl9fY0NcIityKyssX186bixDb25zdW1lcjpmdW5jdGlvbihuLGwpe3JldHVybiBuLmNoaWxkcmVuKGwpfSxQcm92aWRlcjpmdW5jdGlvbihuLHUsdCl7cmV0dXJuIHRoaXMuZ2V0Q2hpbGRDb250ZXh0fHwodT1bXSwodD17fSlbbF09dGhpcyx0aGlzLmdldENoaWxkQ29udGV4dD1mdW5jdGlvbigpe3JldHVybiB0fSx0aGlzLnNob3VsZENvbXBvbmVudFVwZGF0ZT1mdW5jdGlvbihuKXt0aGlzLnByb3BzLnZhbHVlIT09bi52YWx1ZSYmdS5zb21lKHcpfSx0aGlzLnN1Yj1mdW5jdGlvbihuKXt1LnB1c2gobik7dmFyIGw9bi5jb21wb25lbnRXaWxsVW5tb3VudDtuLmNvbXBvbmVudFdpbGxVbm1vdW50PWZ1bmN0aW9uKCl7dS5zcGxpY2UodS5pbmRleE9mKG4pLDEpLGwmJmwuY2FsbChuKX19KSxuLmNoaWxkcmVufX07cmV0dXJuIHUuUHJvdmlkZXIuX189dS5Db25zdW1lci5jb250ZXh0VHlwZT11fSxleHBvcnRzLnRvQ2hpbGRBcnJheT1mdW5jdGlvbiBuKGwsdSl7cmV0dXJuIHU9dXx8W10sbnVsbD09bHx8XCJib29sZWFuXCI9PXR5cGVvZiBsfHwoQXJyYXkuaXNBcnJheShsKT9sLnNvbWUoZnVuY3Rpb24obCl7bihsLHUpfSk6dS5wdXNoKGwpKSx1fSxleHBvcnRzLl9fdT1qLGV4cG9ydHMub3B0aW9ucz1uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHJlYWN0LmpzLm1hcFxuIiwidmFyIG4sdCxyLHU9cmVxdWlyZShcInByZWFjdFwiKSxvPTAsaT1bXSxjPXUub3B0aW9ucy5fX3IsZT11Lm9wdGlvbnMuZGlmZmVkLGY9dS5vcHRpb25zLl9fYyxhPXUub3B0aW9ucy51bm1vdW50O2Z1bmN0aW9uIHAobixyKXt1Lm9wdGlvbnMuX19oJiZ1Lm9wdGlvbnMuX19oKHQsbixvfHxyKSxvPTA7dmFyIGk9dC5fX0h8fCh0Ll9fSD17X186W10sX19oOltdfSk7cmV0dXJuIG4+PWkuX18ubGVuZ3RoJiZpLl9fLnB1c2goe30pLGkuX19bbl19ZnVuY3Rpb24gdihuKXtyZXR1cm4gbz0xLHMoQSxuKX1mdW5jdGlvbiBzKHIsdSxvKXt2YXIgaT1wKG4rKywyKTtyZXR1cm4gaS50PXIsaS5fX2N8fChpLl9fYz10LGkuX189W28/byh1KTpBKHZvaWQgMCx1KSxmdW5jdGlvbihuKXt2YXIgdD1pLnQoaS5fX1swXSxuKTtpLl9fWzBdIT09dCYmKGkuX189W3QsaS5fX1sxXV0saS5fX2Muc2V0U3RhdGUoe30pKX1dKSxpLl9ffWZ1bmN0aW9uIHgocixvKXt2YXIgaT1wKG4rKyw0KTshdS5vcHRpb25zLl9fcyYmcShpLl9fSCxvKSYmKGkuX189cixpLl9fSD1vLHQuX19oLnB1c2goaSkpfWZ1bmN0aW9uIG0odCxyKXt2YXIgdT1wKG4rKyw3KTtyZXR1cm4gcSh1Ll9fSCxyKT8odS5fX0g9cix1Ll9faD10LHUuX189dCgpKTp1Ll9ffWZ1bmN0aW9uIHkoKXtpLnNvbWUoZnVuY3Rpb24obil7aWYobi5fX1ApdHJ5e24uX19ILl9faC5mb3JFYWNoKGgpLG4uX19ILl9faC5mb3JFYWNoKF8pLG4uX19ILl9faD1bXX1jYXRjaCh0KXtyZXR1cm4gbi5fX0guX19oPVtdLHUub3B0aW9ucy5fX2UodCxuLl9fdiksITB9fSksaT1bXX11Lm9wdGlvbnMuX19yPWZ1bmN0aW9uKHIpe2MmJmMociksbj0wO3ZhciB1PSh0PXIuX19jKS5fX0g7dSYmKHUuX19oLmZvckVhY2goaCksdS5fX2guZm9yRWFjaChfKSx1Ll9faD1bXSl9LHUub3B0aW9ucy5kaWZmZWQ9ZnVuY3Rpb24obil7ZSYmZShuKTt2YXIgdD1uLl9fYzt0JiZ0Ll9fSCYmdC5fX0guX19oLmxlbmd0aCYmKDEhPT1pLnB1c2godCkmJnI9PT11Lm9wdGlvbnMucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHwoKHI9dS5vcHRpb25zLnJlcXVlc3RBbmltYXRpb25GcmFtZSl8fGZ1bmN0aW9uKG4pe3ZhciB0LHI9ZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQodSksbCYmY2FuY2VsQW5pbWF0aW9uRnJhbWUodCksc2V0VGltZW91dChuKX0sdT1zZXRUaW1lb3V0KHIsMTAwKTtsJiYodD1yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocikpfSkoeSkpfSx1Lm9wdGlvbnMuX19jPWZ1bmN0aW9uKG4sdCl7dC5zb21lKGZ1bmN0aW9uKG4pe3RyeXtuLl9faC5mb3JFYWNoKGgpLG4uX19oPW4uX19oLmZpbHRlcihmdW5jdGlvbihuKXtyZXR1cm4hbi5fX3x8XyhuKX0pfWNhdGNoKHIpe3Quc29tZShmdW5jdGlvbihuKXtuLl9faCYmKG4uX19oPVtdKX0pLHQ9W10sdS5vcHRpb25zLl9fZShyLG4uX192KX19KSxmJiZmKG4sdCl9LHUub3B0aW9ucy51bm1vdW50PWZ1bmN0aW9uKG4pe2EmJmEobik7dmFyIHQ9bi5fX2M7aWYodCYmdC5fX0gpdHJ5e3QuX19ILl9fLmZvckVhY2goaCl9Y2F0Y2gobil7dS5vcHRpb25zLl9fZShuLHQuX192KX19O3ZhciBsPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZTtmdW5jdGlvbiBoKG4pe1wiZnVuY3Rpb25cIj09dHlwZW9mIG4udSYmbi51KCl9ZnVuY3Rpb24gXyhuKXtuLnU9bi5fXygpfWZ1bmN0aW9uIHEobix0KXtyZXR1cm4hbnx8dC5zb21lKGZ1bmN0aW9uKHQscil7cmV0dXJuIHQhPT1uW3JdfSl9ZnVuY3Rpb24gQShuLHQpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dChuKTp0fWV4cG9ydHMudXNlU3RhdGU9dixleHBvcnRzLnVzZVJlZHVjZXI9cyxleHBvcnRzLnVzZUVmZmVjdD1mdW5jdGlvbihyLG8pe3ZhciBpPXAobisrLDMpOyF1Lm9wdGlvbnMuX19zJiZxKGkuX19ILG8pJiYoaS5fXz1yLGkuX19IPW8sdC5fX0guX19oLnB1c2goaSkpfSxleHBvcnRzLnVzZUxheW91dEVmZmVjdD14LGV4cG9ydHMudXNlUmVmPWZ1bmN0aW9uKG4pe3JldHVybiBvPTUsbShmdW5jdGlvbigpe3JldHVybntjdXJyZW50Om59fSxbXSl9LGV4cG9ydHMudXNlSW1wZXJhdGl2ZUhhbmRsZT1mdW5jdGlvbihuLHQscil7bz02LHgoZnVuY3Rpb24oKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBuP24odCgpKTpuJiYobi5jdXJyZW50PXQoKSl9LG51bGw9PXI/cjpyLmNvbmNhdChuKSl9LGV4cG9ydHMudXNlTWVtbz1tLGV4cG9ydHMudXNlQ2FsbGJhY2s9ZnVuY3Rpb24obix0KXtyZXR1cm4gbz04LG0oZnVuY3Rpb24oKXtyZXR1cm4gbn0sdCl9LGV4cG9ydHMudXNlQ29udGV4dD1mdW5jdGlvbihyKXt2YXIgdT10LmNvbnRleHRbci5fX2NdLG89cChuKyssOSk7cmV0dXJuIG8uX19jPXIsdT8obnVsbD09by5fXyYmKG8uX189ITAsdS5zdWIodCkpLHUucHJvcHMudmFsdWUpOnIuX199LGV4cG9ydHMudXNlRGVidWdWYWx1ZT1mdW5jdGlvbihuLHQpe3Uub3B0aW9ucy51c2VEZWJ1Z1ZhbHVlJiZ1Lm9wdGlvbnMudXNlRGVidWdWYWx1ZSh0P3Qobik6bil9LGV4cG9ydHMudXNlRXJyb3JCb3VuZGFyeT1mdW5jdGlvbihyKXt2YXIgdT1wKG4rKywxMCksbz12KCk7cmV0dXJuIHUuX189cix0LmNvbXBvbmVudERpZENhdGNofHwodC5jb21wb25lbnREaWRDYXRjaD1mdW5jdGlvbihuKXt1Ll9fJiZ1Ll9fKG4pLG9bMV0obil9KSxbb1swXSxmdW5jdGlvbigpe29bMV0odm9pZCAwKX1dfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhvb2tzLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBEb24ndCBmb3JnZXQgdG8gaW5jbHVkZSBoIHJlbmRlcmVyIVxuaW1wb3J0IHtoLCBDb21wb25lbnQsIGNyZWF0ZVJlZn0gZnJvbSAncHJlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaGlkZGVuVmFsdWU6IG51bGwsXG4gICAgICBmbGlwU3RhdHVzOiBERUZBVUxULFxuICAgIH07XG4gICAgdGhpcy5zb2NrZXQgPSBwcm9wcy5zb2NrZXQ7XG5cbiAgICB0aGlzLmJpbmQoKTtcbiAgfVxuXG4gIGJpbmQoKSB7XG4gICAgdGhpcy5zb2NrZXQub24oXCJuZXdSb3VuZFwiLCAoKSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZmxpcFN0YXR1czogREVGQVVMVCwgaGlkZGVuVmFsdWU6IG51bGx9KVxuICAgICAgfSwgMTAwMCk7XG4gICAgfSk7XG4gIH1cblxuICBmbGlwKHZhbCkge1xuICAgIHRoaXMuc29ja2V0LmVtaXQoXCJmbGlwXCIsIHtcImd1ZXNzXCI6IHZhbH0sIChjYXJkRmFjZSkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZmxpcFN0YXR1czogRkxJUFBFRCwgaGlkZGVuVmFsdWU6IGNhcmRGYWNlLmVtb2ppfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKHByb3BzLCBzdGF0ZSkge1xuICAgIHJldHVybiAoPGRpdiBjbGFzcz1cImNhcmRcIiBkYXRhLWZsaXBTdGF0dXM9e3RoaXMuc3RhdGUuZmxpcFN0YXR1c30gZGF0YS1wbGF5ZXI9e3Byb3BzLnBsYXllcn0+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiZnJvbnRcIiBvbkNsaWNrPXt0aGlzLmZsaXAuYmluZCh0aGlzLCBwcm9wcy52YWwpfSBkaXNhYmxlZD17cHJvcHMuZGlzYWJsZWR9PlxuICAgICAgICAgICAgP1xuICAgICAgPC9idXR0b24+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhY2tcIj57c3RhdGUuaGlkZGVuVmFsdWV9PC9kaXY+XG4gICAgPC9kaXY+KTtcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBEb24ndCBmb3JnZXQgdG8gaW5jbHVkZSBoIHJlbmRlcmVyIVxuaW1wb3J0IHtoLCBDb21wb25lbnQsIGNyZWF0ZUNvbnRleHR9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQge3VzZUNvbnRleHR9IGZyb20gJ3ByZWFjdC9ob29rcyc7XG5cbmltcG9ydCBDYXJkIGZyb20gJy4vY2FyZC5qc3gnO1xuXG5jb25zdCBTb2NrZXQgPSBjcmVhdGVDb250ZXh0KGlvKHsgdXBncmFkZTogZmFsc2UsIHRyYW5zcG9ydHM6IFtcIndlYnNvY2tldFwiXSB9KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjYXJkczoge3BsYXllcjE6IFtdLCBwbGF5ZXIyOiBbXX0sXG4gICAgICBzY29yZToge3BsYXllcjE6IDAsIHBsYXllcjI6IDB9LFxuICAgICAgZmxpcHBlZENhcmRzOiB7Zmlyc3Q6IHt9LCBzZWNvbmQ6IHt9fSxcbiAgICAgIHN0YXJ0ZWQ6IGZhbHNlLFxuICAgICAgd2FpdGluZzogdHJ1ZVxuICAgIH07XG5cbiAgICB0aGlzLnNvY2tldCA9IHVzZUNvbnRleHQoU29ja2V0KTtcblxuICAgIGNvbnNvbGUubG9nKFwiQmluZGluZ1wiKTtcbiAgICB0aGlzLmJpbmQoKTtcbiAgfVxuXG4gIGJpbmQoKSB7XG4gICAgdGhpcy5zb2NrZXQub24oXCJjb25uZWN0XCIsICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGVkXCIpXG4gICAgfSk7XG5cbiAgICB0aGlzLnNvY2tldC5vbihcImRpc2Nvbm5lY3RcIiwgKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJEaXNjb25uZWN0ZWRcIilcbiAgICB9KTtcblxuICAgIHRoaXMuc29ja2V0Lm9uKFwic3RhcnRcIiwgKG51bU9mQ2FyZHMpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiU3RhcnQgZ2FtZVwiKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3N0YXJ0ZWQ6IHRydWV9KTtcbiAgICB9KTtcblxuICAgIHRoaXMuc29ja2V0Lm9uKFwibmV3Um91bmRcIiwgKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJSb3VuZCBzdGFydGluZ1wiKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc29ja2V0Lm9uKFwidHVyblwiLCAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIlR1cm5pbmdcIik7XG4gICAgICB0aGlzLnNldFN0YXRlKHt3YWl0aW5nOiBmYWxzZX0pXG4gICAgfSk7XG5cbiAgICB0aGlzLnNvY2tldC5vbihcIndhaXRcIiwgKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJXYWl0aW5nXCIpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7d2FpdGluZzogdHJ1ZX0pXG4gICAgfSk7XG5cbiAgICB0aGlzLnNvY2tldC5vbihcImVuZFwiLCAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIkVuZFwiKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3N0YXJ0ZWQ6IGZhbHNlfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNvY2tldC5vbihcImVycm9yXCIsICgpID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJBbiBlcnJvciB3aXRoIHRoZSBzZXJ2ZXIgb2NjdXJyZWQuXCIpXG4gICAgfSk7XG5cbiAgICB0aGlzLnNvY2tldC5vbihcIm1hdGNoZWRcIiwgKGNhcmRzKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIk1hdGNoZWQhXCIsIGNhcmRzKVxuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlQ2FyZChwcm9wcykge1xuICAgIHJldHVybiAoPFNvY2tldC5Db25zdW1lcj5cbiAgICAgIHtzb2NrZXQgPT4ge1xuICAgICAgICByZXR1cm4gPENhcmQgey4uLnByb3BzfSBzb2NrZXQ9e3NvY2tldH0vPlxuICAgICAgfX1cbiAgICA8L1NvY2tldC5Db25zdW1lcj4pO1xuICB9XG5cbiAgY3JlYXRlSGFuZChwbGF5ZXIpIHtcbiAgICBjb25zdCBoYW5kID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBFTU9KSVMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChwbGF5ZXIgPT09IFBMQVlFUl8xKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLndhaXRpbmcpIHtcbiAgICAgICAgICBoYW5kLnB1c2godGhpcy5jcmVhdGVDYXJkKHtwbGF5ZXIsIHZhbDogaSwgZGlzYWJsZWQ6IHRydWV9KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaGFuZC5wdXNoKHRoaXMuY3JlYXRlQ2FyZCh7cGxheWVyLCB2YWw6IGl9KSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhhbmQucHVzaCh0aGlzLmNyZWF0ZUNhcmQoe3BsYXllciwgdmFsOiBpLCBkaXNhYmxlZDogdHJ1ZX0pKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaGFuZDtcbiAgfVxuXG4gIHJlbmRlcihwcm9wcywgc3RhdGUpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGUuc3RhcnRlZCkge1xuICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cImdhbWVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRcIj5cbiAgICAgICAgICA8aDI+V2FpdGluZyBmb3Igb3Bwb25lbnQuLi48L2gyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2Pik7XG4gICAgfVxuICAgIHJldHVybiAoPGRpdiBjbGFzcz1cImdhbWVcIj5cbiAgICAgIDxoMj5QbGF5ZXI6IHt0aGlzLnN0YXRlLndhaXRpbmcgPyBcIk9wcG9uZW50J3MgdHVyblwiIDogXCJZb3VyIFR1cm5cIn0gPC9oMj5cbiAgICAgIDxkaXYgY2xhc3M9XCJncmlkXCI+XG4gICAgICAgIHtcbiAgICAgICAgICB0aGlzLmNyZWF0ZUhhbmQoUExBWUVSXzEpLm1hcCgoaW5kZXgpID0+IGluZGV4KVxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxociBjbGFzcz1cImJyZWFrXCIvPlxuICAgICAgPGRpdiBjbGFzcz1cImdyaWRcIj5cbiAgICAgICAge1xuICAgICAgICAgIHRoaXMuY3JlYXRlSGFuZChQTEFZRVJfMikubWFwKChpbmRleCkgPT4gaW5kZXgpXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICAgPGgyPk9wcG9uZW50PC9oMj5cbiAgICA8L2Rpdj4pO1xuICB9XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7aCwgcmVuZGVyfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IEdhbWUgZnJvbSBcIi4vY29tcG9uZW50cy9nYW1lLmpzeFwiO1xuaW1wb3J0IFwiLi9zdHlsZS9pbmRleC5jc3NcIjtcblxuICAgIGNvbnNvbGUubG9nKCdyZW5kZXJpbmcnKTtcbiAgICByZW5kZXIoKDxkaXY+XG4gICAgICAgICAgICA8R2FtZS8+XG4gICAgICAgIDwvZGl2PlxuICAgICksIGRvY3VtZW50LmJvZHkpO1xuIiwiIl19
