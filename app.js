"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _dotenv = _interopRequireDefault(require("dotenv"));
var _express = _interopRequireDefault(require("express"));
var _expressHandlebars = require("express-handlebars");
var _cors = _interopRequireDefault(require("cors"));
var _path = _interopRequireDefault(require("path"));
var _index = _interopRequireDefault(require("./routes/index.routes"));
var _tasks = _interopRequireDefault(require("./routes/tasks.routes"));
var _about = _interopRequireDefault(require("./routes/about.routes"));
var _database = _interopRequireDefault(require("./database"));
var _morgan = _interopRequireDefault(require("morgan"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_dotenv.default.config();
(0, _database.default)();
// ---------------------------------------------------------

const app = (0, _express.default)();
app.use((0, _cors.default)());
app.use(_express.default.json());
app.use(_express.default.urlencoded({
  extended: false
}));
app.use((0, _morgan.default)('dev'));

// ---------------------------------------------------------

app.set('views', _path.default.join(__dirname, 'views'));
app.engine('.hbs', (0, _expressHandlebars.engine)({
  layoutsDir: _path.default.join(app.get('views'), 'layouts'),
  partialsDir: _path.default.join(app.get('views'), 'partials'),
  defaultLayout: 'main',
  extname: '.hbs'
}));
app.set('view engine', '.hbs');

// ---------------------------------------------------------

app.use('/', _index.default);
app.use('/tasks', _tasks.default);
app.use('/about', _about.default);

// ---------------------------------------------------------
var _default = app;
exports.default = _default;