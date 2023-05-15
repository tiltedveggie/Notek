"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.promise.js");
var _express = require("express");
var _tasks = require("../controllers/tasks.controller");
const router = (0, _express.Router)();
router.get('/', async (_req, res) => {
  const tasks = await (0, _tasks.getTasks)();
  res.render('index', {
    tasks: tasks
  });
});
var _default = router;
exports.default = _default;