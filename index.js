"use strict";

var _app = _interopRequireDefault(require("./app"));
var _process$env;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_app.default.listen(((_process$env = process.env) === null || _process$env === void 0 ? void 0 : _process$env['APP_PORT']) || 3300, () => {
  console.log('Connected to backend!');
});