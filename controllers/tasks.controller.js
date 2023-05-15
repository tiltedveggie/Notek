"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleDoneTask = exports.renderEditTask = exports.getTasks = exports.editTask = exports.deleteTask = exports.addTask = void 0;
require("core-js/modules/es.promise.js");
var _Task = _interopRequireDefault(require("../models/Task"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const getTasks = async () => {
  const tasks = await _Task.default.find({}).lean();
  return tasks;
};
exports.getTasks = getTasks;
const addTask = async (req, res) => {
  try {
    const task = new _Task.default(req.body);
    await task.save();
  } catch (err) {
    console.log(err);
  }
  res.redirect('/');
};
exports.addTask = addTask;
const renderEditTask = async (req, res) => {
  try {
    const task = await _Task.default.findById(req.params['id']).lean();
    return res.render('edit', {
      task
    });
  } catch (err) {
    console.log(err);
  }
};
exports.renderEditTask = renderEditTask;
const editTask = async (req, res) => {
  const {
    id
  } = req.params;
  await _Task.default.findByIdAndUpdate(id, req.body);
  res.redirect('/');
};
exports.editTask = editTask;
const deleteTask = async (req, res) => {
  const {
    id
  } = req.params;
  await _Task.default.findByIdAndDelete(id);
  res.redirect('/');
};
exports.deleteTask = deleteTask;
const toggleDoneTask = async (req, res) => {
  const {
    id
  } = req.params;
  const task = await _Task.default.findById(id);
  task && (task.done = !task.done);
  await (task === null || task === void 0 ? void 0 : task.save());
  res.redirect('/');
};
exports.toggleDoneTask = toggleDoneTask;