import React from 'react';
import { scaleOrdinal } from 'd3-scale';
import { arc as d3Arc, pie as d3Pie } from 'd3-shape';

function PieChart(props) {
	const {width, height, donut} = props;
  	const radius = Math.min(width, height) / 2 - 1;

	const arc = d3Arc()
	  	.outerRadius(radius - 10)
	  	.innerRadius(donut ? radius - 70: 0);

	const pie = d3Pie()
	  	.sort(null)
	  	.value((d) => {
	    	return d.value;
	  	});

	const data = pie(props.slices);

	const style = {
		width: "fit-content",
		textAlign: "center"
	};

	return (
		<div className="PieChart" style={style}>
			<h3 className="title"> {props.title} </h3>
		    <svg width={width} height={height}>
		      	<g transform={`translate(${width / 2}, ${height / 2})`}>
			        {console.log('DATA', data) || data.map(d => (
			          	<g className="arc" key={`a${d.data.name}`}>
				            <path d={arc(d)} fill={d.data.color} />
				            <text transform={`translate(${arc.centroid(d)})`} dy=".35em">
				              	{d.data.name}
				            </text>
			          	</g>
			        ))}
		      	</g>
		    </svg>
		</div>
  	);
}

export default PieChart;