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

var FaFileTextO = function (_React$Component) {
    _inherits(FaFileTextO, _React$Component);

    function FaFileTextO() {
        _classCallCheck(this, FaFileTextO);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaFileTextO).apply(this, arguments));
    }

    _createClass(FaFileTextO, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35.62428571428572 8.482857142857142q0.6257142857142881 0.6257142857142863 1.0714285714285694 1.6971428571428575t0.4471428571428575 1.9628571428571426v25.71428571428572q0 0.894285714285715-0.6257142857142881 1.518571428571427t-1.5171428571428578 0.6242857142857119h-30q-0.8928571428571432 0-1.5171428571428573-0.6242857142857119t-0.6257142857142854-1.518571428571427v-35.714285714285715q0-0.890000000000003 0.6257142857142859-1.5142857142857173t1.517142857142857-0.6285714285714286h20q0.8928571428571423 0 1.9642857142857153 0.44857142857142857t1.6971428571428575 1.0714285714285714z m-9.910000000000004-5.447142857142857v8.392857142857142h8.392857142857146q-0.2228571428571442-0.647142857142855-0.4914285714285711-0.9142857142857128l-6.9857142857142875-6.988571428571429q-0.2671428571428578-0.2671428571428569-0.9142857142857146-0.49142857142857155z m8.57142857142857 34.10714285714286v-22.85714285714286h-9.285714285714285q-0.8928571428571423 1.7763568394002505e-15-1.5171428571428578-0.6257142857142846t-0.6257142857142846-1.5171428571428578v-9.285714285714285h-17.142857142857142v34.28571428571428h28.57142857142857z m-22.857142857142854-19.28571428571429q-1.7763568394002505e-15-0.31428571428571317 0.1999999999999975-0.514285714285716t0.5142857142857142-0.1999999999999993h15.714285714285715q0.31428571428571317 0 0.514285714285716 0.1999999999999993t0.1999999999999993 0.5142857142857125v1.428571428571427q0 0.31428571428571317-0.1999999999999993 0.514285714285716t-0.5142857142857125 0.1999999999999993h-15.714285714285715q-0.31428571428571495 0-0.5142857142857142-0.1999999999999993t-0.20000000000000284-0.5142857142857125v-1.428571428571427z m16.428571428571427 5q0.31428571428571317 0 0.514285714285716 0.1999999999999993t0.1999999999999993 0.5142857142857125v1.428571428571427q0 0.31428571428571317-0.1999999999999993 0.514285714285716t-0.5142857142857125 0.1999999999999993h-15.714285714285715q-0.31428571428571495 0-0.5142857142857142-0.1999999999999993t-0.20000000000000284-0.5142857142857125v-1.428571428571427q0-0.31428571428571317 0.1999999999999993-0.514285714285716t0.5142857142857142-0.1999999999999993h15.714285714285715z m0 5.714285714285715q0.31428571428571317 0 0.514285714285716 0.1999999999999993t0.1999999999999993 0.5142857142857125v1.428571428571427q0 0.31428571428571317-0.1999999999999993 0.514285714285716t-0.5142857142857125 0.1999999999999993h-15.714285714285715q-0.31428571428571495 0-0.5142857142857142-0.1999999999999993t-0.20000000000000284-0.5142857142857125v-1.428571428571427q0-0.31428571428571317 0.1999999999999993-0.514285714285716t0.5142857142857142-0.1999999999999993h15.714285714285715z' })
                )
            );
        }
    }]);

    return FaFileTextO;
}(React.Component);

exports.default = FaFileTextO;