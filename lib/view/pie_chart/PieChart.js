'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _d = require('d3');

var d3 = _interopRequireWildcard(_d);

var _d3Scale = require('d3-scale');

var _d3Shape = require('d3-shape');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Slice = function (_Component) {
	_inherits(Slice, _Component);

	function Slice(props) {
		_classCallCheck(this, Slice);

		var _this = _possibleConstructorReturn(this, (Slice.__proto__ || Object.getPrototypeOf(Slice)).call(this, props));

		_this.arc = (0, _d3Shape.arc)().outerRadius(_this.props.outerRadius).innerRadius(_this.props.innerRadius);

		_this.state = {
			d: props.d,
			path: _this.arc(props.d)
		};
		return _this;
	}

	_createClass(Slice, [{
		key: 'arcTween',
		value: function arcTween(oldData, newData, arc) {
			var copy = Object.assign({}, oldData);
			return function () {
				var interpolateStartAngle = d3.interpolate(oldData.startAngle, newData.startAngle),
				    interpolateEndAngle = d3.interpolate(oldData.endAngle, newData.endAngle);
				return function (t) {
					copy.startAngle = interpolateStartAngle(t);
					copy.endAngle = interpolateEndAngle(t);
					return arc(copy);
				};
			};
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(newProps) {
			console.log('componentWillReceiveProps', this.refs.elem);
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
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'g',
				{ className: 'arc' },
				_react2.default.createElement('path', { d: this.state.path, fill: this.props.color, ref: 'elem' }),
				_react2.default.createElement(
					'text',
					{ transform: 'translate(' + this.arc.centroid(this.state.d) + ')', dy: '.35em' },
					this.state.d.data.name
				)
			);
		}
	}]);

	return Slice;
}(_react.Component);

var PieChart = function (_Component2) {
	_inherits(PieChart, _Component2);

	function PieChart(props) {
		_classCallCheck(this, PieChart);

		var _this2 = _possibleConstructorReturn(this, (PieChart.__proto__ || Object.getPrototypeOf(PieChart)).call(this, props));

		_this2.pie = (0, _d3Shape.pie)().sort(null).value(function (d) {
			return d.value;
		});

		_this2.state = {
			slices: props.slices,
			data: _this2.pie(props.slices)
		};
		return _this2;
	}

	_createClass(PieChart, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(newProps) {
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

	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    width = _props.width,
			    height = _props.height,
			    donut = _props.donut;

			var radius = Math.min(width, height) / 2 - 1;
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
					this.props.title,
					' '
				),
				_react2.default.createElement(
					'svg',
					{ width: width, height: height },
					_react2.default.createElement(
						'g',
						{ transform: 'translate(' + width / 2 + ', ' + height / 2 + ')' },
						this.state.data.map(function (d) {
							return _react2.default.createElement(Slice, {
								key: 'a' + d.data.name,
								d: d,
								color: d.data.color,
								outerRadius: radius - 10,
								innerRadius: donut ? radius - 70 : 0
							});
						})
					)
				)
			);
		}
	}]);

	return PieChart;
}(_react.Component);

exports.default = PieChart;