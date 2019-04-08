import React from 'react';
import { scaleOrdinal } from 'd3-scale';
import { arc as d3Arc, pie as d3Pie } from 'd3-shape';

function PieChart(props) {
	console.log('making a pie!', props)
	const width = 400,
  		height = 300,
  		radius = Math.min(width, height) / 2;

  	const color = scaleOrdinal().range([
		'#98abc5',
		'#8a89a6',
		'#7b6888',
		'#6b486b',
		'#a05d56',
		'#d0743c',
		'#ff8c00',
	]);

	const arc = d3Arc()
	  	.outerRadius(radius - 10)
	  	.innerRadius(radius - 70);

	const pie = d3Pie()
	  	.sort(null)
	  	.value((d) => {
	    	return d.value;
	  	});

	const data = pie(props.slices);


	return (
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
  	);
}

export default PieChart;