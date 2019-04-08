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
import * as React from "react";
import * as d3 from "d3";
import PieChart from "./pie_chart/PieChart"
window.gcexports.viewer = (function () {
  let Viewer = React.createClass({
    componentDidMount: function() {
      d3.select("#graff-view").append("div").classed("done-rendering", true);
    },
    render: function () {
      // If you have nested components, make sure you send the props down to the
      // owned components.
      let props = this.props;
      let obj = props.obj ? [].concat(props.obj) : [];
      let elements = obj.map((d, i) => {
        switch (d.type) {
          case "pie":
            return <PieChart key={i} slices={d.slices}/>
          default:
            let style = Object.assign({}, d.style);
            let val = d.value || d;
            if (val instanceof Array) {
              val = val.join(" ");
            } else if (typeof val !== "string" &&
                       typeof val !== "number" &&
                       typeof val !== "boolean") {
              val = JSON.stringify(val);
            }
            return <span key={i} style={style}>{val}</span>;
        } 
      });
      if (elements.length > 0) {
        return (
          <div>
            <link rel="stylesheet" href="/L314/style.css" />
            <div className="L314">
            {elements}
          </div>
          </div>
        );
      } else {
        return <div/>;
      }
    },
  });
  return {
    Viewer: Viewer,
  };
})();
