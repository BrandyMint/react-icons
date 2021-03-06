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

var MdReplay10 = function (_React$Component) {
    _inherits(MdReplay10, _React$Component);

    function MdReplay10() {
        _classCallCheck(this, MdReplay10);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdReplay10).apply(this, arguments));
    }

    _createClass(MdReplay10, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm22.033333333333335 25.313333333333336q0 0.5466666666666669 0.7800000000000011 0.5466666666666669 0.39000000000000057 0 0.5466666666666669-0.1566666666666663l0.3133333333333326-0.39000000000000057q0.1566666666666663-0.3133333333333326 0.1566666666666663-0.466666666666665v-3.363333333333337q-0.1566666666666663-0.3116666666666674-0.1566666666666663-0.466666666666665t-0.3500000000000014-0.3500000000000014-0.5100000000000016-0.19666666666666544q-0.23333333333333428 0-0.466666666666665 0.23333333333333428l-0.31666666666666643 0.31666666666666643q-0.23333333333333428 0.3116666666666674-0.23333333333333428 0.466666666666665v3.3599999999999994q0.23333333333333428 0.3133333333333326 0.23333333333333428 0.466666666666665z m3.280000000000001-1.6416666666666657q0 1.0166666666666657-0.1566666666666663 1.3283333333333331l-0.466666666666665 1.0166666666666657q-0.5500000000000007 0.466666666666665-0.8616666666666681 0.466666666666665-0.1566666666666663 0-0.5083333333333329 0.07833333333333314t-0.5083333333333329 0.07833333333333314q-0.7033333333333331 0-1.0166666666666657-0.1566666666666663-0.15500000000000114-0.07833333333333314-0.38833333333333186-0.23333333333333428t-0.39000000000000057-0.23666666666666814q-0.7033333333333331-0.39000000000000057-0.7033333333333331-2.3433333333333337v-1.1699999999999982q0-1.0166666666666657 0.1566666666666663-1.3299999999999983l0.5466666666666669-1.0166666666666657q0.466666666666665-0.466666666666665 0.783333333333335-0.466666666666665 0.15500000000000114 0 0.5066666666666677-0.07833333333333314t0.5083333333333329-0.07833333333333314q0.6999999999999993 0 1.0133333333333319 0.1566666666666663 0.1566666666666663 0.07833333333333314 0.4299999999999997 0.23333333333333428t0.4299999999999997 0.23666666666666814 0.466666666666665 1.0166666666666657q0.158333333333335 0.466666666666665 0.158333333333335 1.326666666666668v1.1716666666666669z m-7.109999999999999 2.966666666666665h-1.5633333333333326v-5.466666666666669l-1.6400000000000006 0.466666666666665v-1.1699999999999982l2.966666666666665-0.9366666666666674h0.23666666666666814v7.109999999999999z m1.7966666666666633-18.276666666666667q5.546666666666667 0 9.453333333333333 3.9066666666666663t3.9066666666666663 9.375q0 5.546666666666667-3.9450000000000003 9.453333333333333t-9.415 3.9033333333333324-9.411666666666667-3.905000000000001-3.9450000000000003-9.453333333333333h3.360000000000001q0 4.140000000000001 2.966666666666667 7.07t7.033333333333333 2.9299999999999997 7.033333333333335-2.9299999999999997 2.963333333333331-7.07-2.9666666666666686-7.07-7.033333333333331-2.929999999999998v6.716666666666667l-8.356666666666667-8.358333333333334 8.360000000000001-8.36v6.716666666666667z' })
                )
            );
        }
    }]);

    return MdReplay10;
}(React.Component);

exports.default = MdReplay10;