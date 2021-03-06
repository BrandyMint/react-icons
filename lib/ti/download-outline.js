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

var TiDownloadOutline = function (_React$Component) {
    _inherits(TiDownloadOutline, _React$Component);

    function TiDownloadOutline() {
        _classCallCheck(this, TiDownloadOutline);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiDownloadOutline).apply(this, arguments));
    }

    _createClass(TiDownloadOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm34.97666666666667 28.333333333333336c0-0.1750000000000007-0.006666666666667709-0.3500000000000014-0.06333333333333258-0.5266666666666673l-3.333333333333332-10c-0.22666666666666657-0.6833333333333336-0.8599999999999994-1.1400000000000006-1.5800000000000018-1.1400000000000006h-0.9333333333333336l1.1333333333333329-1.1300000000000008c1.9499999999999993-1.9499999999999993 1.9499999999999993-5.119999999999999 0-7.07-1.3500000000000014-1.3533333333333335-3.4450000000000003-1.7966666666666669-5.199999999999999-1.1833333333333336v-2.283333333333333c0-2.756666666666667-2.2433333333333323-5-5-5s-5 2.2433333333333336-5 5v2.283333333333333c-1.7533333333333339-0.6133333333333333-3.8499999999999996-0.16999999999999993-5.199999999999999 1.1833333333333336-1.9500000000000002 1.9499999999999993-1.9500000000000002 5.119999999999999 0 7.073333333333332l1.1333333333333329 1.1266666666666652h-0.9333333333333336c-0.7200000000000006 0-1.3533333333333335 0.45833333333333215-1.58 1.1400000000000006l-3.333333333333334 10c-0.05666666666666664 0.1750000000000007-0.06333333333333346 0.3500000000000014-0.06333333333333346 0.5266666666666673-0.02333333333333254 3.552713678800501e-15-0.02333333333333254 8.33333333333334-0.02333333333333254 8.33333333333334 0 0.9216666666666669 0.7450000000000001 1.6666666666666643 1.666666666666667 1.6666666666666643h26.666666666666668c0.9216666666666669 0 1.6666666666666643-0.7449999999999974 1.6666666666666643-1.6666666666666643 0 0 0-8.333333333333336-0.023333333333333428-8.333333333333336z m-22.821666666666665-17.51c0.31666666666666643-0.3116666666666674 0.7333333333333343-0.4883333333333333 1.1783333333333328-0.4883333333333333s0.8633333333333333 0.1750000000000007 1.1783333333333328 0.4900000000000002l3.821666666666669 3.8200000000000003v-9.645000000000001c0-0.9199999999999999 0.7466666666666661-1.666666666666667 1.6666666666666679-1.666666666666667s1.6666666666666679 0.746666666666667 1.6666666666666679 1.666666666666667v9.645l3.8216666666666654-3.821666666666667c0.6333333333333329-0.6283333333333339 1.7250000000000014-0.6283333333333339 2.3566666666666656 0 0.6499999999999986 0.6500000000000004 0.6499999999999986 1.705 0.0033333333333338544 2.3533333333333335l-7.848333333333336 7.806666666666668-7.844999999999999-7.803333333333333c-0.6500000000000004-0.6466666666666665-0.6500000000000004-1.706666666666667 0-2.3566666666666674z m-0.9550000000000018 9.176666666666666h3.088333333333333l5.716666666666667 5.683333333333334 5.71166666666667-5.683333333333334h3.086666666666666l2.7783333333333324 8.333333333333336h-23.15833333333333l2.7766666666666655-8.333333333333336z m20.46666666666667 15h-23.333333333333336v-5h23.33333333333334v5z' })
                )
            );
        }
    }]);

    return TiDownloadOutline;
}(React.Component);

exports.default = TiDownloadOutline;