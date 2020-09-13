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
      score: { player1: 0, player2: 0 },
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

      this.socket.on('matched', function (cards) {
        console.log('Matched!', cards);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvcHJlYWN0L2Rpc3QvcHJlYWN0LmpzIiwibm9kZV9tb2R1bGVzL3ByZWFjdC9ob29rcy9kaXN0L2hvb2tzLmpzIiwic3JjL2NvbXBvbmVudHMvY2FyZC5qc3giLCJzcmMvY29tcG9uZW50cy9nYW1lLmpzeCIsInNyYy9pbmRleC5qc3giLCJzcmMvc3R5bGUvaW5kZXguY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTs7QUNGQTs7QUFFQTs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7SUFFcUIsSTs7O0FBQ25CLGdCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFFakIsVUFBSyxLQUFMLEdBQWE7QUFDWCxtQkFBYSxJQURGO0FBRVgsa0JBQVk7QUFGRCxLQUFiO0FBSUEsVUFBSyxNQUFMLEdBQWMsTUFBTSxNQUFwQjtBQUNBLFVBQUssVUFBTCxHQUFrQixNQUFNLEdBQXhCO0FBQ0EsVUFBSyxNQUFMLEdBQWMsTUFBTSxNQUFwQjs7QUFFQSxVQUFLLElBQUw7QUFWaUI7QUFXbEI7Ozs7MkJBRU07QUFBQTs7QUFDTCxXQUFLLE1BQUwsQ0FBWSxFQUFaLENBQWUsVUFBZixFQUEyQixZQUFNO0FBQy9CLG1CQUFXLFlBQU07QUFDZixpQkFBSyxRQUFMLENBQWMsRUFBQyxZQUFZLE9BQWIsRUFBc0IsYUFBYSxJQUFuQyxFQUFkO0FBQ0QsU0FGRCxFQUVHLElBRkg7QUFHRCxPQUpEOztBQU1BLFdBQUssTUFBTCxDQUFZLEVBQVosQ0FBZSxZQUFmLEVBQTZCLFVBQUMsS0FBRCxFQUFXO0FBQ3RDLFlBQUksT0FBSyxVQUFMLEtBQW9CLE1BQU0sR0FBMUIsSUFBaUMsT0FBSyxNQUFMLEtBQWdCLE1BQU0sTUFBM0QsRUFBbUU7QUFDakUsaUJBQUssUUFBTCxDQUFjLEVBQUMsWUFBWSxPQUFiLEVBQXNCLGFBQWEsTUFB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WDtBQUFBLFdBQTVCO0FBRkosU0FGTTtBQU9OLCtCQUFJLFNBQU0sT0FBVixHQVBNO0FBUU47QUFBQTtBQUFBLFlBQUssU0FBTSxNQUFYO0FBRUksZUFBSyxVQUFMLENBQWdCLFFBQWhCLEVBQTBCLEdBQTFCLENBQThCLFVBQUMsS0FBRDtBQUFBLG1CQUFXLEtBQVg7QUFBQSxXQUE5QjtBQUZKLFNBUk07QUFhTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYk0sT0FBUjtBQWVEOzs7Ozs7a0JBcEdrQixJOzs7QUNWckI7O0FBRUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUVJLG9CQUFRO0FBQUE7QUFBQTtBQUNBO0FBREEsQ0FBUixFQUdHLFNBQVMsSUFIWjs7O0FDTkoiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJ2YXIgbixsLHUsdCxpLG8scixmPXt9LGU9W10sYz0vYWNpdHxleCg/OnN8Z3xufHB8JCl8cnBofGdyaWR8b3dzfG1uY3xudHd8aW5lW2NoXXx6b298Xm9yZHxpdGVyYS9pO2Z1bmN0aW9uIHMobixsKXtmb3IodmFyIHUgaW4gbCluW3VdPWxbdV07cmV0dXJuIG59ZnVuY3Rpb24gYShuKXt2YXIgbD1uLnBhcmVudE5vZGU7bCYmbC5yZW1vdmVDaGlsZChuKX1mdW5jdGlvbiBwKG4sbCx1KXt2YXIgdCxpLG8scj1hcmd1bWVudHMsZj17fTtmb3IobyBpbiBsKVwia2V5XCI9PW8/dD1sW29dOlwicmVmXCI9PW8/aT1sW29dOmZbb109bFtvXTtpZihhcmd1bWVudHMubGVuZ3RoPjMpZm9yKHU9W3VdLG89MztvPGFyZ3VtZW50cy5sZW5ndGg7bysrKXUucHVzaChyW29dKTtpZihudWxsIT11JiYoZi5jaGlsZHJlbj11KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBuJiZudWxsIT1uLmRlZmF1bHRQcm9wcylmb3IobyBpbiBuLmRlZmF1bHRQcm9wcyl2b2lkIDA9PT1mW29dJiYoZltvXT1uLmRlZmF1bHRQcm9wc1tvXSk7cmV0dXJuIHYobixmLHQsaSxudWxsKX1mdW5jdGlvbiB2KGwsdSx0LGksbyl7dmFyIHI9e3R5cGU6bCxwcm9wczp1LGtleTp0LHJlZjppLF9fazpudWxsLF9fOm51bGwsX19iOjAsX19lOm51bGwsX19kOnZvaWQgMCxfX2M6bnVsbCxjb25zdHJ1Y3Rvcjp2b2lkIDAsX192Om99O3JldHVybiBudWxsPT1vJiYoci5fX3Y9ciksbnVsbCE9bi52bm9kZSYmbi52bm9kZShyKSxyfWZ1bmN0aW9uIGgobil7cmV0dXJuIG4uY2hpbGRyZW59ZnVuY3Rpb24geShuLGwpe3RoaXMucHJvcHM9bix0aGlzLmNvbnRleHQ9bH1mdW5jdGlvbiBkKG4sbCl7aWYobnVsbD09bClyZXR1cm4gbi5fXz9kKG4uX18sbi5fXy5fX2suaW5kZXhPZihuKSsxKTpudWxsO2Zvcih2YXIgdTtsPG4uX19rLmxlbmd0aDtsKyspaWYobnVsbCE9KHU9bi5fX2tbbF0pJiZudWxsIT11Ll9fZSlyZXR1cm4gdS5fX2U7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2Ygbi50eXBlP2Qobik6bnVsbH1mdW5jdGlvbiBfKG4pe3ZhciBsLHU7aWYobnVsbCE9KG49bi5fXykmJm51bGwhPW4uX19jKXtmb3Iobi5fX2U9bi5fX2MuYmFzZT1udWxsLGw9MDtsPG4uX19rLmxlbmd0aDtsKyspaWYobnVsbCE9KHU9bi5fX2tbbF0pJiZudWxsIT11Ll9fZSl7bi5fX2U9bi5fX2MuYmFzZT11Ll9fZTticmVha31yZXR1cm4gXyhuKX19ZnVuY3Rpb24gdyhsKXsoIWwuX19kJiYobC5fX2Q9ITApJiZ1LnB1c2gobCkmJiF4Ll9fcisrfHxpIT09bi5kZWJvdW5jZVJlbmRlcmluZykmJigoaT1uLmRlYm91bmNlUmVuZGVyaW5nKXx8dCkoeCl9ZnVuY3Rpb24geCgpe2Zvcih2YXIgbjt4Ll9fcj11Lmxlbmd0aDspbj11LnNvcnQoZnVuY3Rpb24obixsKXtyZXR1cm4gbi5fX3YuX19iLWwuX192Ll9fYn0pLHU9W10sbi5zb21lKGZ1bmN0aW9uKG4pe3ZhciBsLHUsdCxpLG8scixmO24uX19kJiYocj0obz0obD1uKS5fX3YpLl9fZSwoZj1sLl9fUCkmJih1PVtdLCh0PXMoe30sbykpLl9fdj10LGk9eihmLG8sdCxsLl9fbix2b2lkIDAhPT1mLm93bmVyU1ZHRWxlbWVudCxudWxsLHUsbnVsbD09cj9kKG8pOnIpLE4odSxvKSxpIT1yJiZfKG8pKSl9KX1mdW5jdGlvbiBrKG4sbCx1LHQsaSxvLHIsYyxzLHApe3ZhciB5LF8sdyx4LGssZyxiLEE9dCYmdC5fX2t8fGUsUD1BLmxlbmd0aDtmb3Iocz09ZiYmKHM9bnVsbCE9cj9yWzBdOlA/ZCh0LDApOm51bGwpLHUuX19rPVtdLHk9MDt5PGwubGVuZ3RoO3krKylpZihudWxsIT0oeD11Ll9fa1t5XT1udWxsPT0oeD1sW3ldKXx8XCJib29sZWFuXCI9PXR5cGVvZiB4P251bGw6XCJzdHJpbmdcIj09dHlwZW9mIHh8fFwibnVtYmVyXCI9PXR5cGVvZiB4P3YobnVsbCx4LG51bGwsbnVsbCx4KTpBcnJheS5pc0FycmF5KHgpP3YoaCx7Y2hpbGRyZW46eH0sbnVsbCxudWxsLG51bGwpOm51bGwhPXguX19lfHxudWxsIT14Ll9fYz92KHgudHlwZSx4LnByb3BzLHgua2V5LG51bGwseC5fX3YpOngpKXtpZih4Ll9fPXUseC5fX2I9dS5fX2IrMSxudWxsPT09KHc9QVt5XSl8fHcmJngua2V5PT13LmtleSYmeC50eXBlPT09dy50eXBlKUFbeV09dm9pZCAwO2Vsc2UgZm9yKF89MDtfPFA7XysrKXtpZigodz1BW19dKSYmeC5rZXk9PXcua2V5JiZ4LnR5cGU9PT13LnR5cGUpe0FbX109dm9pZCAwO2JyZWFrfXc9bnVsbH1rPXoobix4LHc9d3x8ZixpLG8scixjLHMscCksKF89eC5yZWYpJiZ3LnJlZiE9XyYmKGJ8fChiPVtdKSx3LnJlZiYmYi5wdXNoKHcucmVmLG51bGwseCksYi5wdXNoKF8seC5fX2N8fGsseCkpLG51bGwhPWs/KG51bGw9PWcmJihnPWspLHM9bShuLHgsdyxBLHIsayxzKSxwfHxcIm9wdGlvblwiIT11LnR5cGU/XCJmdW5jdGlvblwiPT10eXBlb2YgdS50eXBlJiYodS5fX2Q9cyk6bi52YWx1ZT1cIlwiKTpzJiZ3Ll9fZT09cyYmcy5wYXJlbnROb2RlIT1uJiYocz1kKHcpKX1pZih1Ll9fZT1nLG51bGwhPXImJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHUudHlwZSlmb3IoeT1yLmxlbmd0aDt5LS07KW51bGwhPXJbeV0mJmEoclt5XSk7Zm9yKHk9UDt5LS07KW51bGwhPUFbeV0mJmooQVt5XSxBW3ldKTtpZihiKWZvcih5PTA7eTxiLmxlbmd0aDt5KyspJChiW3ldLGJbKyt5XSxiWysreV0pfWZ1bmN0aW9uIG0obixsLHUsdCxpLG8scil7dmFyIGYsZSxjO2lmKHZvaWQgMCE9PWwuX19kKWY9bC5fX2QsbC5fX2Q9dm9pZCAwO2Vsc2UgaWYoaT09dXx8byE9cnx8bnVsbD09by5wYXJlbnROb2RlKW46aWYobnVsbD09cnx8ci5wYXJlbnROb2RlIT09biluLmFwcGVuZENoaWxkKG8pLGY9bnVsbDtlbHNle2ZvcihlPXIsYz0wOyhlPWUubmV4dFNpYmxpbmcpJiZjPHQubGVuZ3RoO2MrPTIpaWYoZT09bylicmVhayBuO24uaW5zZXJ0QmVmb3JlKG8sciksZj1yfXJldHVybiB2b2lkIDAhPT1mP2Y6by5uZXh0U2libGluZ31mdW5jdGlvbiBnKG4sbCx1LHQsaSl7dmFyIG87Zm9yKG8gaW4gdSlcImNoaWxkcmVuXCI9PT1vfHxcImtleVwiPT09b3x8byBpbiBsfHxBKG4sbyxudWxsLHVbb10sdCk7Zm9yKG8gaW4gbClpJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBsW29dfHxcImNoaWxkcmVuXCI9PT1vfHxcImtleVwiPT09b3x8XCJ2YWx1ZVwiPT09b3x8XCJjaGVja2VkXCI9PT1vfHx1W29dPT09bFtvXXx8QShuLG8sbFtvXSx1W29dLHQpfWZ1bmN0aW9uIGIobixsLHUpe1wiLVwiPT09bFswXT9uLnNldFByb3BlcnR5KGwsdSk6bltsXT1udWxsPT11P1wiXCI6XCJudW1iZXJcIiE9dHlwZW9mIHV8fGMudGVzdChsKT91OnUrXCJweFwifWZ1bmN0aW9uIEEobixsLHUsdCxpKXt2YXIgbyxyO2lmKGkmJlwiY2xhc3NOYW1lXCI9PWwmJihsPVwiY2xhc3NcIiksXCJzdHlsZVwiPT09bClpZihcInN0cmluZ1wiPT10eXBlb2YgdSluLnN0eWxlPXU7ZWxzZXtpZihcInN0cmluZ1wiPT10eXBlb2YgdCYmKG4uc3R5bGU9dD1cIlwiKSx0KWZvcihsIGluIHQpdSYmbCBpbiB1fHxiKG4uc3R5bGUsbCxcIlwiKTtpZih1KWZvcihsIGluIHUpdCYmdVtsXT09PXRbbF18fGIobi5zdHlsZSxsLHVbbF0pfWVsc2VcIm9cIj09PWxbMF0mJlwiblwiPT09bFsxXT8obz1sIT09KGw9bC5yZXBsYWNlKC9DYXB0dXJlJC8sXCJcIikpLChyPWwudG9Mb3dlckNhc2UoKSlpbiBuJiYobD1yKSxsPWwuc2xpY2UoMiksbi5sfHwobi5sPXt9KSxuLmxbbF09dSx1P3R8fG4uYWRkRXZlbnRMaXN0ZW5lcihsLFAsbyk6bi5yZW1vdmVFdmVudExpc3RlbmVyKGwsUCxvKSk6XCJsaXN0XCIhPT1sJiZcInRhZ05hbWVcIiE9PWwmJlwiZm9ybVwiIT09bCYmXCJ0eXBlXCIhPT1sJiZcInNpemVcIiE9PWwmJlwiZG93bmxvYWRcIiE9PWwmJlwiaHJlZlwiIT09bCYmIWkmJmwgaW4gbj9uW2xdPW51bGw9PXU/XCJcIjp1OlwiZnVuY3Rpb25cIiE9dHlwZW9mIHUmJlwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcIiE9PWwmJihsIT09KGw9bC5yZXBsYWNlKC94bGluazo/LyxcIlwiKSk/bnVsbD09dXx8ITE9PT11P24ucmVtb3ZlQXR0cmlidXRlTlMoXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsbC50b0xvd2VyQ2FzZSgpKTpuLnNldEF0dHJpYnV0ZU5TKFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLGwudG9Mb3dlckNhc2UoKSx1KTpudWxsPT11fHwhMT09PXUmJiEvXmFyLy50ZXN0KGwpP24ucmVtb3ZlQXR0cmlidXRlKGwpOm4uc2V0QXR0cmlidXRlKGwsdSkpfWZ1bmN0aW9uIFAobCl7dGhpcy5sW2wudHlwZV0obi5ldmVudD9uLmV2ZW50KGwpOmwpfWZ1bmN0aW9uIEMobixsLHUpe3ZhciB0LGk7Zm9yKHQ9MDt0PG4uX19rLmxlbmd0aDt0KyspKGk9bi5fX2tbdF0pJiYoaS5fXz1uLGkuX19lJiYoXCJmdW5jdGlvblwiPT10eXBlb2YgaS50eXBlJiZpLl9fay5sZW5ndGg+MSYmQyhpLGwsdSksbD1tKHUsaSxpLG4uX19rLG51bGwsaS5fX2UsbCksXCJmdW5jdGlvblwiPT10eXBlb2Ygbi50eXBlJiYobi5fX2Q9bCkpKX1mdW5jdGlvbiB6KGwsdSx0LGksbyxyLGYsZSxjKXt2YXIgYSxwLHYsZCxfLHcseCxtLGcsYixBLFA9dS50eXBlO2lmKHZvaWQgMCE9PXUuY29uc3RydWN0b3IpcmV0dXJuIG51bGw7KGE9bi5fX2IpJiZhKHUpO3RyeXtuOmlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIFApe2lmKG09dS5wcm9wcyxnPShhPVAuY29udGV4dFR5cGUpJiZpW2EuX19jXSxiPWE/Zz9nLnByb3BzLnZhbHVlOmEuX186aSx0Ll9fYz94PShwPXUuX19jPXQuX19jKS5fXz1wLl9fRTooXCJwcm90b3R5cGVcImluIFAmJlAucHJvdG90eXBlLnJlbmRlcj91Ll9fYz1wPW5ldyBQKG0sYik6KHUuX19jPXA9bmV3IHkobSxiKSxwLmNvbnN0cnVjdG9yPVAscC5yZW5kZXI9SCksZyYmZy5zdWIocCkscC5wcm9wcz1tLHAuc3RhdGV8fChwLnN0YXRlPXt9KSxwLmNvbnRleHQ9YixwLl9fbj1pLHY9cC5fX2Q9ITAscC5fX2g9W10pLG51bGw9PXAuX19zJiYocC5fX3M9cC5zdGF0ZSksbnVsbCE9UC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJihwLl9fcz09cC5zdGF0ZSYmKHAuX19zPXMoe30scC5fX3MpKSxzKHAuX19zLFAuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKG0scC5fX3MpKSksZD1wLnByb3BzLF89cC5zdGF0ZSx2KW51bGw9PVAuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzJiZudWxsIT1wLmNvbXBvbmVudFdpbGxNb3VudCYmcC5jb21wb25lbnRXaWxsTW91bnQoKSxudWxsIT1wLmNvbXBvbmVudERpZE1vdW50JiZwLl9faC5wdXNoKHAuY29tcG9uZW50RGlkTW91bnQpO2Vsc2V7aWYobnVsbD09UC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJm0hPT1kJiZudWxsIT1wLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMmJnAuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhtLGIpLCFwLl9fZSYmbnVsbCE9cC5zaG91bGRDb21wb25lbnRVcGRhdGUmJiExPT09cC5zaG91bGRDb21wb25lbnRVcGRhdGUobSxwLl9fcyxiKXx8dS5fX3Y9PT10Ll9fdil7cC5wcm9wcz1tLHAuc3RhdGU9cC5fX3MsdS5fX3YhPT10Ll9fdiYmKHAuX19kPSExKSxwLl9fdj11LHUuX19lPXQuX19lLHUuX19rPXQuX19rLHAuX19oLmxlbmd0aCYmZi5wdXNoKHApLEModSxlLGwpO2JyZWFrIG59bnVsbCE9cC5jb21wb25lbnRXaWxsVXBkYXRlJiZwLmNvbXBvbmVudFdpbGxVcGRhdGUobSxwLl9fcyxiKSxudWxsIT1wLmNvbXBvbmVudERpZFVwZGF0ZSYmcC5fX2gucHVzaChmdW5jdGlvbigpe3AuY29tcG9uZW50RGlkVXBkYXRlKGQsXyx3KX0pfXAuY29udGV4dD1iLHAucHJvcHM9bSxwLnN0YXRlPXAuX19zLChhPW4uX19yKSYmYSh1KSxwLl9fZD0hMSxwLl9fdj11LHAuX19QPWwsYT1wLnJlbmRlcihwLnByb3BzLHAuc3RhdGUscC5jb250ZXh0KSxwLnN0YXRlPXAuX19zLG51bGwhPXAuZ2V0Q2hpbGRDb250ZXh0JiYoaT1zKHMoe30saSkscC5nZXRDaGlsZENvbnRleHQoKSkpLHZ8fG51bGw9PXAuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGV8fCh3PXAuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUoZCxfKSksQT1udWxsIT1hJiZhLnR5cGU9PWgmJm51bGw9PWEua2V5P2EucHJvcHMuY2hpbGRyZW46YSxrKGwsQXJyYXkuaXNBcnJheShBKT9BOltBXSx1LHQsaSxvLHIsZixlLGMpLHAuYmFzZT11Ll9fZSxwLl9faC5sZW5ndGgmJmYucHVzaChwKSx4JiYocC5fX0U9cC5fXz1udWxsKSxwLl9fZT0hMX1lbHNlIG51bGw9PXImJnUuX192PT09dC5fX3Y/KHUuX19rPXQuX19rLHUuX19lPXQuX19lKTp1Ll9fZT1UKHQuX19lLHUsdCxpLG8scixmLGMpOyhhPW4uZGlmZmVkKSYmYSh1KX1jYXRjaChsKXt1Ll9fdj1udWxsLG4uX19lKGwsdSx0KX1yZXR1cm4gdS5fX2V9ZnVuY3Rpb24gTihsLHUpe24uX19jJiZuLl9fYyh1LGwpLGwuc29tZShmdW5jdGlvbih1KXt0cnl7bD11Ll9faCx1Ll9faD1bXSxsLnNvbWUoZnVuY3Rpb24obil7bi5jYWxsKHUpfSl9Y2F0Y2gobCl7bi5fX2UobCx1Ll9fdil9fSl9ZnVuY3Rpb24gVChuLGwsdSx0LGksbyxyLGMpe3ZhciBzLGEscCx2LGgseT11LnByb3BzLGQ9bC5wcm9wcztpZihpPVwic3ZnXCI9PT1sLnR5cGV8fGksbnVsbCE9bylmb3Iocz0wO3M8by5sZW5ndGg7cysrKWlmKG51bGwhPShhPW9bc10pJiYoKG51bGw9PT1sLnR5cGU/Mz09PWEubm9kZVR5cGU6YS5sb2NhbE5hbWU9PT1sLnR5cGUpfHxuPT1hKSl7bj1hLG9bc109bnVsbDticmVha31pZihudWxsPT1uKXtpZihudWxsPT09bC50eXBlKXJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShkKTtuPWk/ZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixsLnR5cGUpOmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobC50eXBlLGQuaXMmJntpczpkLmlzfSksbz1udWxsLGM9ITF9aWYobnVsbD09PWwudHlwZSl5IT09ZCYmbi5kYXRhIT09ZCYmKG4uZGF0YT1kKTtlbHNle2lmKG51bGwhPW8mJihvPWUuc2xpY2UuY2FsbChuLmNoaWxkTm9kZXMpKSxwPSh5PXUucHJvcHN8fGYpLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLHY9ZC5kYW5nZXJvdXNseVNldElubmVySFRNTCwhYyl7aWYobnVsbCE9bylmb3IoeT17fSxoPTA7aDxuLmF0dHJpYnV0ZXMubGVuZ3RoO2grKyl5W24uYXR0cmlidXRlc1toXS5uYW1lXT1uLmF0dHJpYnV0ZXNbaF0udmFsdWU7KHZ8fHApJiYodiYmcCYmdi5fX2h0bWw9PXAuX19odG1sfHwobi5pbm5lckhUTUw9diYmdi5fX2h0bWx8fFwiXCIpKX1nKG4sZCx5LGksYyksdj9sLl9faz1bXToocz1sLnByb3BzLmNoaWxkcmVuLGsobixBcnJheS5pc0FycmF5KHMpP3M6W3NdLGwsdSx0LFwiZm9yZWlnbk9iamVjdFwiIT09bC50eXBlJiZpLG8scixmLGMpKSxjfHwoXCJ2YWx1ZVwiaW4gZCYmdm9pZCAwIT09KHM9ZC52YWx1ZSkmJnMhPT1uLnZhbHVlJiZBKG4sXCJ2YWx1ZVwiLHMseS52YWx1ZSwhMSksXCJjaGVja2VkXCJpbiBkJiZ2b2lkIDAhPT0ocz1kLmNoZWNrZWQpJiZzIT09bi5jaGVja2VkJiZBKG4sXCJjaGVja2VkXCIscyx5LmNoZWNrZWQsITEpKX1yZXR1cm4gbn1mdW5jdGlvbiAkKGwsdSx0KXt0cnl7XCJmdW5jdGlvblwiPT10eXBlb2YgbD9sKHUpOmwuY3VycmVudD11fWNhdGNoKGwpe24uX19lKGwsdCl9fWZ1bmN0aW9uIGoobCx1LHQpe3ZhciBpLG8scjtpZihuLnVubW91bnQmJm4udW5tb3VudChsKSwoaT1sLnJlZikmJihpLmN1cnJlbnQmJmkuY3VycmVudCE9PWwuX19lfHwkKGksbnVsbCx1KSksdHx8XCJmdW5jdGlvblwiPT10eXBlb2YgbC50eXBlfHwodD1udWxsIT0obz1sLl9fZSkpLGwuX19lPWwuX19kPXZvaWQgMCxudWxsIT0oaT1sLl9fYykpe2lmKGkuY29tcG9uZW50V2lsbFVubW91bnQpdHJ5e2kuY29tcG9uZW50V2lsbFVubW91bnQoKX1jYXRjaChsKXtuLl9fZShsLHUpfWkuYmFzZT1pLl9fUD1udWxsfWlmKGk9bC5fX2spZm9yKHI9MDtyPGkubGVuZ3RoO3IrKylpW3JdJiZqKGlbcl0sdSx0KTtudWxsIT1vJiZhKG8pfWZ1bmN0aW9uIEgobixsLHUpe3JldHVybiB0aGlzLmNvbnN0cnVjdG9yKG4sdSl9ZnVuY3Rpb24gSShsLHUsdCl7dmFyIGkscixjO24uX18mJm4uX18obCx1KSxyPShpPXQ9PT1vKT9udWxsOnQmJnQuX19rfHx1Ll9fayxsPXAoaCxudWxsLFtsXSksYz1bXSx6KHUsKGk/dTp0fHx1KS5fX2s9bCxyfHxmLGYsdm9pZCAwIT09dS5vd25lclNWR0VsZW1lbnQsdCYmIWk/W3RdOnI/bnVsbDp1LmNoaWxkTm9kZXMubGVuZ3RoP2Uuc2xpY2UuY2FsbCh1LmNoaWxkTm9kZXMpOm51bGwsYyx0fHxmLGkpLE4oYyxsKX1uPXtfX2U6ZnVuY3Rpb24obixsKXtmb3IodmFyIHUsdDtsPWwuX187KWlmKCh1PWwuX19jKSYmIXUuX18pdHJ5e2lmKHUuY29uc3RydWN0b3ImJm51bGwhPXUuY29uc3RydWN0b3IuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yJiYodD0hMCx1LnNldFN0YXRlKHUuY29uc3RydWN0b3IuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yKG4pKSksbnVsbCE9dS5jb21wb25lbnREaWRDYXRjaCYmKHQ9ITAsdS5jb21wb25lbnREaWRDYXRjaChuKSksdClyZXR1cm4gdyh1Ll9fRT11KX1jYXRjaChsKXtuPWx9dGhyb3cgbn19LGw9ZnVuY3Rpb24obil7cmV0dXJuIG51bGwhPW4mJnZvaWQgMD09PW4uY29uc3RydWN0b3J9LHkucHJvdG90eXBlLnNldFN0YXRlPWZ1bmN0aW9uKG4sbCl7dmFyIHU7dT1udWxsIT10aGlzLl9fcyYmdGhpcy5fX3MhPT10aGlzLnN0YXRlP3RoaXMuX19zOnRoaXMuX19zPXMoe30sdGhpcy5zdGF0ZSksXCJmdW5jdGlvblwiPT10eXBlb2YgbiYmKG49bihzKHt9LHUpLHRoaXMucHJvcHMpKSxuJiZzKHUsbiksbnVsbCE9biYmdGhpcy5fX3YmJihsJiZ0aGlzLl9faC5wdXNoKGwpLHcodGhpcykpfSx5LnByb3RvdHlwZS5mb3JjZVVwZGF0ZT1mdW5jdGlvbihuKXt0aGlzLl9fdiYmKHRoaXMuX19lPSEwLG4mJnRoaXMuX19oLnB1c2gobiksdyh0aGlzKSl9LHkucHJvdG90eXBlLnJlbmRlcj1oLHU9W10sdD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBQcm9taXNlP1Byb21pc2UucHJvdG90eXBlLnRoZW4uYmluZChQcm9taXNlLnJlc29sdmUoKSk6c2V0VGltZW91dCx4Ll9fcj0wLG89ZixyPTAsZXhwb3J0cy5yZW5kZXI9SSxleHBvcnRzLmh5ZHJhdGU9ZnVuY3Rpb24obixsKXtJKG4sbCxvKX0sZXhwb3J0cy5jcmVhdGVFbGVtZW50PXAsZXhwb3J0cy5oPXAsZXhwb3J0cy5GcmFnbWVudD1oLGV4cG9ydHMuY3JlYXRlUmVmPWZ1bmN0aW9uKCl7cmV0dXJue2N1cnJlbnQ6bnVsbH19LGV4cG9ydHMuaXNWYWxpZEVsZW1lbnQ9bCxleHBvcnRzLkNvbXBvbmVudD15LGV4cG9ydHMuY2xvbmVFbGVtZW50PWZ1bmN0aW9uKG4sbCx1KXt2YXIgdCxpLG8scj1hcmd1bWVudHMsZj1zKHt9LG4ucHJvcHMpO2ZvcihvIGluIGwpXCJrZXlcIj09bz90PWxbb106XCJyZWZcIj09bz9pPWxbb106ZltvXT1sW29dO2lmKGFyZ3VtZW50cy5sZW5ndGg+Mylmb3IodT1bdV0sbz0zO288YXJndW1lbnRzLmxlbmd0aDtvKyspdS5wdXNoKHJbb10pO3JldHVybiBudWxsIT11JiYoZi5jaGlsZHJlbj11KSx2KG4udHlwZSxmLHR8fG4ua2V5LGl8fG4ucmVmLG51bGwpfSxleHBvcnRzLmNyZWF0ZUNvbnRleHQ9ZnVuY3Rpb24obixsKXt2YXIgdT17X19jOmw9XCJfX2NDXCIrcisrLF9fOm4sQ29uc3VtZXI6ZnVuY3Rpb24obixsKXtyZXR1cm4gbi5jaGlsZHJlbihsKX0sUHJvdmlkZXI6ZnVuY3Rpb24obix1LHQpe3JldHVybiB0aGlzLmdldENoaWxkQ29udGV4dHx8KHU9W10sKHQ9e30pW2xdPXRoaXMsdGhpcy5nZXRDaGlsZENvbnRleHQ9ZnVuY3Rpb24oKXtyZXR1cm4gdH0sdGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGU9ZnVuY3Rpb24obil7dGhpcy5wcm9wcy52YWx1ZSE9PW4udmFsdWUmJnUuc29tZSh3KX0sdGhpcy5zdWI9ZnVuY3Rpb24obil7dS5wdXNoKG4pO3ZhciBsPW4uY29tcG9uZW50V2lsbFVubW91bnQ7bi5jb21wb25lbnRXaWxsVW5tb3VudD1mdW5jdGlvbigpe3Uuc3BsaWNlKHUuaW5kZXhPZihuKSwxKSxsJiZsLmNhbGwobil9fSksbi5jaGlsZHJlbn19O3JldHVybiB1LlByb3ZpZGVyLl9fPXUuQ29uc3VtZXIuY29udGV4dFR5cGU9dX0sZXhwb3J0cy50b0NoaWxkQXJyYXk9ZnVuY3Rpb24gbihsLHUpe3JldHVybiB1PXV8fFtdLG51bGw9PWx8fFwiYm9vbGVhblwiPT10eXBlb2YgbHx8KEFycmF5LmlzQXJyYXkobCk/bC5zb21lKGZ1bmN0aW9uKGwpe24obCx1KX0pOnUucHVzaChsKSksdX0sZXhwb3J0cy5fX3U9aixleHBvcnRzLm9wdGlvbnM9bjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXByZWFjdC5qcy5tYXBcbiIsInZhciBuLHQscix1PXJlcXVpcmUoXCJwcmVhY3RcIiksbz0wLGk9W10sYz11Lm9wdGlvbnMuX19yLGU9dS5vcHRpb25zLmRpZmZlZCxmPXUub3B0aW9ucy5fX2MsYT11Lm9wdGlvbnMudW5tb3VudDtmdW5jdGlvbiBwKG4scil7dS5vcHRpb25zLl9faCYmdS5vcHRpb25zLl9faCh0LG4sb3x8ciksbz0wO3ZhciBpPXQuX19IfHwodC5fX0g9e19fOltdLF9faDpbXX0pO3JldHVybiBuPj1pLl9fLmxlbmd0aCYmaS5fXy5wdXNoKHt9KSxpLl9fW25dfWZ1bmN0aW9uIHYobil7cmV0dXJuIG89MSxzKEEsbil9ZnVuY3Rpb24gcyhyLHUsbyl7dmFyIGk9cChuKyssMik7cmV0dXJuIGkudD1yLGkuX19jfHwoaS5fX2M9dCxpLl9fPVtvP28odSk6QSh2b2lkIDAsdSksZnVuY3Rpb24obil7dmFyIHQ9aS50KGkuX19bMF0sbik7aS5fX1swXSE9PXQmJihpLl9fPVt0LGkuX19bMV1dLGkuX19jLnNldFN0YXRlKHt9KSl9XSksaS5fX31mdW5jdGlvbiB4KHIsbyl7dmFyIGk9cChuKyssNCk7IXUub3B0aW9ucy5fX3MmJnEoaS5fX0gsbykmJihpLl9fPXIsaS5fX0g9byx0Ll9faC5wdXNoKGkpKX1mdW5jdGlvbiBtKHQscil7dmFyIHU9cChuKyssNyk7cmV0dXJuIHEodS5fX0gscik/KHUuX19IPXIsdS5fX2g9dCx1Ll9fPXQoKSk6dS5fX31mdW5jdGlvbiB5KCl7aS5zb21lKGZ1bmN0aW9uKG4pe2lmKG4uX19QKXRyeXtuLl9fSC5fX2guZm9yRWFjaChoKSxuLl9fSC5fX2guZm9yRWFjaChfKSxuLl9fSC5fX2g9W119Y2F0Y2godCl7cmV0dXJuIG4uX19ILl9faD1bXSx1Lm9wdGlvbnMuX19lKHQsbi5fX3YpLCEwfX0pLGk9W119dS5vcHRpb25zLl9fcj1mdW5jdGlvbihyKXtjJiZjKHIpLG49MDt2YXIgdT0odD1yLl9fYykuX19IO3UmJih1Ll9faC5mb3JFYWNoKGgpLHUuX19oLmZvckVhY2goXyksdS5fX2g9W10pfSx1Lm9wdGlvbnMuZGlmZmVkPWZ1bmN0aW9uKG4pe2UmJmUobik7dmFyIHQ9bi5fX2M7dCYmdC5fX0gmJnQuX19ILl9faC5sZW5ndGgmJigxIT09aS5wdXNoKHQpJiZyPT09dS5vcHRpb25zLnJlcXVlc3RBbmltYXRpb25GcmFtZXx8KChyPXUub3B0aW9ucy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpfHxmdW5jdGlvbihuKXt2YXIgdCxyPWZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KHUpLGwmJmNhbmNlbEFuaW1hdGlvbkZyYW1lKHQpLHNldFRpbWVvdXQobil9LHU9c2V0VGltZW91dChyLDEwMCk7bCYmKHQ9cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHIpKX0pKHkpKX0sdS5vcHRpb25zLl9fYz1mdW5jdGlvbihuLHQpe3Quc29tZShmdW5jdGlvbihuKXt0cnl7bi5fX2guZm9yRWFjaChoKSxuLl9faD1uLl9faC5maWx0ZXIoZnVuY3Rpb24obil7cmV0dXJuIW4uX198fF8obil9KX1jYXRjaChyKXt0LnNvbWUoZnVuY3Rpb24obil7bi5fX2gmJihuLl9faD1bXSl9KSx0PVtdLHUub3B0aW9ucy5fX2UocixuLl9fdil9fSksZiYmZihuLHQpfSx1Lm9wdGlvbnMudW5tb3VudD1mdW5jdGlvbihuKXthJiZhKG4pO3ZhciB0PW4uX19jO2lmKHQmJnQuX19IKXRyeXt0Ll9fSC5fXy5mb3JFYWNoKGgpfWNhdGNoKG4pe3Uub3B0aW9ucy5fX2Uobix0Ll9fdil9fTt2YXIgbD1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWU7ZnVuY3Rpb24gaChuKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBuLnUmJm4udSgpfWZ1bmN0aW9uIF8obil7bi51PW4uX18oKX1mdW5jdGlvbiBxKG4sdCl7cmV0dXJuIW58fHQuc29tZShmdW5jdGlvbih0LHIpe3JldHVybiB0IT09bltyXX0pfWZ1bmN0aW9uIEEobix0KXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3Qobik6dH1leHBvcnRzLnVzZVN0YXRlPXYsZXhwb3J0cy51c2VSZWR1Y2VyPXMsZXhwb3J0cy51c2VFZmZlY3Q9ZnVuY3Rpb24ocixvKXt2YXIgaT1wKG4rKywzKTshdS5vcHRpb25zLl9fcyYmcShpLl9fSCxvKSYmKGkuX189cixpLl9fSD1vLHQuX19ILl9faC5wdXNoKGkpKX0sZXhwb3J0cy51c2VMYXlvdXRFZmZlY3Q9eCxleHBvcnRzLnVzZVJlZj1mdW5jdGlvbihuKXtyZXR1cm4gbz01LG0oZnVuY3Rpb24oKXtyZXR1cm57Y3VycmVudDpufX0sW10pfSxleHBvcnRzLnVzZUltcGVyYXRpdmVIYW5kbGU9ZnVuY3Rpb24obix0LHIpe289Nix4KGZ1bmN0aW9uKCl7XCJmdW5jdGlvblwiPT10eXBlb2Ygbj9uKHQoKSk6biYmKG4uY3VycmVudD10KCkpfSxudWxsPT1yP3I6ci5jb25jYXQobikpfSxleHBvcnRzLnVzZU1lbW89bSxleHBvcnRzLnVzZUNhbGxiYWNrPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIG89OCxtKGZ1bmN0aW9uKCl7cmV0dXJuIG59LHQpfSxleHBvcnRzLnVzZUNvbnRleHQ9ZnVuY3Rpb24ocil7dmFyIHU9dC5jb250ZXh0W3IuX19jXSxvPXAobisrLDkpO3JldHVybiBvLl9fYz1yLHU/KG51bGw9PW8uX18mJihvLl9fPSEwLHUuc3ViKHQpKSx1LnByb3BzLnZhbHVlKTpyLl9ffSxleHBvcnRzLnVzZURlYnVnVmFsdWU9ZnVuY3Rpb24obix0KXt1Lm9wdGlvbnMudXNlRGVidWdWYWx1ZSYmdS5vcHRpb25zLnVzZURlYnVnVmFsdWUodD90KG4pOm4pfSxleHBvcnRzLnVzZUVycm9yQm91bmRhcnk9ZnVuY3Rpb24ocil7dmFyIHU9cChuKyssMTApLG89digpO3JldHVybiB1Ll9fPXIsdC5jb21wb25lbnREaWRDYXRjaHx8KHQuY29tcG9uZW50RGlkQ2F0Y2g9ZnVuY3Rpb24obil7dS5fXyYmdS5fXyhuKSxvWzFdKG4pfSksW29bMF0sZnVuY3Rpb24oKXtvWzFdKHZvaWQgMCl9XX07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ob29rcy5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuLy8gRG9uJ3QgZm9yZ2V0IHRvIGluY2x1ZGUgaCByZW5kZXJlciFcbmltcG9ydCB7aCwgQ29tcG9uZW50fSBmcm9tICdwcmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBoaWRkZW5WYWx1ZTogbnVsbCxcbiAgICAgIGZsaXBTdGF0dXM6IERFRkFVTFQsXG4gICAgfTtcbiAgICB0aGlzLnBsYXllciA9IHByb3BzLnBsYXllcjtcbiAgICB0aGlzLmNhcmROdW1iZXIgPSBwcm9wcy52YWw7XG4gICAgdGhpcy5zb2NrZXQgPSBwcm9wcy5zb2NrZXQ7XG5cbiAgICB0aGlzLmJpbmQoKTtcbiAgfVxuXG4gIGJpbmQoKSB7XG4gICAgdGhpcy5zb2NrZXQub24oJ25ld1JvdW5kJywgKCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2ZsaXBTdGF0dXM6IERFRkFVTFQsIGhpZGRlblZhbHVlOiBudWxsfSk7XG4gICAgICB9LCAxMDAwKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc29ja2V0Lm9uKCdyZXZlYWxDYXJkJywgKHByb3BzKSA9PiB7XG4gICAgICBpZiAodGhpcy5jYXJkTnVtYmVyID09PSBwcm9wcy52YWwgJiYgdGhpcy5wbGF5ZXIgPT09IHByb3BzLnBsYXllcikge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtmbGlwU3RhdHVzOiBGTElQUEVELCBoaWRkZW5WYWx1ZTogcHJvcHMuZW1vaml9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGd1ZXNzKHZhbCkge1xuICAgIHRoaXMuc29ja2V0LmVtaXQoJ2ZsaXAnLCB7J3BsYXllcic6IHRoaXMucGxheWVyLCAnZ3Vlc3MnOiB2YWx9KTtcbiAgfTtcblxuICByZW5kZXIocHJvcHMsIHN0YXRlKSB7XG4gICAgcmV0dXJuICg8ZGl2IGNsYXNzPVwiY2FyZFwiIGRhdGEtZmxpcFN0YXR1cz17dGhpcy5zdGF0ZS5mbGlwU3RhdHVzfSBkYXRhLXBsYXllcj17cHJvcHMucGxheWVyfT5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJmcm9udFwiIG9uQ2xpY2s9e3RoaXMuZ3Vlc3MuYmluZCh0aGlzLCBwcm9wcy52YWwpfSBkaXNhYmxlZD17cHJvcHMuZGlzYWJsZWR9PlxuICAgICAgICAgICAgP1xuICAgICAgPC9idXR0b24+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhY2tcIj57dGhpcy5zdGF0ZS5oaWRkZW5WYWx1ZX08L2Rpdj5cbiAgICA8L2Rpdj4pO1xuICB9XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbi8vIERvbid0IGZvcmdldCB0byBpbmNsdWRlIGggcmVuZGVyZXIhXG5pbXBvcnQge2gsIENvbXBvbmVudCwgY3JlYXRlQ29udGV4dH0gZnJvbSAncHJlYWN0JztcbmltcG9ydCB7dXNlQ29udGV4dH0gZnJvbSAncHJlYWN0L2hvb2tzJztcblxuaW1wb3J0IENhcmQgZnJvbSAnLi9jYXJkLmpzeCc7XG5cbmNvbnN0IFNvY2tldCA9IGNyZWF0ZUNvbnRleHQoaW8oe3VwZ3JhZGU6IGZhbHNlLCB0cmFuc3BvcnRzOiBbJ3dlYnNvY2tldCddfSkpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2NvcmU6IHtwbGF5ZXIxOiAwLCBwbGF5ZXIyOiAwfSxcbiAgICAgIHN0YXJ0ZWQ6IGZhbHNlLFxuICAgICAgd2FpdGluZzogdHJ1ZSxcbiAgICAgIG9wcG9uZW50R3Vlc3M6IHtjYXJkOiBudWxsLCBlbW9qaTogbnVsbH0sXG4gICAgfTtcbiAgICB0aGlzLnBsYXllciA9IFBMQVlFUl8xO1xuICAgIHRoaXMuc29ja2V0ID0gdXNlQ29udGV4dChTb2NrZXQpO1xuXG4gICAgY29uc29sZS5sb2coJ0JpbmRpbmcnKTtcbiAgICB0aGlzLmJpbmQoKTtcbiAgfVxuXG4gIGJpbmQoKSB7XG4gICAgdGhpcy5zb2NrZXQub24oJ2Nvbm5lY3QnLCAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnQ29ubmVjdGVkJyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNvY2tldC5vbignZGlzY29ubmVjdCcsICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdEaXNjb25uZWN0ZWQnKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc29ja2V0Lm9uKCdzdGFydCcsIChwcm9wcykgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ1N0YXJ0IGdhbWUnKTtcbiAgICAgIHRoaXMucGxheWVyID0gcHJvcHMucGxheWVyTm87XG4gICAgICB0aGlzLnNldFN0YXRlKHtzdGFydGVkOiB0cnVlfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNvY2tldC5vbignbmV3Um91bmQnLCAocHJvcHMpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdSb3VuZCBzdGFydGluZycpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zb2NrZXQub24oJ3R1cm4nLCAodmFsKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHt3YWl0aW5nOiBmYWxzZX0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zb2NrZXQub24oJ3dhaXQnLCAodmFsKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHt3YWl0aW5nOiB0cnVlfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNvY2tldC5vbignZW5kJywgKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ0VuZCcpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7c3RhcnRlZDogZmFsc2V9KTtcbiAgICB9KTtcblxuICAgIHRoaXMuc29ja2V0Lm9uKCdlcnJvcicsICgpID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0FuIGVycm9yIHdpdGggdGhlIHNlcnZlciBvY2N1cnJlZC4nKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc29ja2V0Lm9uKCdtYXRjaGVkJywgKGNhcmRzKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnTWF0Y2hlZCEnLCBjYXJkcyk7XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVDYXJkKHByb3BzKSB7XG4gICAgcmV0dXJuICg8U29ja2V0LkNvbnN1bWVyPlxuICAgICAgeyhzb2NrZXQpID0+IHtcbiAgICAgICAgcmV0dXJuIDxDYXJkIHsuLi5wcm9wc30gc29ja2V0PXtzb2NrZXR9Lz47XG4gICAgICB9fVxuICAgIDwvU29ja2V0LkNvbnN1bWVyPik7XG4gIH1cblxuICBjcmVhdGVIYW5kKHBsYXllcikge1xuICAgIGNvbnN0IGhhbmQgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgRU1PSklTLmxlbmd0aDsgaSsrKSB7XG4gICAgICBoYW5kLnB1c2godGhpcy5jcmVhdGVDYXJkKHtwbGF5ZXIsIHZhbDogaX0pKTtcbiAgICB9XG4gICAgcmV0dXJuIGhhbmQ7XG4gIH1cblxuICByZW5kZXIocHJvcHMsIHN0YXRlKSB7XG4gICAgY29uc3QgcGxheWVyID0gdGhpcy5wbGF5ZXI7XG4gICAgY29uc3Qgb3Bwb25lbnQgPSAodGhpcy5wbGF5ZXIgPT09IFBMQVlFUl8xKSA/IFBMQVlFUl8yIDogUExBWUVSXzE7XG5cbiAgICBpZiAoIXRoaXMuc3RhdGUuc3RhcnRlZCkge1xuICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cImdhbWVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRcIj5cbiAgICAgICAgICA8aDI+V2FpdGluZyBmb3Igb3Bwb25lbnQuLi48L2gyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2Pik7XG4gICAgfVxuICAgIHJldHVybiAoPGRpdiBjbGFzcz1cImdhbWVcIj5cbiAgICAgIDxoMj5QbGF5ZXI6IHt0aGlzLnN0YXRlLndhaXRpbmcgPyAnT3Bwb25lbnRcXCdzIHR1cm4nIDogJ1lvdXIgVHVybid9IDwvaDI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZ3JpZFwiPlxuICAgICAgICB7XG4gICAgICAgICAgdGhpcy5jcmVhdGVIYW5kKHBsYXllcikubWFwKChpbmRleCkgPT4gaW5kZXgpXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICAgPGhyIGNsYXNzPVwiYnJlYWtcIi8+XG4gICAgICA8ZGl2IGNsYXNzPVwiZ3JpZFwiPlxuICAgICAgICB7XG4gICAgICAgICAgdGhpcy5jcmVhdGVIYW5kKG9wcG9uZW50KS5tYXAoKGluZGV4KSA9PiBpbmRleClcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgICA8aDI+T3Bwb25lbnQ8L2gyPlxuICAgIDwvZGl2Pik7XG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHtoLCByZW5kZXJ9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQgR2FtZSBmcm9tIFwiLi9jb21wb25lbnRzL2dhbWUuanN4XCI7XG5pbXBvcnQgXCIuL3N0eWxlL2luZGV4LmNzc1wiO1xuXG4gICAgcmVuZGVyKCg8ZGl2PlxuICAgICAgICAgICAgPEdhbWUvPlxuICAgICAgICA8L2Rpdj5cbiAgICApLCBkb2N1bWVudC5ib2R5KTtcbiIsIiJdfQ==
