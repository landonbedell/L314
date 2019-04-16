/* Copyright (c) 2017, Art Compiler LLC */
/* @flow */
import {
  assert,
  message,
  messages,
  reserveCodeRange,
  decodeID,
  encodeID,
} from "./share.js";
import * as d3 from "d3";
import ViewParser from "./view/ViewParser"

window.gcexports.viewer = (function () {
  return {
    Viewer: ViewParser,
  };
})();
