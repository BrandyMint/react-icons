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

var TiWeatherWindyCloudy = function (_React$Component) {
    _inherits(TiWeatherWindyCloudy, _React$Component);

    function TiWeatherWindyCloudy() {
        _classCallCheck(this, TiWeatherWindyCloudy);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiWeatherWindyCloudy).apply(this, arguments));
    }

    _createClass(TiWeatherWindyCloudy, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm7.996666666666667 26.25c-0.2233333333333336 0-0.4500000000000002-0.043333333333333-0.666666666666667-0.14000000000000057-2.4299999999999997-1.0666666666666664-3.9966666666666666-3.4599999999999973-3.9966666666666666-6.109999999999999 0-3.1000000000000014 2.1283333333333334-5.716666666666667 5-6.456666666666667v-0.20999999999999908c0-5.516666666666667 4.4833333333333325-10 10.000000000000002-10 4.886666666666667 0 9.021666666666668 3.506666666666667 9.836666666666666 8.333333333333334 0.15333333333333243 0.9083333333333332-0.45833333333333215 1.7699999999999996-1.3666666666666671 1.9216666666666669-0.9066666666666663 0.13833333333333364-1.7666666666666657-0.46000000000000085-1.9200000000000017-1.3666666666666671-0.543333333333333-3.2166666666666686-3.3000000000000007-5.555000000000001-6.549999999999997-5.555000000000001-3.6766666666666676 0-6.666666666666668 2.9899999999999993-6.666666666666668 6.666666666666667 0 0.45333333333333314 0.04499999999999993 0.9100000000000001 0.13333333333333286 1.3533333333333335l0.43333333333333357 2.116666666666667-2.383333333333333-0.14666666666666828c-1.6900000000000013 0.010000000000001563-3.1833333333333345 1.5050000000000026-3.1833333333333345 3.3433333333333337 0 1.3249999999999993 0.7833333333333332 2.5249999999999986 2.000000000000001 3.0566666666666684 0.8433333333333337 0.370000000000001 1.2266666666666666 1.3533333333333353 0.8583333333333343 2.1950000000000003-0.27333333333333343 0.6266666666666652-0.8833333333333329 1-1.5283333333333333 1z m23.67-14.583333333333332c-0.9216666666666669 0-1.6666666666666679 0.7449999999999992-1.6666666666666679 1.666666666666666s0.745000000000001 1.666666666666666 1.6666666666666679 1.666666666666666c0.9199999999999982 0 1.6666666666666679 0.7466666666666661 1.6666666666666679 1.6666666666666679s-0.7466666666666697 1.6666666666666679-1.6666666666666679 1.6666666666666679h-16c-0.9216666666666669 0-1.666666666666666 0.745000000000001-1.666666666666666 1.6666666666666679s0.7449999999999992 1.6666666666666679 1.666666666666666 1.6666666666666679h7.666666666666668c0.9200000000000017 0 1.6666666666666679 0.7466666666666661 1.6666666666666679 1.6666666666666679s-0.7466666666666661 1.6666666666666679-1.6666666666666679 1.6666666666666679h-8.333333333333336c-2.7566666666666677 0-5 2.2433333333333323-5 5s2.243333333333334 5 5 5c0.9216666666666669 0 1.6666666666666679-0.7449999999999974 1.6666666666666679-1.6666666666666643s-0.7449999999999992-1.6666666666666679-1.666666666666666-1.6666666666666679c-0.9199999999999999 0-1.666666666666666-0.7466666666666661-1.666666666666666-1.6666666666666679s0.7466666666666661-1.6666666666666679 1.666666666666666-1.6666666666666679h8.333333333333334c2.7566666666666677 0 5-2.2433333333333323 5-5 0-0.5883333333333347-0.120000000000001-1.1433333333333344-0.30833333333333357-1.6666666666666679h3.6416666666666657c2.756666666666664 0 5.0000000000000036-2.2433333333333323 5.0000000000000036-5s-2.2433333333333323-5-5-5z' })
                )
            );
        }
    }]);

    return TiWeatherWindyCloudy;
}(React.Component);

exports.default = TiWeatherWindyCloudy;