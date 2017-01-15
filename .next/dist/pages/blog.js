'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('/Users/lionel/Code/nextjs-sample/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('/Users/lionel/Code/nextjs-sample/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('/Users/lionel/Code/nextjs-sample/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('/Users/lionel/Code/nextjs-sample/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('/Users/lionel/Code/nextjs-sample/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('/Users/lionel/Code/nextjs-sample/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _head = require('/Users/lionel/Code/nextjs-sample/node_modules/next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);
    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _head2.default,
          null,
          _react2.default.createElement('link', { rel: 'stylesheet', href: 'static/styles.css' })
        ),
        _react2.default.createElement(
          'h1',
          { className: styles.title },
          'My ',
          this.props.id,
          ' blog post'
        ),
        _react2.default.createElement(
          'p',
          { className: styles.paragraph },
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        )
      );
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var id = _ref.query.id;

      return { id: id };
    }
  }]);
  return _class;
}(_react2.default.Component);

exports.default = _class;


var styles = {
  title: 'pages_blog_js_entry-styles-title',
  paragraph: 'pages_blog_js_entry-styles-paragraph'
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2Jsb2cuanM/ZW50cnkiXSwibmFtZXMiOlsic3R5bGVzIiwidGl0bGUiLCJwcm9wcyIsImlkIiwicGFyYWdyYXBoIiwicXVlcnkiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFPWTtBQUNSLGFBQU87QUFBQTtBQUFBO0FBQ0w7QUFBQTtBQUFBO0FBQ0Usa0RBQU0sS0FBSSxZQUFWLEVBQXVCLE1BQUssbUJBQTVCO0FBREYsU0FESztBQUlMO0FBQUE7QUFBQSxZQUFJLFdBQVdBLE9BQU9DLEtBQXRCO0FBQUE7QUFBaUMsZUFBS0MsS0FBTCxDQUFXQyxFQUE1QztBQUFBO0FBQUEsU0FKSztBQUtMO0FBQUE7QUFBQSxZQUFHLFdBQVdILE9BQU9JLFNBQXJCO0FBQUE7QUFBQTtBQUxLLE9BQVA7QUFVRDs7OzBDQWYwQztBQUFBLFVBQVJELEVBQVEsUUFBakJFLEtBQWlCLENBQVJGLEVBQVE7O0FBQ3pDLGFBQU8sRUFBRUEsTUFBRixFQUFQO0FBQ0Q7OztFQUgwQixnQkFBTUcsUzs7Ozs7QUFtQm5DLElBQU1OO0FBQUE7QUFBQTtBQUFBLENBQU4iLCJmaWxlIjoiYmxvZy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbGlvbmVsL0NvZGUvbmV4dGpzLXNhbXBsZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzICh7IHF1ZXJ5OiB7IGlkIH0gfSkge1xuICAgIHJldHVybiB7IGlkIH1cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJzdGF0aWMvc3R5bGVzLmNzc1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9Pk15IHt0aGlzLnByb3BzLmlkfSBibG9nIHBvc3Q8L2gxPlxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucGFyYWdyYXBofT5cbiAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2RcbiAgICAgICAgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuXG4gICAgICA8L3A+XG4gICAgPC9kaXY+XG4gIH1cbn1cblxuY29uc3Qgc3R5bGVzID0gY3NzSW5KUyh7XG4gIHRpdGxlOiB7XG4gICAgY29sb3I6IFwib3JhbmdlcmVkXCIsXG4gIH0sXG4gIHBhcmFncmFwaDoge1xuICAgIGZvbnRTdHlsZTogXCJpdGFsaWNcIlxuICB9XG59KVxuIl19