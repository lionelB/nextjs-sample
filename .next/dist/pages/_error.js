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

var _style = require('/Users/lionel/Code/nextjs-sample/node_modules/styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('/Users/lionel/Code/nextjs-sample/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _head = require('/Users/lionel/Code/nextjs-sample/node_modules/next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Error = function (_React$Component) {
  (0, _inherits3.default)(Error, _React$Component);

  function Error() {
    (0, _classCallCheck3.default)(this, Error);
    return (0, _possibleConstructorReturn3.default)(this, (Error.__proto__ || (0, _getPrototypeOf2.default)(Error)).apply(this, arguments));
  }

  (0, _createClass3.default)(Error, [{
    key: 'render',
    value: function render() {
      var statusCode = this.props.statusCode;

      var title = statusCode === 404 ? 'This page could not be found' : statusCode ? 'Internal Server Error' : 'An unexpected error has occurred';

      return _react2.default.createElement(
        'div',
        { className: 'error', 'data-jsx': 676398231
        },
        _react2.default.createElement(
          _head2.default,
          null,
          _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0', 'data-jsx': 676398231
          })
        ),
        _react2.default.createElement(
          'div',
          {
            'data-jsx': 676398231
          },
          statusCode ? _react2.default.createElement(
            'h1',
            {
              'data-jsx': 676398231
            },
            statusCode
          ) : null,
          _react2.default.createElement(
            'div',
            { className: 'desc', 'data-jsx': 676398231
            },
            _react2.default.createElement(
              'h2',
              {
                'data-jsx': 676398231
              },
              title,
              '.'
            )
          )
        ),
        _react2.default.createElement(_style2.default, {
          styleId: 3608526279,
          css: '\n        body { margin: 0 }\n      '
        }),
        _react2.default.createElement(_style2.default, {
          styleId: 965400277,
          css: '.error[data-jsx="676398231"] {color: #000;background: #fff;font-family: -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif;height: 100vh;text-align: center;display:-webkit-flex; display:flex;-webkit-flex-direction: column;-moz-flex-direction: column;flex-direction: column;align-items: center;justify-content: center;}.desc[data-jsx="676398231"] {display: inline-block;text-align: left;line-height: 49px;height: 49px;vertical-align: middle;}h1[data-jsx="676398231"] {display: inline-block;border-right: 1px solid rgba(0, 0, 0,.3);margin: 0;margin-right: 20px;padding: 10px 23px 10px 0;font-size: 24px;font-weight: 500;vertical-align: top;}h2[data-jsx="676398231"] {font-size: 14px;font-weight: normal;margin: 0;padding: 0;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvcGFnZXMvX2Vycm9yLmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRCa0IsQUFDRiw4QkFDTSxZQUNLLGlCQUNzSCx1SUFDekgsY0FDSyxtQkFDTCxtQ0FDUyxrRkFDSCxvQkFDSSx3QkFDekIsQ0FFTSw2QkFDaUIsc0JBQ0wsaUJBQ0Msa0JBQ0wsYUFDVSx1QkFDeEIsQ0FFRywwQkFDb0Isc0JBQ21CLHlDQUMvQixVQUNTLG1CQUNPLDBCQUNWLGdCQUNDLGlCQUNHLG9CQUNyQixDQUVHLDBCQUNjLGdCQUNJLG9CQUNWLFVBQ0MsV0FDWiIsImZpbGUiOiJub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19lcnJvci5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbGlvbmVsL0NvZGUvbmV4dGpzLXNhbXBsZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXJyb3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzICh7IHJlcywgeGhyIH0pIHtcbiAgICBjb25zdCBzdGF0dXNDb2RlID0gcmVzID8gcmVzLnN0YXR1c0NvZGUgOiAoeGhyID8geGhyLnN0YXR1cyA6IG51bGwpXG4gICAgcmV0dXJuIHsgc3RhdHVzQ29kZSB9XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgc3RhdHVzQ29kZSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHRpdGxlID0gc3RhdHVzQ29kZSA9PT0gNDA0XG4gICAgICA/ICdUaGlzIHBhZ2UgY291bGQgbm90IGJlIGZvdW5kJ1xuICAgICAgOiAoc3RhdHVzQ29kZSA/ICdJbnRlcm5hbCBTZXJ2ZXIgRXJyb3InIDogJ0FuIHVuZXhwZWN0ZWQgZXJyb3IgaGFzIG9jY3VycmVkJylcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nZXJyb3InPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxtZXRhIG5hbWU9J3ZpZXdwb3J0JyBjb250ZW50PSd3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wJyAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdj5cbiAgICAgICAge3N0YXR1c0NvZGUgPyA8aDE+e3N0YXR1c0NvZGV9PC9oMT4gOiBudWxsfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGVzYyc+XG4gICAgICAgICAgPGgyPnt0aXRsZX0uPC9oMj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGJvZHkgeyBtYXJnaW46IDAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuZXJyb3Ige1xuICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgUm9ib3RvLCBcIlNlZ29lIFVJXCIsIFwiRmlyYSBTYW5zXCIsIEF2ZW5pciwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBcIkx1Y2lkYSBHcmFuZGVcIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kZXNjIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogNDlweDtcbiAgICAgICAgICBoZWlnaHQ6IDQ5cHg7XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGgxIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLC4zKTtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjNweCAxMHB4IDA7XG4gICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgfVxuXG4gICAgICAgIGgyIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICB9XG59XG4iXX0= */\n/*@ sourceURL=node_modules/next/dist/pages/_error.js?entry */'
        })
      );
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var res = _ref.res,
          xhr = _ref.xhr;

      var statusCode = res ? res.statusCode : xhr ? xhr.status : null;
      return { statusCode: statusCode };
    }
  }]);
  return Error;
}(_react2.default.Component);

