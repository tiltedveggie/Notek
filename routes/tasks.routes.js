"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _tasks = require("../controllers/tasks.controller");
const router = (0, _express.Router)();
router.post('/add', _tasks.addTask);
router.get('/edit/:id', _tasks.renderEditTask);
router.post('/edit/:id', _tasks.editTask);
router.get('/toggleDone/:id', _tasks.toggleDoneTask);
router.get('/delete/:id', _tasks.deleteTask);
var _default = router;
exports.default = _default;