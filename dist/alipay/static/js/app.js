var __CML__GLOBAL = require("./manifest.js");
__CML__GLOBAL.webpackJsonp([2],{

/***/ "../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/didi/work/chameleon-open/chameleon/packages/chameleon-tool/chameleon.js\"}!../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=app&media=dev&cmlType=alipay&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/app/app.cml":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = __webpack_require__("./src/store/index.js");

var _index2 = _interopRequireDefault(_index);

var _routerConfig = __webpack_require__("./src/router.config.json");

var _routerConfig2 = _interopRequireDefault(_routerConfig);

var _chameleonRuntime = __webpack_require__("./node_modules/chameleon-runtime/index.js");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
  function App() {
    _classCallCheck(this, App);

    this.data = {
      routerConfig: _routerConfig2.default
    };
  }

  _createClass(App, [{
    key: 'created',
    value: function created(res) {}
  }]);

  return App;
}();

exports.default = new App();


exports.default = _chameleonRuntime2.default.createApp(exports.default).getOptions();

/***/ }),

/***/ "../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/vue-style-loader/index.js!../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"alipay\"}!../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/didi/work/chameleon-open/chameleon/packages/chameleon-tool/configs/postcss/alipay/.postcssrc.js\"}}!../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"alipay\"}!../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=app&media=dev&cmlType=alipay&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/app/app.cml":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/app/app.cml":
/***/ (function(module, exports, __webpack_require__) {

var __cml__style0 = __webpack_require__("../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/vue-style-loader/index.js!../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"alipay\"}!../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/didi/work/chameleon-open/chameleon/packages/chameleon-tool/configs/postcss/alipay/.postcssrc.js\"}}!../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"alipay\"}!../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=app&media=dev&cmlType=alipay&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/app/app.cml");
var __cml__script = __webpack_require__("../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/didi/work/chameleon-open/chameleon/packages/chameleon-tool/chameleon.js\"}!../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=app&media=dev&cmlType=alipay&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/app/app.cml");


/***/ }),

/***/ "./src/router.config.json":
/***/ (function(module, exports) {

module.exports = {"mode":"hash","domain":"https://www.chameleon.com","routes":[{"url":"/","path":"/pages/index/index","name":"首页","mock":"index.php"},{"url":"/cml/h5/list","path":"/pages/list/list","name":"列表","mock":"index.php"},{"url":"/cml/h5/detail","path":"/pages/detail/detail","name":"详情页","mock":"index.php"},{"url":"/cml/h5/map","path":"/pages/map/map","name":"地图","mock":"index.php"}]}

/***/ }),

/***/ "./src/store/actions.js":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {};

/***/ }),

/***/ "./src/store/getters.js":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {};

/***/ }),

/***/ "./src/store/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__("./src/store/actions.js");

var _actions2 = _interopRequireDefault(_actions);

var _getters = __webpack_require__("./src/store/getters.js");

var _getters2 = _interopRequireDefault(_getters);

var _state = __webpack_require__("./src/store/state.js");

var _state2 = _interopRequireDefault(_state);

var _mutations = __webpack_require__("./src/store/mutations.js");

var _mutations2 = _interopRequireDefault(_mutations);

var _chameleonStore = __webpack_require__("./node_modules/chameleon-store/index.js");

var _chameleonStore2 = _interopRequireDefault(_chameleonStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _chameleonStore2.default)({
  actions: _actions2.default,
  getters: _getters2.default,
  state: _state2.default,
  mutations: _mutations2.default
});

/***/ }),

/***/ "./src/store/mutations.js":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {};

/***/ }),

/***/ "./src/store/state.js":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var state = {
  tabs: [{ label: '首页' }, { label: "分类" }, { label: '识物' }, { label: '购物车' }, { label: '个人' }]
};
exports.default = state;

/***/ })

},["./src/app/app.cml"]);