exports.default = Error;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvcGFnZXMvX2Vycm9yLmpzP2VudHJ5Il0sIm5hbWVzIjpbIkVycm9yIiwic3RhdHVzQ29kZSIsInByb3BzIiwidGl0bGUiLCJyZXMiLCJ4aHIiLCJzdGF0dXMiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs2QkFNVDtBQUFBLFVBQ0FDLFVBREEsR0FDZSxLQUFLQyxLQURwQixDQUNBRCxVQURBOztBQUVSLFVBQU1FLFFBQVFGLGVBQWUsR0FBZixHQUNWLDhCQURVLEdBRVRBLGFBQWEsdUJBQWIsR0FBdUMsa0NBRjVDOztBQUlBLGFBQU87QUFBQTtBQUFBLFVBQUssV0FBVSxPQUFmO0FBQUE7QUFDTDtBQUFBO0FBQUE7QUFDRSxrREFBTSxNQUFLLFVBQVgsRUFBc0IsU0FBUSx1Q0FBOUI7QUFBQTtBQURGLFNBREs7QUFJTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0dBLHVCQUFhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBS0E7QUFBTCxXQUFiLEdBQXFDLElBRHhDO0FBRUU7QUFBQTtBQUFBLGNBQUssV0FBVSxNQUFmO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUtFLG1CQUFMO0FBQUE7QUFBQTtBQURGO0FBRkYsU0FKSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFQO0FBcUREOzs7MENBaEVxQztBQUFBLFVBQVpDLEdBQVksUUFBWkEsR0FBWTtBQUFBLFVBQVBDLEdBQU8sUUFBUEEsR0FBTzs7QUFDcEMsVUFBTUosYUFBYUcsTUFBTUEsSUFBSUgsVUFBVixHQUF3QkksTUFBTUEsSUFBSUMsTUFBVixHQUFtQixJQUE5RDtBQUNBLGFBQU8sRUFBRUwsc0JBQUYsRUFBUDtBQUNEOzs7RUFKZ0MsZ0JBQU1NLFM7O2tCQUFwQlAsSyIsImZpbGUiOiJfZXJyb3IuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2xpb25lbC9Db2RlL25leHRqcy1zYW1wbGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVycm9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyAoeyByZXMsIHhociB9KSB7XG4gICAgY29uc3Qgc3RhdHVzQ29kZSA9IHJlcyA/IHJlcy5zdGF0dXNDb2RlIDogKHhociA/IHhoci5zdGF0dXMgOiBudWxsKVxuICAgIHJldHVybiB7IHN0YXR1c0NvZGUgfVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IHN0YXR1c0NvZGUgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB0aXRsZSA9IHN0YXR1c0NvZGUgPT09IDQwNFxuICAgICAgPyAnVGhpcyBwYWdlIGNvdWxkIG5vdCBiZSBmb3VuZCdcbiAgICAgIDogKHN0YXR1c0NvZGUgPyAnSW50ZXJuYWwgU2VydmVyIEVycm9yJyA6ICdBbiB1bmV4cGVjdGVkIGVycm9yIGhhcyBvY2N1cnJlZCcpXG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J2Vycm9yJz5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0nd2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCcgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXY+XG4gICAgICAgIHtzdGF0dXNDb2RlID8gPGgxPntzdGF0dXNDb2RlfTwvaDE+IDogbnVsbH1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Rlc2MnPlxuICAgICAgICAgIDxoMj57dGl0bGV9LjwvaDI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBib2R5IHsgbWFyZ2luOiAwIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmVycm9yIHtcbiAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFJvYm90bywgXCJTZWdvZSBVSVwiLCBcIkZpcmEgU2Fuc1wiLCBBdmVuaXIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgXCJMdWNpZGEgR3JhbmRlXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuZGVzYyB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDQ5cHg7XG4gICAgICAgICAgaGVpZ2h0OiA0OXB4O1xuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIH1cblxuICAgICAgICBoMSB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwuMyk7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIzcHggMTBweCAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgIH1cblxuICAgICAgICBoMiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgfVxufVxuIl19