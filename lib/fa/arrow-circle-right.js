'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var FaArrowCircleRight = function (_React$Component) {
    _inherits(FaArrowCircleRight, _React$Component);

    function FaArrowCircleRight() {
        _classCallCheck(this, FaArrowCircleRight);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaArrowCircleRight).apply(this, arguments));
    }

    _createClass(FaArrowCircleRight, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.54 20q0-0.6028571428571432-0.3999999999999986-1.0042857142857144l-10.114285714285714-10.111428571428572q-0.3999999999999986-0.40285714285714214-1.0028571428571418-0.40285714285714214t-1.0042857142857144 0.40000000000000036l-2.032857142857143 2.0357142857142865q-0.3999999999999986 0.40285714285714214-0.3999999999999986 1.0057142857142853t0.3999999999999986 1.0042857142857144l4.2214285714285715 4.215714285714284h-11.207142857142859q-0.5800000000000001 0-1.0042857142857144 0.4242857142857126t-0.4242857142857144 1.004285714285718v2.8571428571428577q0 0.5799999999999983 0.4242857142857144 1.0042857142857144t1.0042857142857144 0.4242857142857126h11.205714285714286l-4.219999999999999 4.218571428571426q-0.4228571428571435 0.4242857142857126-0.4228571428571435 1.0042857142857144t0.4242857142857126 1.0042857142857144l2.032857142857143 2.0285714285714285q0.3999999999999986 0.4028571428571439 1.0042857142857144 0.4028571428571439t1.0042857142857144-0.3999999999999986l10.11-10.114285714285714q0.3999999999999986-0.3999999999999986 0.3999999999999986-1.0028571428571418z m5.602857142857147 0q0 4.665714285714287-2.299999999999997 8.604285714285716t-6.237142857142857 6.238571428571426-8.605714285714292 2.3000000000000043-8.6-2.3000000000000043-6.242857142857143-6.238571428571426-2.295714285714286-8.604285714285716 2.3000000000000003-8.604285714285714 6.234285714285714-6.238571428571428 8.604285714285714-2.3000000000000003 8.605714285714285 2.3000000000000003 6.238571428571426 6.238571428571428 2.298571428571435 8.604285714285714z' })
                )
            );
        }
    }]);

    return FaArrowCircleRight;
}(React.Component);

exports.default = FaArrowCircleRight;