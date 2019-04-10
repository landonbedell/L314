'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _d3Scale = require('d3-scale');

var _d3Shape = require('d3-shape');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PieChart(props) {
	var width = 400,
	    height = 300,
	    radius = Math.min(width, height) / 2 - 1;

	var arc = (0, _d3Shape.arc)().outerRadius(radius - 10).innerRadius(radius - 70);

	var pie = (0, _d3Shape.pie)().sort(null).value(function (d) {
		return d.value;
	});

	var data = pie(props.slices);

	var style = {
		width: "fit-content",
		textAlign: "center"
	};

	return _react2.default.createElement(
		'div',
		{ className: 'PieChart', style: style },
		_react2.default.createElement(
			'h3',
			{ className: 'title' },
			' ',
			props.title,
			' '
		),
		_react2.default.createElement(
			'svg',
			{ width: width, height: height },
			_react2.default.createElement(
				'g',
				{ transform: 'translate(' + width / 2 + ', ' + height / 2 + ')' },
				console.log('DATA', data) || data.map(function (d) {
					return _react2.default.createElement(
						'g',
						{ className: 'arc', key: 'a' + d.data.name },
						_react2.default.createElement('path', { d: arc(d), fill: d.data.color }),
						_react2.default.createElement(
							'text',
							{ transform: 'translate(' + arc.centroid(d) + ')', dy: '.35em' },
							d.data.name
						)
					);
				})
			)
		)
	);
}

exports.default = PieChart;