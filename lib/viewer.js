"use strict";

var _share = require("./share.js");

var _d = require("d3");

var d3 = _interopRequireWildcard(_d);

var _ViewParser = require("./view/ViewParser");

var _ViewParser2 = _interopRequireDefault(_ViewParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

window.gcexports.viewer = function () {
  return {
    Viewer: _ViewParser2.default
  };
}(); /* Copyright (c) 2017, Art Compiler LLC */