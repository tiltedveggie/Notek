"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
const router = (0, _express.Router)();
router.get('/', (_req, res) => {
  res.render('about');
});
var _default = router;
exports.default = _default;