import React, { Component } from 'react';
import * as d3 from "d3";
import { scaleOrdinal } from 'd3-scale';
import { arc as d3Arc, pie as d3Pie } from 'd3-shape';

class Slice extends Component {
	constructor(props) {
		super(props);

		this.arc = d3Arc()
			.outerRadius(this.props.outerRadius)
			.innerRadius(this.props.innerRadius);

		this.state = {
			d: props.d,
			path: this.arc(props.d)
		}
	}

	arcTween(oldData, newData, arc) {
	    const copy = Object.assign({}, oldData);
	    return () => {
	        const interpolateStartAngle = d3.interpolate(
	                oldData.startAngle,
	                newData.startAngle
	            ),
	            interpolateEndAngle = d3.interpolate(
	                oldData.endAngle,
	                newData.endAngle
	            );
	        return (t) => {
	            copy.startAngle = interpolateStartAngle(t);
	            copy.endAngle = interpolateEndAngle(t);
	            return arc(copy);
	        };
	    };
	}

	componentWillReceiveProps(newProps) {
		this.setState({
			d: newProps.d,
			path: this.arc(newProps.d)
		});
		// d3.select(this.refs.elem)
		// .transition()
		// .duration(1000)
		// .attrTween("d", this.arcTween(this.state.d, newProps.d, this.arc))
		// .on("end", () => {
		// 	console.log('setting state');
		// 	this.setState({
		// 		d: newProps.d,
		// 		path: this.arc(newProps.d)
		// 	})
		// })
	}

	render() {
      	return (
	      	<g className="arc">
	            <path d={this.state.path} fill={this.props.color} ref="elem"/>
	            <text transform={`translate(${this.arc.centroid(this.state.d)})`} dy=".35em">
	            	{this.state.d.data.name}
	            </text>
	      	</g>
      	);
	}
}

class PieChart extends Component {
	constructor(props) {
		super(props);

		this.pie = d3Pie()
		  	.sort(null)
		  	.value((d) => {
		    	return d.value;
		  	});

		this.state = {
			slices: props.slices,
			data: this.pie(props.slices)
		}
	}

	componentWillReceiveProps(newProps) {
		this.setState({
			slices: newProps.slices,
			data: this.pie(newProps.slices)
		});
	}

/*	nextFrame() {
		console.log('next frame');
		const newSlices = this.state.slices.map((slice) => {
			slice.value = 1;
			return slice;
		})
		this.setState({slices: newSlices});
	}*/

	render() {
		const {width, height, donut} = this.props;
	  	const radius = Math.min(width, height) / 2 - 1;
		const style = {
			width: "fit-content",
			textAlign: "center"
		};

		return (
			<div className="PieChart" style={style}>
				<h3 className="title"> {this.props.title} </h3>
			    <svg width={width} height={height}>
			      	<g transform={`translate(${width / 2}, ${height / 2})`}>
				        {this.state.data.map(d => (
				          	<Slice 
				          		key={`a${d.data.name}`}
				          		d={d} 
				          		color={d.data.color}
				          		outerRadius={radius - 10} 
				          		innerRadius={donut ? radius - 70: 0}
				          	/>
				        ))}
			      	</g>
			    </svg>
				{/*<button onClick={this.nextFrame}>Next</button>*/}
			</div>
	  	);
	}
}

export default PieChart;