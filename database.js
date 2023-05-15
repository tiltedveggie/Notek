"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.promise.js");
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const db = async () => {
  try {
    var _process$env;
    await _mongoose.default.connect(((_process$env = process.env) === null || _process$env === void 0 ? void 0 : _process$env['DB_URL']) || '');
  } catch (err) {
    console.log(err);
  }
};
var _default = db;
exports.default = _default;