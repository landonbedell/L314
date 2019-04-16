"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _PieChart = require("./pie_chart/PieChart");

var _PieChart2 = _interopRequireDefault(_PieChart);

var _d = require("d3");

var d3 = _interopRequireWildcard(_d);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ViewParser = function (_Component) {
  _inherits(ViewParser, _Component);

  function ViewParser() {
    _classCallCheck(this, ViewParser);

    return _possibleConstructorReturn(this, (ViewParser.__proto__ || Object.getPrototypeOf(ViewParser)).apply(this, arguments));
  }

  _createClass(ViewParser, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      d3.select("#graff-view").append("div").classed("done-rendering", true);
    }
  }, {
    key: "render",
    value: function render() {
      var props = this.props;
      var obj = props.obj ? [].concat(props.obj) : [];

      var elements = obj.map(function (d, i) {
        switch (d.type) {
          case "pie":
            return _react2.default.createElement(_PieChart2.default, {
              key: i,
              title: d.name,
              slices: d.slices,
              width: d.width,
              height: d.height,
              donut: d.donut
            });
          default:
            var style = Object.assign({}, d.style);
            var val = d.value || d;
            if (val instanceof Array) {
              val = val.join(" ");
            } else if (!["string", "number", "boolean"].includes(typeof val === "undefined" ? "undefined" : _typeof(val))) {
              val = JSON.stringify(val);
            }
            return _react2.default.createElement(
              "span",
              { key: i, style: style },
              val
            );
        }
      });

      if (elements.length > 0) {
        return _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement("link", { rel: "stylesheet", href: "/L314/style.css" }),
          _react2.default.createElement(
            "div",
            { className: "L314" },
            elements
          )
        );
      } else {
        return _react2.default.createElement("div", null);
      }
    }
  }]);

  return ViewParser;
}(_react.Component);

exports.default = ViewParser;