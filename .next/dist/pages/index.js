'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('/Users/lionel/Code/nextjs-sample/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _link = require('/Users/lionel/Code/nextjs-sample/node_modules/next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _head = require('/Users/lionel/Code/nextjs-sample/node_modules/next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'ul',
    { className: styles.nav },
    _react2.default.createElement(
      _head2.default,
      null,
      _react2.default.createElement('link', { rel: 'stylesheet', href: 'static/styles.css' })
    ),
    _react2.default.createElement(
      'li',
      null,
      _react2.default.createElement(
        _link2.default,
        { href: '/blog?id=first', as: '/blog/first' },
        _react2.default.createElement(
          'a',
          null,
          'My first blog post'
        )
      )
    ),
    _react2.default.createElement(
      'li',
      null,
      _react2.default.createElement(
        _link2.default,
        { href: '/blog?id=second', as: '/blog/second' },
        _react2.default.createElement(
          'a',
          null,
          'My second blog post'
        )
      )
    ),
    _react2.default.createElement(
      'li',
      null,
      _react2.default.createElement(
        _link2.default,
        { href: '/blog?id=last', as: '/blog/last' },
        _react2.default.createElement(
          'a',
          null,
          'My last blog post'
        )
      )
    )
  );
};

var styles = {
  nav: 'pages_index_js_entry-styles-nav'
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbInN0eWxlcyIsIm5hdiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztrQkFFZTtBQUFBLFNBQ2I7QUFBQTtBQUFBLE1BQUksV0FBWUEsT0FBT0MsR0FBdkI7QUFFRTtBQUFBO0FBQUE7QUFDRSw4Q0FBTSxLQUFJLFlBQVYsRUFBdUIsTUFBSyxtQkFBNUI7QUFERixLQUZGO0FBS0U7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLFVBQU0sTUFBSyxnQkFBWCxFQUE0QixJQUFHLGFBQS9CO0FBQTZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBN0M7QUFBSixLQUxGO0FBTUU7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLFVBQU0sTUFBSyxpQkFBWCxFQUE2QixJQUFHLGNBQWhDO0FBQStDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBL0M7QUFBSixLQU5GO0FBT0U7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLFVBQU0sTUFBSyxlQUFYLEVBQTJCLElBQUcsWUFBOUI7QUFBMkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEzQztBQUFKO0FBUEYsR0FEYTtBQUFBLEM7O0FBWWYsSUFBTUQ7QUFBQTtBQUFBLENBQU4iLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2xpb25lbC9Db2RlL25leHRqcy1zYW1wbGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPHVsIGNsYXNzTmFtZT17IHN0eWxlcy5uYXYgfT5cblxuICAgIDxIZWFkPlxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJzdGF0aWMvc3R5bGVzLmNzc1wiIC8+XG4gICAgPC9IZWFkPlxuICAgIDxsaT48TGluayBocmVmPScvYmxvZz9pZD1maXJzdCcgYXM9Jy9ibG9nL2ZpcnN0Jz48YT5NeSBmaXJzdCBibG9nIHBvc3Q8L2E+PC9MaW5rPjwvbGk+XG4gICAgPGxpPjxMaW5rIGhyZWY9Jy9ibG9nP2lkPXNlY29uZCcgYXM9Jy9ibG9nL3NlY29uZCc+PGE+TXkgc2Vjb25kIGJsb2cgcG9zdDwvYT48L0xpbms+PC9saT5cbiAgICA8bGk+PExpbmsgaHJlZj0nL2Jsb2c/aWQ9bGFzdCcgYXM9Jy9ibG9nL2xhc3QnPjxhPk15IGxhc3QgYmxvZyBwb3N0PC9hPjwvTGluaz48L2xpPlxuICA8L3VsPlxuKVxuXG5jb25zdCBzdHlsZXMgPSBjc3NJbkpTKHtcbiAgbmF2OiB7XG4gICAgY29sb3I6IFwib3JhbmdlcmVkXCIsXG4gICAgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIlxuICB9XG59KVxuXG5cbiJdfQ==