"use strict";

var _share = require("./share.js");

var _react = require("react");

var React = _interopRequireWildcard(_react);

var _d = require("d3");

var d3 = _interopRequireWildcard(_d);

var _PieChart = require("./pie_chart/PieChart");

var _PieChart2 = _interopRequireDefault(_PieChart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/* Copyright (c) 2017, Art Compiler LLC */
window.gcexports.viewer = function () {
  var Viewer = React.createClass({
    displayName: "Viewer",

    componentDidMount: function componentDidMount() {
      d3.select("#graff-view").append("div").classed("done-rendering", true);
    },
    render: function render() {
      // If you have nested components, make sure you send the props down to the
      // owned components.
      var props = this.props;
      var obj = props.obj ? [].concat(props.obj) : [];
      var elements = obj.map(function (d, i) {
        switch (d.type) {
          case "pie":
            return React.createElement(_PieChart2.default, { key: i, slices: d.slices });
          default:
            var style = Object.assign({}, d.style);
            var val = d.value || d;
            if (val instanceof Array) {
              val = val.join(" ");
            } else if (typeof val !== "string" && typeof val !== "number" && typeof val !== "boolean") {
              val = JSON.stringify(val);
            }
            return React.createElement(
              "span",
              { key: i, style: style },
              val
            );
        }
      });
      if (elements.length > 0) {
        return React.createElement(
          "div",
          null,
          React.createElement("link", { rel: "stylesheet", href: "/L314/style.css" }),
          React.createElement(
            "div",
            { className: "L314" },
            elements
          )
        );
      } else {
        return React.createElement("div", null);
      }
    }
  });
  return {
    Viewer: Viewer
  };
}();