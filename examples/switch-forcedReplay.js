webpackJsonp([4],{

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(315);


/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rc_queue_anim__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__assets_switch_less__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__assets_switch_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__assets_switch_less__);




/* eslint-disable no-console,react/no-multi-comp */





var Demo = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(Demo, _React$Component);

  function Demo(props) {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Demo);

    var _this = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Demo.__proto__ || Object.getPrototypeOf(Demo)).call(this, props));

    _this.onEnter = function () {
      _this.setState({
        childrenKey: null
      });
    };

    _this.onLeave = function () {
      _this.setState({
        childrenKey: _this.childrenKey
      });
    };

    _this.getChildren = function () {
      return (_this.state.childrenKey || []).map(function (item) {
        return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('li', { key: item.key });
      });
    };

    _this.childrenKey = [{ key: 1 }, { key: 2 }, { key: 3 }, { key: 4 }, { key: 5 }, { key: 6 }];
    _this.state = {
      childrenKey: _this.childrenKey
    };
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Demo, [{
    key: 'render',
    value: function render() {
      var childrenToRender = this.getChildren();
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'h2',
          null,
          '\u9F20\u6807\u7ECF\u8FC7\u5F53\u524D\u533A\u57DF\uFF0C\u518D\u79FB\u51FA\u533A\u57DF\u67E5\u770B'
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'p',
          null,
          '\u6E05\u9664\u6240\u6709\u8FD8\u5728\u52A8\u753B\u7684\u53C2\u7D20\u5E76\u8BBE\u7F6E\u5207\u6362\u65F6\u7684\u521D\u59CB\u53C2\u6570'
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'div',
          { className: 'switch', onMouseEnter: this.onEnter, onMouseLeave: this.onLeave },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4_rc_queue_anim__["a" /* default */],
            { component: 'ul', leaveReverse: true, delay: [0, 300], type: 'scale', forcedReplay: true },
            childrenToRender
          ),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4_rc_queue_anim__["a" /* default */],
            { component: 'ul', leaveReverse: true, delay: 150, type: 'scale', forcedReplay: true },
            childrenToRender
          ),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4_rc_queue_anim__["a" /* default */],
            { component: 'ul', leaveReverse: true, delay: [300, 0], type: 'scale', forcedReplay: true },
            childrenToRender
          )
        )
      );
    }
  }]);

  return Demo;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

__WEBPACK_IMPORTED_MODULE_6_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Demo, null), document.getElementById('__react-content'));

/***/ }),

/***/ 81:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[314]);
//# sourceMappingURL=switch-forcedReplay.js.map