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

var TiArrowSyncOutline = function (_React$Component) {
    _inherits(TiArrowSyncOutline, _React$Component);

    function TiArrowSyncOutline() {
        _classCallCheck(this, TiArrowSyncOutline);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiArrowSyncOutline).apply(this, arguments));
    }

    _createClass(TiArrowSyncOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35.833333333333336 20.788333333333334c0-4.158333333333335-1.3633333333333368-7.376666666666667-4.421666666666667-10.433333333333334-0.5166666666666657-0.5133333333333336-1.1266666666666652-0.8866666666666667-1.788333333333334-1.1333333333333329l-7.756666666666668-7.758333333333335c-0.9400000000000013-0.9466666666666662-2.1999999999999993-1.463333333333333-3.5333333333333314-1.463333333333333s-2.5916666666666686 0.52-3.533333333333333 1.4666666666666668c-0.9500000000000011 0.94-1.4666666666666686 2.2-1.4666666666666686 3.533333333333333 0 0.4616666666666669 0.061666666666667425 0.916666666666667 0.18333333333333357 1.3499999999999996-1.7166666666666668 0.7666666666666666-3.290000000000001 1.8666666666666671-4.711666666666668 3.288333333333334-2.9916666666666663 2.9883333333333333-4.638333333333333 6.961666666666668-4.638333333333333 11.195000000000002 0 4.158333333333335 1.3633333333333333 7.376666666666665 4.421666666666668 10.433333333333334 0.5 0.495000000000001 1.086666666666666 0.8666666666666636 1.7233333333333327 1.1133333333333333l7.82 7.821666666666665c0.9416666666666664 0.9466666666666654 2.1999999999999993 1.4666666666666686 3.533333333333335 1.4666666666666686s2.591666666666665-0.5200000000000031 3.533333333333335-1.4666666666666686c0.9466666666666654-0.94166666666667 1.4666666666666686-2.200000000000003 1.4666666666666686-3.5333333333333314 0-0.47666666666666657-0.06666666666666643-0.9433333333333351-0.19500000000000028-1.3900000000000006 1.7166666666666686-0.7666666666666657 3.296666666666667-1.8666666666666671 4.721666666666668-3.291666666666668 2.993333333333336-2.9883333333333333 4.639999999999997-6.966666666666665 4.639999999999997-11.195z m-15.216666666666669 12.473333333333336l2.2283333333333317 2.2266666666666666c0.6499999999999986 0.6499999999999986 0.6499999999999986 1.7049999999999983 0 2.356666666666669-0.3249999999999993 0.32500000000000284-0.75 0.48833333333333684-1.1783333333333346 0.48833333333333684s-0.8533333333333317-0.163333333333334-1.1783333333333346-0.48833333333333684l-6.178333333333329-6.178333333333338 6.178333333333333-6.178333333333335c0.3249999999999993-0.3249999999999993 0.75-0.4883333333333333 1.1783333333333346-0.4883333333333333s0.8533333333333317 0.163333333333334 1.1783333333333346 0.4883333333333333c0.6499999999999986 0.6499999999999986 0.6499999999999986 1.7049999999999983 0 2.3566666666666656l-2.078333333333333 2.078333333333333c2.25-0.14999999999999858 4.041666666666668-0.9833333333333343 5.713333333333335-2.655000000000001 1.7333333333333343-1.7283333333333317 2.6833333333333336-4.030000000000001 2.6833333333333336-6.478333333333332 0-2.370000000000001-0.6666666666666679-3.916666666666668-2.466666666666665-5.716666666666667-0.6499999999999986-0.6500000000000004-0.6499999999999986-1.7033333333333331 0-2.3566666666666674 0.326666666666668-0.3266666666666662 0.7533333333333339-0.4900000000000002 1.1833333333333336-0.4900000000000002s0.8500000000000014 0.163333333333334 1.1766666666666659 0.48666666666666636c2.413333333333334 2.411666666666667 3.443333333333335 4.826666666666668 3.443333333333335 8.073333333333334 0 3.34-1.3000000000000007 6.478333333333335-3.661666666666669 8.838333333333335-2.3166666666666664 2.3166666666666664-5.016666666666666 3.5-8.221666666666668 3.6366666666666703z m-1.2766666666666673-24.9l-2.1833333333333336-2.1833333333333336c-0.6533333333333324-0.6500000000000004-0.6533333333333324-1.705 0-2.3566666666666665 0.32333333333333414-0.3250000000000002 0.75-0.4883333333333333 1.1766666666666659-0.4883333333333333s0.8533333333333317 0.16333333333333355 1.1783333333333346 0.4883333333333333l6.178333333333335 6.178333333333328-6.178333333333335 6.178333333333335c-0.3249999999999993 0.3249999999999993-0.75 0.4883333333333333-1.1783333333333346 0.4883333333333333s-0.8533333333333317-0.163333333333334-1.1783333333333346-0.4883333333333333c-0.6499999999999986-0.6500000000000004-0.6499999999999986-1.705 0-2.3566666666666656l2.125-2.125c-2.2749999999999986 0.14333333333333265-4.08 0.9733333333333327-5.76 2.655000000000001-1.7333333333333307 1.7316666666666656-2.686666666666664 4.031666666666663-2.686666666666664 6.481666666666666 0 2.370000000000001 0.6666666666666661 3.916666666666668 2.466666666666667 5.716666666666669 0.6500000000000004 0.6499999999999986 0.6500000000000004 1.7033333333333331 0 2.3566666666666656-0.3249999999999993 0.3249999999999993-0.7533333333333339 0.4883333333333333-1.1799999999999997 0.4883333333333333s-0.8533333333333335-0.163333333333334-1.1783333333333328-0.48666666666666814c-2.411666666666667-2.413333333333334-3.441666666666668-4.828333333333333-3.441666666666668-8.075 0-3.34 1.3000000000000007-6.4783333333333335 3.661666666666667-8.838333333333333 2.303333333333333-2.3049999999999997 4.9883333333333315-3.4883333333333333 8.178333333333336-3.6333333333333346z m-4.859999999999998 17.009999999999998c-1.4800000000000022-1.4800000000000004-1.9800000000000022-2.6250000000000036-1.9800000000000022-4.538333333333334 0-2.003333333333334 0.7799999999999994-3.8866666666666667 2.196666666666667-5.300000000000001 0.10500000000000043-0.10500000000000043 0.206666666666667-0.20500000000000007 0.3116666666666674-0.3000000000000007 0.054999999999999716 0.8000000000000007 0.39333333333333265 1.5500000000000007 0.9666666666666668 2.123333333333335 0.6333333333333329 0.629999999999999 1.4666666666666686 0.9766666666666666 2.3583333333333343 0.9766666666666666s1.7266666666666666-0.34666666666666757 2.3566666666666656-0.9766666666666666l3.8999999999999986-3.9000000000000004c-0.13333333333333286 0.9949999999999992 0.17166666666666686 2.033333333333333 0.9333333333333336 2.793333333333335 1.4783333333333317 1.4783333333333353 1.9783333333333317 2.623333333333335 1.9783333333333317 4.536666666666665 0 2.003333333333334-0.7783333333333324 3.8866666666666667-2.1950000000000003 5.300000000000001-0.10333333333333172 0.10500000000000043-0.20833333333333215 0.206666666666667-0.3133333333333326 0.30333333333333456-0.06666666666666643-0.7866666666666653-0.3999999999999986-1.5166666666666657-0.966666666666665-2.080000000000002-0.6333333333333329-0.629999999999999-1.466666666666665-0.9766666666666666-2.3583333333333343-0.9766666666666666s-1.7266666666666666 0.34666666666666757-2.3566666666666656 0.9766666666666666l-3.903333333333334 3.9033333333333324c0.15000000000000036-1.0083333333333329-0.15499999999999936-2.0700000000000003-0.9266666666666676-2.8433333333333337z' })
                )
            );
        }
    }]);

    return TiArrowSyncOutline;
}(React.Component);

exports.default = TiArrowSyncOutline;