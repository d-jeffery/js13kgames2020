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
    _this.player = props.player;
    _this.cardNumber = props.val;
    _this.socket = props.socket;

    _this.bind();
    return _this;
  }

  _createClass(Card, [{
    key: 'bind',
    value: function bind() {
      var _this2 = this;

      this.socket.on('newRound', function () {
        setTimeout(function () {
          _this2.setState({ flipStatus: DEFAULT, hiddenValue: null });
        }, 1000);
      });

      this.socket.on('revealCard', function (props) {
        if (_this2.cardNumber === props.val && _this2.player === props.player) {
          _this2.setState({ flipStatus: FLIPPED, hiddenValue: props.emoji });
        }
      });
    }
  }, {
    key: 'guess',
    value: function guess(val) {
      this.socket.emit('flip', { 'player': this.player, 'guess': val });
    }
  }, {
    key: 'render',
    value: function render(props, state) {
      return (0, _preact.h)(
        'div',
        { 'class': 'card', 'data-flipStatus': this.state.flipStatus, 'data-player': props.player },
        (0, _preact.h)(
          'button',
          { 'class': 'front', onClick: this.guess.bind(this, props.val), disabled: props.disabled },
          '?'
        ),
        (0, _preact.h)(
          'div',
          { className: 'back' },
          this.state.hiddenValue
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

var Socket = (0, _preact.createContext)(io({ upgrade: false, transports: ['websocket'] }));

var Game = function (_Component) {
  _inherits(Game, _Component);

  function Game() {
    _classCallCheck(this, Game);

    var _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this));

    _this.state = {
      player1: 0,
      player2: 0,
      started: false,
      waiting: true,
      opponentGuess: { card: null, emoji: null }
    };
    _this.player = PLAYER_1;
    _this.socket = (0, _hooks.useContext)(Socket);

    console.log('Binding');
    _this.bind();
    return _this;
  }

  _createClass(Game, [{
    key: 'bind',
    value: function bind() {
      var _this2 = this;

      this.socket.on('connect', function () {
        console.log('Connected');
      });

      this.socket.on('disconnect', function () {
        console.log('Disconnected');
      });

      this.socket.on('start', function (props) {
        console.log('Start game');
        _this2.player = props.playerNo;
        _this2.setState({ started: true });
        _this2.setState({ player1: 0 });
        _this2.setState({ player2: 0 });
      });

      this.socket.on('newRound', function (props) {
        console.log('Round starting');
      });

      this.socket.on('turn', function (val) {
        _this2.setState({ waiting: false });
      });

      this.socket.on('wait', function (val) {
        _this2.setState({ waiting: true });
      });

      this.socket.on('end', function () {
        console.log('End');
        _this2.setState({ started: false });
      });

      this.socket.on('error', function () {
        console.error('An error with the server occurred.');
      });

      this.socket.on('matched', function (props) {
        console.log('Matched!', props);
        var player1 = _this2.state.player1;
        var player2 = _this2.state.player2;

        if (props.player === PLAYER_1) {
          _this2.setState({ player1: player1 + 1 });
        } else {
          _this2.setState({ player2: player2 + 1 });
        }
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
        hand.push(this.createCard({ player: player, val: i }));
      }
      return hand;
    }
  }, {
    key: 'render',
    value: function render(props, state) {
      var player = this.player;
      var opponent = this.player === PLAYER_1 ? PLAYER_2 : PLAYER_1;
      var player1Score = player === PLAYER_1 ? this.state.player1 : this.state.player2;
      var player2Score = opponent === PLAYER_2 ? this.state.player2 : this.state.player1;

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
          this.state.waiting ? 'Opponent\'s turn' : 'Your Turn',
          ' '
        ),
        (0, _preact.h)(
          'div',
          { 'class': 'grid' },
          this.createHand(player).map(function (index) {
            return index;
          })
        ),
        (0, _preact.h)('hr', { 'class': 'break' }),
        (0, _preact.h)(
          'div',
          { 'class': 'grid' },
          this.createHand(opponent).map(function (index) {
            return index;
          })
        ),
        (0, _preact.h)(
          'h2',
          null,
          'Opponent'
        ),
        (0, _preact.h)('hr', { 'class': 'break' }),
        (0, _preact.h)(
          'h3',
          null,
          'Score: ',
          player1Score,
          ' - ',
          player2Score,
          ' '
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

(0, _preact.render)((0, _preact.h)(
    'div',
    null,
    (0, _preact.h)(_game2.default, null)
), document.body);

},{"./components/game.jsx":4,"./style/index.css":6,"preact":1}],6:[function(require,module,exports){

},{}]},{},[5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvcHJlYWN0L2Rpc3QvcHJlYWN0LmpzIiwibm9kZV9tb2R1bGVzL3ByZWFjdC9ob29rcy9kaXN0L2hvb2tzLmpzIiwic3JjL2NvbXBvbmVudHMvY2FyZC5qc3giLCJzcmMvY29tcG9uZW50cy9nYW1lLmpzeCIsInNyYy9pbmRleC5qc3giLCJzcmMvc3R5bGUvaW5kZXguY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTs7QUNGQTs7QUFFQTs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7SUFFcUIsSTs7O0FBQ25CLGdCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFFakIsVUFBSyxLQUFMLEdBQWE7QUFDWCxtQkFBYSxJQURGO0FBRVgsa0JBQVk7QUFGRCxLQUFiO0FBSUEsVUFBSyxNQUFMLEdBQWMsTUFBTSxNQUFwQjtBQUNBLFVBQUssVUFBTCxHQUFrQixNQUFNLEdBQXhCO0FBQ0EsVUFBSyxNQUFMLEdBQWMsTUFBTSxNQUFwQjs7QUFFQSxVQUFLLElBQUw7QUFWaUI7QUFXbEI7Ozs7MkJBRU07QUFBQTs7QUFDTCxXQUFLLE1BQUwsQ0FBWSxFQUFaLENBQWUsVUFBZixFQUEyQixZQUFNO0FBQy9CLG1CQUFXLFlBQU07QUFDZixpQkFBSyxRQUFMLENBQWMsRUFBQyxZQUFZLE9BQWIsRUFBc0IsYUFBYSxJQUFuQyxFQUFkO0FBQ0QsU0FGRCxFQUVHLElBRkg7QUFHRCxPQUpEOztBQU1BLFdBQUssTUFBTCxDQUFZLEVBQVosQ0FBZSxZQUFmLEVBQTZCLFVBQUMsS0FBRCxFQUFXO0FBQ3RDLFlBQUksT0FBSyxVQUFMLEtBQW9CLE1BQU0sR0FBMUIsSUFBaUMsT0FBSyxNQUFMLEtBQWdCLE1BQU0sTUFBM0QsRUFBbUU7QUFDakUsaUJBQUssUUFBTCxDQUFjLEVBQUMsWUFBWSxPQUFiLEVBQXNCLGFBQWEsTUFB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Y2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwidmFyIG4sbCx1LHQsaSxvLHIsZj17fSxlPVtdLGM9L2FjaXR8ZXgoPzpzfGd8bnxwfCQpfHJwaHxncmlkfG93c3xtbmN8bnR3fGluZVtjaF18em9vfF5vcmR8aXRlcmEvaTtmdW5jdGlvbiBzKG4sbCl7Zm9yKHZhciB1IGluIGwpblt1XT1sW3VdO3JldHVybiBufWZ1bmN0aW9uIGEobil7dmFyIGw9bi5wYXJlbnROb2RlO2wmJmwucmVtb3ZlQ2hpbGQobil9ZnVuY3Rpb24gcChuLGwsdSl7dmFyIHQsaSxvLHI9YXJndW1lbnRzLGY9e307Zm9yKG8gaW4gbClcImtleVwiPT1vP3Q9bFtvXTpcInJlZlwiPT1vP2k9bFtvXTpmW29dPWxbb107aWYoYXJndW1lbnRzLmxlbmd0aD4zKWZvcih1PVt1XSxvPTM7bzxhcmd1bWVudHMubGVuZ3RoO28rKyl1LnB1c2gocltvXSk7aWYobnVsbCE9dSYmKGYuY2hpbGRyZW49dSksXCJmdW5jdGlvblwiPT10eXBlb2YgbiYmbnVsbCE9bi5kZWZhdWx0UHJvcHMpZm9yKG8gaW4gbi5kZWZhdWx0UHJvcHMpdm9pZCAwPT09ZltvXSYmKGZbb109bi5kZWZhdWx0UHJvcHNbb10pO3JldHVybiB2KG4sZix0LGksbnVsbCl9ZnVuY3Rpb24gdihsLHUsdCxpLG8pe3ZhciByPXt0eXBlOmwscHJvcHM6dSxrZXk6dCxyZWY6aSxfX2s6bnVsbCxfXzpudWxsLF9fYjowLF9fZTpudWxsLF9fZDp2b2lkIDAsX19jOm51bGwsY29uc3RydWN0b3I6dm9pZCAwLF9fdjpvfTtyZXR1cm4gbnVsbD09byYmKHIuX192PXIpLG51bGwhPW4udm5vZGUmJm4udm5vZGUocikscn1mdW5jdGlvbiBoKG4pe3JldHVybiBuLmNoaWxkcmVufWZ1bmN0aW9uIHkobixsKXt0aGlzLnByb3BzPW4sdGhpcy5jb250ZXh0PWx9ZnVuY3Rpb24gZChuLGwpe2lmKG51bGw9PWwpcmV0dXJuIG4uX18/ZChuLl9fLG4uX18uX19rLmluZGV4T2YobikrMSk6bnVsbDtmb3IodmFyIHU7bDxuLl9fay5sZW5ndGg7bCsrKWlmKG51bGwhPSh1PW4uX19rW2xdKSYmbnVsbCE9dS5fX2UpcmV0dXJuIHUuX19lO3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIG4udHlwZT9kKG4pOm51bGx9ZnVuY3Rpb24gXyhuKXt2YXIgbCx1O2lmKG51bGwhPShuPW4uX18pJiZudWxsIT1uLl9fYyl7Zm9yKG4uX19lPW4uX19jLmJhc2U9bnVsbCxsPTA7bDxuLl9fay5sZW5ndGg7bCsrKWlmKG51bGwhPSh1PW4uX19rW2xdKSYmbnVsbCE9dS5fX2Upe24uX19lPW4uX19jLmJhc2U9dS5fX2U7YnJlYWt9cmV0dXJuIF8obil9fWZ1bmN0aW9uIHcobCl7KCFsLl9fZCYmKGwuX19kPSEwKSYmdS5wdXNoKGwpJiYheC5fX3IrK3x8aSE9PW4uZGVib3VuY2VSZW5kZXJpbmcpJiYoKGk9bi5kZWJvdW5jZVJlbmRlcmluZyl8fHQpKHgpfWZ1bmN0aW9uIHgoKXtmb3IodmFyIG47eC5fX3I9dS5sZW5ndGg7KW49dS5zb3J0KGZ1bmN0aW9uKG4sbCl7cmV0dXJuIG4uX192Ll9fYi1sLl9fdi5fX2J9KSx1PVtdLG4uc29tZShmdW5jdGlvbihuKXt2YXIgbCx1LHQsaSxvLHIsZjtuLl9fZCYmKHI9KG89KGw9bikuX192KS5fX2UsKGY9bC5fX1ApJiYodT1bXSwodD1zKHt9LG8pKS5fX3Y9dCxpPXooZixvLHQsbC5fX24sdm9pZCAwIT09Zi5vd25lclNWR0VsZW1lbnQsbnVsbCx1LG51bGw9PXI/ZChvKTpyKSxOKHUsbyksaSE9ciYmXyhvKSkpfSl9ZnVuY3Rpb24gayhuLGwsdSx0LGksbyxyLGMscyxwKXt2YXIgeSxfLHcseCxrLGcsYixBPXQmJnQuX19rfHxlLFA9QS5sZW5ndGg7Zm9yKHM9PWYmJihzPW51bGwhPXI/clswXTpQP2QodCwwKTpudWxsKSx1Ll9faz1bXSx5PTA7eTxsLmxlbmd0aDt5KyspaWYobnVsbCE9KHg9dS5fX2tbeV09bnVsbD09KHg9bFt5XSl8fFwiYm9vbGVhblwiPT10eXBlb2YgeD9udWxsOlwic3RyaW5nXCI9PXR5cGVvZiB4fHxcIm51bWJlclwiPT10eXBlb2YgeD92KG51bGwseCxudWxsLG51bGwseCk6QXJyYXkuaXNBcnJheSh4KT92KGgse2NoaWxkcmVuOnh9LG51bGwsbnVsbCxudWxsKTpudWxsIT14Ll9fZXx8bnVsbCE9eC5fX2M/dih4LnR5cGUseC5wcm9wcyx4LmtleSxudWxsLHguX192KTp4KSl7aWYoeC5fXz11LHguX19iPXUuX19iKzEsbnVsbD09PSh3PUFbeV0pfHx3JiZ4LmtleT09dy5rZXkmJngudHlwZT09PXcudHlwZSlBW3ldPXZvaWQgMDtlbHNlIGZvcihfPTA7XzxQO18rKyl7aWYoKHc9QVtfXSkmJngua2V5PT13LmtleSYmeC50eXBlPT09dy50eXBlKXtBW19dPXZvaWQgMDticmVha313PW51bGx9az16KG4seCx3PXd8fGYsaSxvLHIsYyxzLHApLChfPXgucmVmKSYmdy5yZWYhPV8mJihifHwoYj1bXSksdy5yZWYmJmIucHVzaCh3LnJlZixudWxsLHgpLGIucHVzaChfLHguX19jfHxrLHgpKSxudWxsIT1rPyhudWxsPT1nJiYoZz1rKSxzPW0obix4LHcsQSxyLGsscykscHx8XCJvcHRpb25cIiE9dS50eXBlP1wiZnVuY3Rpb25cIj09dHlwZW9mIHUudHlwZSYmKHUuX19kPXMpOm4udmFsdWU9XCJcIik6cyYmdy5fX2U9PXMmJnMucGFyZW50Tm9kZSE9biYmKHM9ZCh3KSl9aWYodS5fX2U9ZyxudWxsIT1yJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiB1LnR5cGUpZm9yKHk9ci5sZW5ndGg7eS0tOyludWxsIT1yW3ldJiZhKHJbeV0pO2Zvcih5PVA7eS0tOyludWxsIT1BW3ldJiZqKEFbeV0sQVt5XSk7aWYoYilmb3IoeT0wO3k8Yi5sZW5ndGg7eSsrKSQoYlt5XSxiWysreV0sYlsrK3ldKX1mdW5jdGlvbiBtKG4sbCx1LHQsaSxvLHIpe3ZhciBmLGUsYztpZih2b2lkIDAhPT1sLl9fZClmPWwuX19kLGwuX19kPXZvaWQgMDtlbHNlIGlmKGk9PXV8fG8hPXJ8fG51bGw9PW8ucGFyZW50Tm9kZSluOmlmKG51bGw9PXJ8fHIucGFyZW50Tm9kZSE9PW4pbi5hcHBlbmRDaGlsZChvKSxmPW51bGw7ZWxzZXtmb3IoZT1yLGM9MDsoZT1lLm5leHRTaWJsaW5nKSYmYzx0Lmxlbmd0aDtjKz0yKWlmKGU9PW8pYnJlYWsgbjtuLmluc2VydEJlZm9yZShvLHIpLGY9cn1yZXR1cm4gdm9pZCAwIT09Zj9mOm8ubmV4dFNpYmxpbmd9ZnVuY3Rpb24gZyhuLGwsdSx0LGkpe3ZhciBvO2ZvcihvIGluIHUpXCJjaGlsZHJlblwiPT09b3x8XCJrZXlcIj09PW98fG8gaW4gbHx8QShuLG8sbnVsbCx1W29dLHQpO2ZvcihvIGluIGwpaSYmXCJmdW5jdGlvblwiIT10eXBlb2YgbFtvXXx8XCJjaGlsZHJlblwiPT09b3x8XCJrZXlcIj09PW98fFwidmFsdWVcIj09PW98fFwiY2hlY2tlZFwiPT09b3x8dVtvXT09PWxbb118fEEobixvLGxbb10sdVtvXSx0KX1mdW5jdGlvbiBiKG4sbCx1KXtcIi1cIj09PWxbMF0/bi5zZXRQcm9wZXJ0eShsLHUpOm5bbF09bnVsbD09dT9cIlwiOlwibnVtYmVyXCIhPXR5cGVvZiB1fHxjLnRlc3QobCk/dTp1K1wicHhcIn1mdW5jdGlvbiBBKG4sbCx1LHQsaSl7dmFyIG8scjtpZihpJiZcImNsYXNzTmFtZVwiPT1sJiYobD1cImNsYXNzXCIpLFwic3R5bGVcIj09PWwpaWYoXCJzdHJpbmdcIj09dHlwZW9mIHUpbi5zdHlsZT11O2Vsc2V7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQmJihuLnN0eWxlPXQ9XCJcIiksdClmb3IobCBpbiB0KXUmJmwgaW4gdXx8YihuLnN0eWxlLGwsXCJcIik7aWYodSlmb3IobCBpbiB1KXQmJnVbbF09PT10W2xdfHxiKG4uc3R5bGUsbCx1W2xdKX1lbHNlXCJvXCI9PT1sWzBdJiZcIm5cIj09PWxbMV0/KG89bCE9PShsPWwucmVwbGFjZSgvQ2FwdHVyZSQvLFwiXCIpKSwocj1sLnRvTG93ZXJDYXNlKCkpaW4gbiYmKGw9ciksbD1sLnNsaWNlKDIpLG4ubHx8KG4ubD17fSksbi5sW2xdPXUsdT90fHxuLmFkZEV2ZW50TGlzdGVuZXIobCxQLG8pOm4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihsLFAsbykpOlwibGlzdFwiIT09bCYmXCJ0YWdOYW1lXCIhPT1sJiZcImZvcm1cIiE9PWwmJlwidHlwZVwiIT09bCYmXCJzaXplXCIhPT1sJiZcImRvd25sb2FkXCIhPT1sJiZcImhyZWZcIiE9PWwmJiFpJiZsIGluIG4/bltsXT1udWxsPT11P1wiXCI6dTpcImZ1bmN0aW9uXCIhPXR5cGVvZiB1JiZcImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MXCIhPT1sJiYobCE9PShsPWwucmVwbGFjZSgveGxpbms6Py8sXCJcIikpP251bGw9PXV8fCExPT09dT9uLnJlbW92ZUF0dHJpYnV0ZU5TKFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLGwudG9Mb3dlckNhc2UoKSk6bi5zZXRBdHRyaWJ1dGVOUyhcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIixsLnRvTG93ZXJDYXNlKCksdSk6bnVsbD09dXx8ITE9PT11JiYhL15hci8udGVzdChsKT9uLnJlbW92ZUF0dHJpYnV0ZShsKTpuLnNldEF0dHJpYnV0ZShsLHUpKX1mdW5jdGlvbiBQKGwpe3RoaXMubFtsLnR5cGVdKG4uZXZlbnQ/bi5ldmVudChsKTpsKX1mdW5jdGlvbiBDKG4sbCx1KXt2YXIgdCxpO2Zvcih0PTA7dDxuLl9fay5sZW5ndGg7dCsrKShpPW4uX19rW3RdKSYmKGkuX189bixpLl9fZSYmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGkudHlwZSYmaS5fX2subGVuZ3RoPjEmJkMoaSxsLHUpLGw9bSh1LGksaSxuLl9fayxudWxsLGkuX19lLGwpLFwiZnVuY3Rpb25cIj09dHlwZW9mIG4udHlwZSYmKG4uX19kPWwpKSl9ZnVuY3Rpb24geihsLHUsdCxpLG8scixmLGUsYyl7dmFyIGEscCx2LGQsXyx3LHgsbSxnLGIsQSxQPXUudHlwZTtpZih2b2lkIDAhPT11LmNvbnN0cnVjdG9yKXJldHVybiBudWxsOyhhPW4uX19iKSYmYSh1KTt0cnl7bjppZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBQKXtpZihtPXUucHJvcHMsZz0oYT1QLmNvbnRleHRUeXBlKSYmaVthLl9fY10sYj1hP2c/Zy5wcm9wcy52YWx1ZTphLl9fOmksdC5fX2M/eD0ocD11Ll9fYz10Ll9fYykuX189cC5fX0U6KFwicHJvdG90eXBlXCJpbiBQJiZQLnByb3RvdHlwZS5yZW5kZXI/dS5fX2M9cD1uZXcgUChtLGIpOih1Ll9fYz1wPW5ldyB5KG0sYikscC5jb25zdHJ1Y3Rvcj1QLHAucmVuZGVyPUgpLGcmJmcuc3ViKHApLHAucHJvcHM9bSxwLnN0YXRlfHwocC5zdGF0ZT17fSkscC5jb250ZXh0PWIscC5fX249aSx2PXAuX19kPSEwLHAuX19oPVtdKSxudWxsPT1wLl9fcyYmKHAuX19zPXAuc3RhdGUpLG51bGwhPVAuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzJiYocC5fX3M9PXAuc3RhdGUmJihwLl9fcz1zKHt9LHAuX19zKSkscyhwLl9fcyxQLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhtLHAuX19zKSkpLGQ9cC5wcm9wcyxfPXAuc3RhdGUsdiludWxsPT1QLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmbnVsbCE9cC5jb21wb25lbnRXaWxsTW91bnQmJnAuY29tcG9uZW50V2lsbE1vdW50KCksbnVsbCE9cC5jb21wb25lbnREaWRNb3VudCYmcC5fX2gucHVzaChwLmNvbXBvbmVudERpZE1vdW50KTtlbHNle2lmKG51bGw9PVAuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzJiZtIT09ZCYmbnVsbCE9cC5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJiZwLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobSxiKSwhcC5fX2UmJm51bGwhPXAuc2hvdWxkQ29tcG9uZW50VXBkYXRlJiYhMT09PXAuc2hvdWxkQ29tcG9uZW50VXBkYXRlKG0scC5fX3MsYil8fHUuX192PT09dC5fX3Ype3AucHJvcHM9bSxwLnN0YXRlPXAuX19zLHUuX192IT09dC5fX3YmJihwLl9fZD0hMSkscC5fX3Y9dSx1Ll9fZT10Ll9fZSx1Ll9faz10Ll9fayxwLl9faC5sZW5ndGgmJmYucHVzaChwKSxDKHUsZSxsKTticmVhayBufW51bGwhPXAuY29tcG9uZW50V2lsbFVwZGF0ZSYmcC5jb21wb25lbnRXaWxsVXBkYXRlKG0scC5fX3MsYiksbnVsbCE9cC5jb21wb25lbnREaWRVcGRhdGUmJnAuX19oLnB1c2goZnVuY3Rpb24oKXtwLmNvbXBvbmVudERpZFVwZGF0ZShkLF8sdyl9KX1wLmNvbnRleHQ9YixwLnByb3BzPW0scC5zdGF0ZT1wLl9fcywoYT1uLl9fcikmJmEodSkscC5fX2Q9ITEscC5fX3Y9dSxwLl9fUD1sLGE9cC5yZW5kZXIocC5wcm9wcyxwLnN0YXRlLHAuY29udGV4dCkscC5zdGF0ZT1wLl9fcyxudWxsIT1wLmdldENoaWxkQ29udGV4dCYmKGk9cyhzKHt9LGkpLHAuZ2V0Q2hpbGRDb250ZXh0KCkpKSx2fHxudWxsPT1wLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlfHwodz1wLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKGQsXykpLEE9bnVsbCE9YSYmYS50eXBlPT1oJiZudWxsPT1hLmtleT9hLnByb3BzLmNoaWxkcmVuOmEsayhsLEFycmF5LmlzQXJyYXkoQSk/QTpbQV0sdSx0LGksbyxyLGYsZSxjKSxwLmJhc2U9dS5fX2UscC5fX2gubGVuZ3RoJiZmLnB1c2gocCkseCYmKHAuX19FPXAuX189bnVsbCkscC5fX2U9ITF9ZWxzZSBudWxsPT1yJiZ1Ll9fdj09PXQuX192Pyh1Ll9faz10Ll9fayx1Ll9fZT10Ll9fZSk6dS5fX2U9VCh0Ll9fZSx1LHQsaSxvLHIsZixjKTsoYT1uLmRpZmZlZCkmJmEodSl9Y2F0Y2gobCl7dS5fX3Y9bnVsbCxuLl9fZShsLHUsdCl9cmV0dXJuIHUuX19lfWZ1bmN0aW9uIE4obCx1KXtuLl9fYyYmbi5fX2ModSxsKSxsLnNvbWUoZnVuY3Rpb24odSl7dHJ5e2w9dS5fX2gsdS5fX2g9W10sbC5zb21lKGZ1bmN0aW9uKG4pe24uY2FsbCh1KX0pfWNhdGNoKGwpe24uX19lKGwsdS5fX3YpfX0pfWZ1bmN0aW9uIFQobixsLHUsdCxpLG8scixjKXt2YXIgcyxhLHAsdixoLHk9dS5wcm9wcyxkPWwucHJvcHM7aWYoaT1cInN2Z1wiPT09bC50eXBlfHxpLG51bGwhPW8pZm9yKHM9MDtzPG8ubGVuZ3RoO3MrKylpZihudWxsIT0oYT1vW3NdKSYmKChudWxsPT09bC50eXBlPzM9PT1hLm5vZGVUeXBlOmEubG9jYWxOYW1lPT09bC50eXBlKXx8bj09YSkpe249YSxvW3NdPW51bGw7YnJlYWt9aWYobnVsbD09bil7aWYobnVsbD09PWwudHlwZSlyZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZCk7bj1pP2RvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsbC50eXBlKTpkb2N1bWVudC5jcmVhdGVFbGVtZW50KGwudHlwZSxkLmlzJiZ7aXM6ZC5pc30pLG89bnVsbCxjPSExfWlmKG51bGw9PT1sLnR5cGUpeSE9PWQmJm4uZGF0YSE9PWQmJihuLmRhdGE9ZCk7ZWxzZXtpZihudWxsIT1vJiYobz1lLnNsaWNlLmNhbGwobi5jaGlsZE5vZGVzKSkscD0oeT11LnByb3BzfHxmKS5kYW5nZXJvdXNseVNldElubmVySFRNTCx2PWQuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwsIWMpe2lmKG51bGwhPW8pZm9yKHk9e30saD0wO2g8bi5hdHRyaWJ1dGVzLmxlbmd0aDtoKyspeVtuLmF0dHJpYnV0ZXNbaF0ubmFtZV09bi5hdHRyaWJ1dGVzW2hdLnZhbHVlOyh2fHxwKSYmKHYmJnAmJnYuX19odG1sPT1wLl9faHRtbHx8KG4uaW5uZXJIVE1MPXYmJnYuX19odG1sfHxcIlwiKSl9ZyhuLGQseSxpLGMpLHY/bC5fX2s9W106KHM9bC5wcm9wcy5jaGlsZHJlbixrKG4sQXJyYXkuaXNBcnJheShzKT9zOltzXSxsLHUsdCxcImZvcmVpZ25PYmplY3RcIiE9PWwudHlwZSYmaSxvLHIsZixjKSksY3x8KFwidmFsdWVcImluIGQmJnZvaWQgMCE9PShzPWQudmFsdWUpJiZzIT09bi52YWx1ZSYmQShuLFwidmFsdWVcIixzLHkudmFsdWUsITEpLFwiY2hlY2tlZFwiaW4gZCYmdm9pZCAwIT09KHM9ZC5jaGVja2VkKSYmcyE9PW4uY2hlY2tlZCYmQShuLFwiY2hlY2tlZFwiLHMseS5jaGVja2VkLCExKSl9cmV0dXJuIG59ZnVuY3Rpb24gJChsLHUsdCl7dHJ5e1wiZnVuY3Rpb25cIj09dHlwZW9mIGw/bCh1KTpsLmN1cnJlbnQ9dX1jYXRjaChsKXtuLl9fZShsLHQpfX1mdW5jdGlvbiBqKGwsdSx0KXt2YXIgaSxvLHI7aWYobi51bm1vdW50JiZuLnVubW91bnQobCksKGk9bC5yZWYpJiYoaS5jdXJyZW50JiZpLmN1cnJlbnQhPT1sLl9fZXx8JChpLG51bGwsdSkpLHR8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGwudHlwZXx8KHQ9bnVsbCE9KG89bC5fX2UpKSxsLl9fZT1sLl9fZD12b2lkIDAsbnVsbCE9KGk9bC5fX2MpKXtpZihpLmNvbXBvbmVudFdpbGxVbm1vdW50KXRyeXtpLmNvbXBvbmVudFdpbGxVbm1vdW50KCl9Y2F0Y2gobCl7bi5fX2UobCx1KX1pLmJhc2U9aS5fX1A9bnVsbH1pZihpPWwuX19rKWZvcihyPTA7cjxpLmxlbmd0aDtyKyspaVtyXSYmaihpW3JdLHUsdCk7bnVsbCE9byYmYShvKX1mdW5jdGlvbiBIKG4sbCx1KXtyZXR1cm4gdGhpcy5jb25zdHJ1Y3RvcihuLHUpfWZ1bmN0aW9uIEkobCx1LHQpe3ZhciBpLHIsYztuLl9fJiZuLl9fKGwsdSkscj0oaT10PT09byk/bnVsbDp0JiZ0Ll9fa3x8dS5fX2ssbD1wKGgsbnVsbCxbbF0pLGM9W10seih1LChpP3U6dHx8dSkuX19rPWwscnx8ZixmLHZvaWQgMCE9PXUub3duZXJTVkdFbGVtZW50LHQmJiFpP1t0XTpyP251bGw6dS5jaGlsZE5vZGVzLmxlbmd0aD9lLnNsaWNlLmNhbGwodS5jaGlsZE5vZGVzKTpudWxsLGMsdHx8ZixpKSxOKGMsbCl9bj17X19lOmZ1bmN0aW9uKG4sbCl7Zm9yKHZhciB1LHQ7bD1sLl9fOylpZigodT1sLl9fYykmJiF1Ll9fKXRyeXtpZih1LmNvbnN0cnVjdG9yJiZudWxsIT11LmNvbnN0cnVjdG9yLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvciYmKHQ9ITAsdS5zZXRTdGF0ZSh1LmNvbnN0cnVjdG9yLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvcihuKSkpLG51bGwhPXUuY29tcG9uZW50RGlkQ2F0Y2gmJih0PSEwLHUuY29tcG9uZW50RGlkQ2F0Y2gobikpLHQpcmV0dXJuIHcodS5fX0U9dSl9Y2F0Y2gobCl7bj1sfXRocm93IG59fSxsPWZ1bmN0aW9uKG4pe3JldHVybiBudWxsIT1uJiZ2b2lkIDA9PT1uLmNvbnN0cnVjdG9yfSx5LnByb3RvdHlwZS5zZXRTdGF0ZT1mdW5jdGlvbihuLGwpe3ZhciB1O3U9bnVsbCE9dGhpcy5fX3MmJnRoaXMuX19zIT09dGhpcy5zdGF0ZT90aGlzLl9fczp0aGlzLl9fcz1zKHt9LHRoaXMuc3RhdGUpLFwiZnVuY3Rpb25cIj09dHlwZW9mIG4mJihuPW4ocyh7fSx1KSx0aGlzLnByb3BzKSksbiYmcyh1LG4pLG51bGwhPW4mJnRoaXMuX192JiYobCYmdGhpcy5fX2gucHVzaChsKSx3KHRoaXMpKX0seS5wcm90b3R5cGUuZm9yY2VVcGRhdGU9ZnVuY3Rpb24obil7dGhpcy5fX3YmJih0aGlzLl9fZT0hMCxuJiZ0aGlzLl9faC5wdXNoKG4pLHcodGhpcykpfSx5LnByb3RvdHlwZS5yZW5kZXI9aCx1PVtdLHQ9XCJmdW5jdGlvblwiPT10eXBlb2YgUHJvbWlzZT9Qcm9taXNlLnByb3RvdHlwZS50aGVuLmJpbmQoUHJvbWlzZS5yZXNvbHZlKCkpOnNldFRpbWVvdXQseC5fX3I9MCxvPWYscj0wLGV4cG9ydHMucmVuZGVyPUksZXhwb3J0cy5oeWRyYXRlPWZ1bmN0aW9uKG4sbCl7SShuLGwsbyl9LGV4cG9ydHMuY3JlYXRlRWxlbWVudD1wLGV4cG9ydHMuaD1wLGV4cG9ydHMuRnJhZ21lbnQ9aCxleHBvcnRzLmNyZWF0ZVJlZj1mdW5jdGlvbigpe3JldHVybntjdXJyZW50Om51bGx9fSxleHBvcnRzLmlzVmFsaWRFbGVtZW50PWwsZXhwb3J0cy5Db21wb25lbnQ9eSxleHBvcnRzLmNsb25lRWxlbWVudD1mdW5jdGlvbihuLGwsdSl7dmFyIHQsaSxvLHI9YXJndW1lbnRzLGY9cyh7fSxuLnByb3BzKTtmb3IobyBpbiBsKVwia2V5XCI9PW8/dD1sW29dOlwicmVmXCI9PW8/aT1sW29dOmZbb109bFtvXTtpZihhcmd1bWVudHMubGVuZ3RoPjMpZm9yKHU9W3VdLG89MztvPGFyZ3VtZW50cy5sZW5ndGg7bysrKXUucHVzaChyW29dKTtyZXR1cm4gbnVsbCE9dSYmKGYuY2hpbGRyZW49dSksdihuLnR5cGUsZix0fHxuLmtleSxpfHxuLnJlZixudWxsKX0sZXhwb3J0cy5jcmVhdGVDb250ZXh0PWZ1bmN0aW9uKG4sbCl7dmFyIHU9e19fYzpsPVwiX19jQ1wiK3IrKyxfXzpuLENvbnN1bWVyOmZ1bmN0aW9uKG4sbCl7cmV0dXJuIG4uY2hpbGRyZW4obCl9LFByb3ZpZGVyOmZ1bmN0aW9uKG4sdSx0KXtyZXR1cm4gdGhpcy5nZXRDaGlsZENvbnRleHR8fCh1PVtdLCh0PXt9KVtsXT10aGlzLHRoaXMuZ2V0Q2hpbGRDb250ZXh0PWZ1bmN0aW9uKCl7cmV0dXJuIHR9LHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlPWZ1bmN0aW9uKG4pe3RoaXMucHJvcHMudmFsdWUhPT1uLnZhbHVlJiZ1LnNvbWUodyl9LHRoaXMuc3ViPWZ1bmN0aW9uKG4pe3UucHVzaChuKTt2YXIgbD1uLmNvbXBvbmVudFdpbGxVbm1vdW50O24uY29tcG9uZW50V2lsbFVubW91bnQ9ZnVuY3Rpb24oKXt1LnNwbGljZSh1LmluZGV4T2YobiksMSksbCYmbC5jYWxsKG4pfX0pLG4uY2hpbGRyZW59fTtyZXR1cm4gdS5Qcm92aWRlci5fXz11LkNvbnN1bWVyLmNvbnRleHRUeXBlPXV9LGV4cG9ydHMudG9DaGlsZEFycmF5PWZ1bmN0aW9uIG4obCx1KXtyZXR1cm4gdT11fHxbXSxudWxsPT1sfHxcImJvb2xlYW5cIj09dHlwZW9mIGx8fChBcnJheS5pc0FycmF5KGwpP2wuc29tZShmdW5jdGlvbihsKXtuKGwsdSl9KTp1LnB1c2gobCkpLHV9LGV4cG9ydHMuX191PWosZXhwb3J0cy5vcHRpb25zPW47XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wcmVhY3QuanMubWFwXG4iLCJ2YXIgbix0LHIsdT1yZXF1aXJlKFwicHJlYWN0XCIpLG89MCxpPVtdLGM9dS5vcHRpb25zLl9fcixlPXUub3B0aW9ucy5kaWZmZWQsZj11Lm9wdGlvbnMuX19jLGE9dS5vcHRpb25zLnVubW91bnQ7ZnVuY3Rpb24gcChuLHIpe3Uub3B0aW9ucy5fX2gmJnUub3B0aW9ucy5fX2godCxuLG98fHIpLG89MDt2YXIgaT10Ll9fSHx8KHQuX19IPXtfXzpbXSxfX2g6W119KTtyZXR1cm4gbj49aS5fXy5sZW5ndGgmJmkuX18ucHVzaCh7fSksaS5fX1tuXX1mdW5jdGlvbiB2KG4pe3JldHVybiBvPTEscyhBLG4pfWZ1bmN0aW9uIHMocix1LG8pe3ZhciBpPXAobisrLDIpO3JldHVybiBpLnQ9cixpLl9fY3x8KGkuX19jPXQsaS5fXz1bbz9vKHUpOkEodm9pZCAwLHUpLGZ1bmN0aW9uKG4pe3ZhciB0PWkudChpLl9fWzBdLG4pO2kuX19bMF0hPT10JiYoaS5fXz1bdCxpLl9fWzFdXSxpLl9fYy5zZXRTdGF0ZSh7fSkpfV0pLGkuX199ZnVuY3Rpb24geChyLG8pe3ZhciBpPXAobisrLDQpOyF1Lm9wdGlvbnMuX19zJiZxKGkuX19ILG8pJiYoaS5fXz1yLGkuX19IPW8sdC5fX2gucHVzaChpKSl9ZnVuY3Rpb24gbSh0LHIpe3ZhciB1PXAobisrLDcpO3JldHVybiBxKHUuX19ILHIpPyh1Ll9fSD1yLHUuX19oPXQsdS5fXz10KCkpOnUuX199ZnVuY3Rpb24geSgpe2kuc29tZShmdW5jdGlvbihuKXtpZihuLl9fUCl0cnl7bi5fX0guX19oLmZvckVhY2goaCksbi5fX0guX19oLmZvckVhY2goXyksbi5fX0guX19oPVtdfWNhdGNoKHQpe3JldHVybiBuLl9fSC5fX2g9W10sdS5vcHRpb25zLl9fZSh0LG4uX192KSwhMH19KSxpPVtdfXUub3B0aW9ucy5fX3I9ZnVuY3Rpb24ocil7YyYmYyhyKSxuPTA7dmFyIHU9KHQ9ci5fX2MpLl9fSDt1JiYodS5fX2guZm9yRWFjaChoKSx1Ll9faC5mb3JFYWNoKF8pLHUuX19oPVtdKX0sdS5vcHRpb25zLmRpZmZlZD1mdW5jdGlvbihuKXtlJiZlKG4pO3ZhciB0PW4uX19jO3QmJnQuX19IJiZ0Ll9fSC5fX2gubGVuZ3RoJiYoMSE9PWkucHVzaCh0KSYmcj09PXUub3B0aW9ucy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fCgocj11Lm9wdGlvbnMucmVxdWVzdEFuaW1hdGlvbkZyYW1lKXx8ZnVuY3Rpb24obil7dmFyIHQscj1mdW5jdGlvbigpe2NsZWFyVGltZW91dCh1KSxsJiZjYW5jZWxBbmltYXRpb25GcmFtZSh0KSxzZXRUaW1lb3V0KG4pfSx1PXNldFRpbWVvdXQociwxMDApO2wmJih0PXJlcXVlc3RBbmltYXRpb25GcmFtZShyKSl9KSh5KSl9LHUub3B0aW9ucy5fX2M9ZnVuY3Rpb24obix0KXt0LnNvbWUoZnVuY3Rpb24obil7dHJ5e24uX19oLmZvckVhY2goaCksbi5fX2g9bi5fX2guZmlsdGVyKGZ1bmN0aW9uKG4pe3JldHVybiFuLl9ffHxfKG4pfSl9Y2F0Y2gocil7dC5zb21lKGZ1bmN0aW9uKG4pe24uX19oJiYobi5fX2g9W10pfSksdD1bXSx1Lm9wdGlvbnMuX19lKHIsbi5fX3YpfX0pLGYmJmYobix0KX0sdS5vcHRpb25zLnVubW91bnQ9ZnVuY3Rpb24obil7YSYmYShuKTt2YXIgdD1uLl9fYztpZih0JiZ0Ll9fSCl0cnl7dC5fX0guX18uZm9yRWFjaChoKX1jYXRjaChuKXt1Lm9wdGlvbnMuX19lKG4sdC5fX3YpfX07dmFyIGw9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lO2Z1bmN0aW9uIGgobil7XCJmdW5jdGlvblwiPT10eXBlb2Ygbi51JiZuLnUoKX1mdW5jdGlvbiBfKG4pe24udT1uLl9fKCl9ZnVuY3Rpb24gcShuLHQpe3JldHVybiFufHx0LnNvbWUoZnVuY3Rpb24odCxyKXtyZXR1cm4gdCE9PW5bcl19KX1mdW5jdGlvbiBBKG4sdCl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdD90KG4pOnR9ZXhwb3J0cy51c2VTdGF0ZT12LGV4cG9ydHMudXNlUmVkdWNlcj1zLGV4cG9ydHMudXNlRWZmZWN0PWZ1bmN0aW9uKHIsbyl7dmFyIGk9cChuKyssMyk7IXUub3B0aW9ucy5fX3MmJnEoaS5fX0gsbykmJihpLl9fPXIsaS5fX0g9byx0Ll9fSC5fX2gucHVzaChpKSl9LGV4cG9ydHMudXNlTGF5b3V0RWZmZWN0PXgsZXhwb3J0cy51c2VSZWY9ZnVuY3Rpb24obil7cmV0dXJuIG89NSxtKGZ1bmN0aW9uKCl7cmV0dXJue2N1cnJlbnQ6bn19LFtdKX0sZXhwb3J0cy51c2VJbXBlcmF0aXZlSGFuZGxlPWZ1bmN0aW9uKG4sdCxyKXtvPTYseChmdW5jdGlvbigpe1wiZnVuY3Rpb25cIj09dHlwZW9mIG4/bih0KCkpOm4mJihuLmN1cnJlbnQ9dCgpKX0sbnVsbD09cj9yOnIuY29uY2F0KG4pKX0sZXhwb3J0cy51c2VNZW1vPW0sZXhwb3J0cy51c2VDYWxsYmFjaz1mdW5jdGlvbihuLHQpe3JldHVybiBvPTgsbShmdW5jdGlvbigpe3JldHVybiBufSx0KX0sZXhwb3J0cy51c2VDb250ZXh0PWZ1bmN0aW9uKHIpe3ZhciB1PXQuY29udGV4dFtyLl9fY10sbz1wKG4rKyw5KTtyZXR1cm4gby5fX2M9cix1PyhudWxsPT1vLl9fJiYoby5fXz0hMCx1LnN1Yih0KSksdS5wcm9wcy52YWx1ZSk6ci5fX30sZXhwb3J0cy51c2VEZWJ1Z1ZhbHVlPWZ1bmN0aW9uKG4sdCl7dS5vcHRpb25zLnVzZURlYnVnVmFsdWUmJnUub3B0aW9ucy51c2VEZWJ1Z1ZhbHVlKHQ/dChuKTpuKX0sZXhwb3J0cy51c2VFcnJvckJvdW5kYXJ5PWZ1bmN0aW9uKHIpe3ZhciB1PXAobisrLDEwKSxvPXYoKTtyZXR1cm4gdS5fXz1yLHQuY29tcG9uZW50RGlkQ2F0Y2h8fCh0LmNvbXBvbmVudERpZENhdGNoPWZ1bmN0aW9uKG4pe3UuX18mJnUuX18obiksb1sxXShuKX0pLFtvWzBdLGZ1bmN0aW9uKCl7b1sxXSh2b2lkIDApfV19O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aG9va3MuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbi8vIERvbid0IGZvcmdldCB0byBpbmNsdWRlIGggcmVuZGVyZXIhXG5pbXBvcnQge2gsIENvbXBvbmVudH0gZnJvbSAncHJlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaGlkZGVuVmFsdWU6IG51bGwsXG4gICAgICBmbGlwU3RhdHVzOiBERUZBVUxULFxuICAgIH07XG4gICAgdGhpcy5wbGF5ZXIgPSBwcm9wcy5wbGF5ZXI7XG4gICAgdGhpcy5jYXJkTnVtYmVyID0gcHJvcHMudmFsO1xuICAgIHRoaXMuc29ja2V0ID0gcHJvcHMuc29ja2V0O1xuXG4gICAgdGhpcy5iaW5kKCk7XG4gIH1cblxuICBiaW5kKCkge1xuICAgIHRoaXMuc29ja2V0Lm9uKCduZXdSb3VuZCcsICgpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtmbGlwU3RhdHVzOiBERUZBVUxULCBoaWRkZW5WYWx1ZTogbnVsbH0pO1xuICAgICAgfSwgMTAwMCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNvY2tldC5vbigncmV2ZWFsQ2FyZCcsIChwcm9wcykgPT4ge1xuICAgICAgaWYgKHRoaXMuY2FyZE51bWJlciA9PT0gcHJvcHMudmFsICYmIHRoaXMucGxheWVyID09PSBwcm9wcy5wbGF5ZXIpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZmxpcFN0YXR1czogRkxJUFBFRCwgaGlkZGVuVmFsdWU6IHByb3BzLmVtb2ppfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBndWVzcyh2YWwpIHtcbiAgICB0aGlzLnNvY2tldC5lbWl0KCdmbGlwJywgeydwbGF5ZXInOiB0aGlzLnBsYXllciwgJ2d1ZXNzJzogdmFsfSk7XG4gIH07XG5cbiAgcmVuZGVyKHByb3BzLCBzdGF0ZSkge1xuICAgIHJldHVybiAoPGRpdiBjbGFzcz1cImNhcmRcIiBkYXRhLWZsaXBTdGF0dXM9e3RoaXMuc3RhdGUuZmxpcFN0YXR1c30gZGF0YS1wbGF5ZXI9e3Byb3BzLnBsYXllcn0+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiZnJvbnRcIiBvbkNsaWNrPXt0aGlzLmd1ZXNzLmJpbmQodGhpcywgcHJvcHMudmFsKX0gZGlzYWJsZWQ9e3Byb3BzLmRpc2FibGVkfT5cbiAgICAgICAgICAgID9cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrXCI+e3RoaXMuc3RhdGUuaGlkZGVuVmFsdWV9PC9kaXY+XG4gICAgPC9kaXY+KTtcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBEb24ndCBmb3JnZXQgdG8gaW5jbHVkZSBoIHJlbmRlcmVyIVxuaW1wb3J0IHtoLCBDb21wb25lbnQsIGNyZWF0ZUNvbnRleHR9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQge3VzZUNvbnRleHR9IGZyb20gJ3ByZWFjdC9ob29rcyc7XG5cbmltcG9ydCBDYXJkIGZyb20gJy4vY2FyZC5qc3gnO1xuXG5jb25zdCBTb2NrZXQgPSBjcmVhdGVDb250ZXh0KGlvKHt1cGdyYWRlOiBmYWxzZSwgdHJhbnNwb3J0czogWyd3ZWJzb2NrZXQnXX0pKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHBsYXllcjE6IDAsXG4gICAgICBwbGF5ZXIyOiAwLFxuICAgICAgc3RhcnRlZDogZmFsc2UsXG4gICAgICB3YWl0aW5nOiB0cnVlLFxuICAgICAgb3Bwb25lbnRHdWVzczoge2NhcmQ6IG51bGwsIGVtb2ppOiBudWxsfSxcbiAgICB9O1xuICAgIHRoaXMucGxheWVyID0gUExBWUVSXzE7XG4gICAgdGhpcy5zb2NrZXQgPSB1c2VDb250ZXh0KFNvY2tldCk7XG5cbiAgICBjb25zb2xlLmxvZygnQmluZGluZycpO1xuICAgIHRoaXMuYmluZCgpO1xuICB9XG5cbiAgYmluZCgpIHtcbiAgICB0aGlzLnNvY2tldC5vbignY29ubmVjdCcsICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdDb25uZWN0ZWQnKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc29ja2V0Lm9uKCdkaXNjb25uZWN0JywgKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ0Rpc2Nvbm5lY3RlZCcpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zb2NrZXQub24oJ3N0YXJ0JywgKHByb3BzKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnU3RhcnQgZ2FtZScpO1xuICAgICAgdGhpcy5wbGF5ZXIgPSBwcm9wcy5wbGF5ZXJObztcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3N0YXJ0ZWQ6IHRydWV9KTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3BsYXllcjE6IDB9KVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7cGxheWVyMjogMH0pXG4gICAgfSk7XG5cbiAgICB0aGlzLnNvY2tldC5vbignbmV3Um91bmQnLCAocHJvcHMpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdSb3VuZCBzdGFydGluZycpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zb2NrZXQub24oJ3R1cm4nLCAodmFsKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHt3YWl0aW5nOiBmYWxzZX0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zb2NrZXQub24oJ3dhaXQnLCAodmFsKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHt3YWl0aW5nOiB0cnVlfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNvY2tldC5vbignZW5kJywgKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ0VuZCcpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7c3RhcnRlZDogZmFsc2V9KTtcbiAgICB9KTtcblxuICAgIHRoaXMuc29ja2V0Lm9uKCdlcnJvcicsICgpID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0FuIGVycm9yIHdpdGggdGhlIHNlcnZlciBvY2N1cnJlZC4nKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc29ja2V0Lm9uKCdtYXRjaGVkJywgKHByb3BzKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnTWF0Y2hlZCEnLCBwcm9wcyk7XG4gICAgICBjb25zdCBwbGF5ZXIxID0gdGhpcy5zdGF0ZS5wbGF5ZXIxO1xuICAgICAgY29uc3QgcGxheWVyMiA9IHRoaXMuc3RhdGUucGxheWVyMjtcblxuICAgICAgaWYgKHByb3BzLnBsYXllciA9PT0gUExBWUVSXzEpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBsYXllcjE6IHBsYXllcjEgKyAxIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcGxheWVyMjogcGxheWVyMiArIDEgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVDYXJkKHByb3BzKSB7XG4gICAgcmV0dXJuICg8U29ja2V0LkNvbnN1bWVyPlxuICAgICAgeyhzb2NrZXQpID0+IHtcbiAgICAgICAgcmV0dXJuIDxDYXJkIHsuLi5wcm9wc30gc29ja2V0PXtzb2NrZXR9Lz47XG4gICAgICB9fVxuICAgIDwvU29ja2V0LkNvbnN1bWVyPik7XG4gIH1cblxuICBjcmVhdGVIYW5kKHBsYXllcikge1xuICAgIGNvbnN0IGhhbmQgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgRU1PSklTLmxlbmd0aDsgaSsrKSB7XG4gICAgICBoYW5kLnB1c2godGhpcy5jcmVhdGVDYXJkKHtwbGF5ZXIsIHZhbDogaX0pKTtcbiAgICB9XG4gICAgcmV0dXJuIGhhbmQ7XG4gIH1cblxuICByZW5kZXIocHJvcHMsIHN0YXRlKSB7XG4gICAgY29uc3QgcGxheWVyID0gdGhpcy5wbGF5ZXI7XG4gICAgY29uc3Qgb3Bwb25lbnQgPSAodGhpcy5wbGF5ZXIgPT09IFBMQVlFUl8xKSA/IFBMQVlFUl8yIDogUExBWUVSXzE7XG4gICAgY29uc3QgcGxheWVyMVNjb3JlID0gKHBsYXllciA9PT0gUExBWUVSXzEpID8gdGhpcy5zdGF0ZS5wbGF5ZXIxIDogdGhpcy5zdGF0ZS5wbGF5ZXIyO1xuICAgIGNvbnN0IHBsYXllcjJTY29yZSA9IChvcHBvbmVudCA9PT0gUExBWUVSXzIpID8gdGhpcy5zdGF0ZS5wbGF5ZXIyIDogdGhpcy5zdGF0ZS5wbGF5ZXIxO1xuXG4gICAgaWYgKCF0aGlzLnN0YXRlLnN0YXJ0ZWQpIHtcbiAgICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJnYW1lXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkXCI+XG4gICAgICAgICAgPGgyPldhaXRpbmcgZm9yIG9wcG9uZW50Li4uPC9oMj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj4pO1xuICAgIH1cbiAgICByZXR1cm4gKDxkaXYgY2xhc3M9XCJnYW1lXCI+XG4gICAgICA8aDI+UGxheWVyOiB7dGhpcy5zdGF0ZS53YWl0aW5nID8gJ09wcG9uZW50XFwncyB0dXJuJyA6ICdZb3VyIFR1cm4nfSA8L2gyPlxuICAgICAgPGRpdiBjbGFzcz1cImdyaWRcIj5cbiAgICAgICAge1xuICAgICAgICAgIHRoaXMuY3JlYXRlSGFuZChwbGF5ZXIpLm1hcCgoaW5kZXgpID0+IGluZGV4KVxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxociBjbGFzcz1cImJyZWFrXCIvPlxuICAgICAgPGRpdiBjbGFzcz1cImdyaWRcIj5cbiAgICAgICAge1xuICAgICAgICAgIHRoaXMuY3JlYXRlSGFuZChvcHBvbmVudCkubWFwKChpbmRleCkgPT4gaW5kZXgpXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICAgPGgyPk9wcG9uZW50PC9oMj5cbiAgICAgIDxociBjbGFzcz1cImJyZWFrXCIvPlxuICAgICAgPGgzPlNjb3JlOiB7cGxheWVyMVNjb3JlfSAtIHtwbGF5ZXIyU2NvcmV9IDwvaDM+XG4gICAgPC9kaXY+KTtcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQge2gsIHJlbmRlcn0gZnJvbSAncHJlYWN0JztcbmltcG9ydCBHYW1lIGZyb20gXCIuL2NvbXBvbmVudHMvZ2FtZS5qc3hcIjtcbmltcG9ydCBcIi4vc3R5bGUvaW5kZXguY3NzXCI7XG5cbiAgICByZW5kZXIoKDxkaXY+XG4gICAgICAgICAgICA8R2FtZS8+XG4gICAgICAgIDwvZGl2PlxuICAgICksIGRvY3VtZW50LmJvZHkpO1xuIiwiIl19
