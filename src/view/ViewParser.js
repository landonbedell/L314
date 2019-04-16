import React, { Component } from 'react';
import PieChart from "./pie_chart/PieChart"
import * as d3 from "d3";

class ViewParser extends Component {
	componentDidMount() {
      d3.select("#graff-view").append("div").classed("done-rendering", true);
    }

    render() {
      let props = this.props;
      let obj = props.obj ? [].concat(props.obj) : [];

      let elements = obj.map((d, i) => {
        switch (d.type) {
          case "pie":
            return <PieChart 
              key={i} 
              title={d.name} 
              slices={d.slices} 
              width={d.width} 
              height={d.height}
              donut={d.donut}
            />
          default:
            let style = Object.assign({}, d.style);
            let val = d.value || d;
            if (val instanceof Array) {
              val = val.join(" ");
            } else if (!["string", "number", "boolean"].includes(typeof val)) {
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
    }
}

export default ViewParser;