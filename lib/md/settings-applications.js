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

var MdSettingsApplications = function (_React$Component) {
    _inherits(MdSettingsApplications, _React$Component);

    function MdSettingsApplications() {
        _classCallCheck(this, MdSettingsApplications);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdSettingsApplications).apply(this, arguments));
    }

    _createClass(MdSettingsApplications, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28.75 20q0-0.783333333333335-0.07833333333333314-1.1716666666666669l2.5-1.875q0.39000000000000057-0.3133333333333326 0.07833333333333314-0.783333333333335l-2.3433333333333337-4.061666666666667q-0.23333333333333428-0.39000000000000057-0.7033333333333331-0.2333333333333325l-2.8900000000000006 1.17q-1.0166666666666657-0.7833333333333332-1.9533333333333331-1.1716666666666669l-0.466666666666665-3.046666666666667q-0.158333333333335-0.4666666666666668-0.5500000000000007-0.4666666666666668h-4.686666666666667q-0.466666666666665 0-0.5466666666666669 0.4666666666666668l-0.466666666666665 3.125q-1.25 0.5500000000000007-1.955 1.0950000000000006l-2.8883333333333336-1.173333333333332q-0.3916666666666675-0.1566666666666663-0.7050000000000001 0.3133333333333326l-2.3450000000000006 3.983333333333336q-0.3116666666666674 0.46999999999999886 0.08000000000000007 0.783333333333335l2.5 1.875q-0.07833333333333314 0.39000000000000057-0.07833333333333314 1.1716666666666669t0.08000000000000007 1.1716666666666669l-2.5 1.875q-0.39000000000000057 0.3133333333333326-0.07833333333333314 0.783333333333335l2.3450000000000006 4.061666666666667q0.2333333333333325 0.39000000000000057 0.7033333333333331 0.23333333333333428l2.8883333333333336-1.1700000000000017q1.0166666666666657 0.783333333333335 1.9533333333333331 1.1716666666666669l0.466666666666665 3.046666666666667q0.158333333333335 0.466666666666665 0.5500000000000007 0.466666666666665h4.686666666666667q0.466666666666665 0 0.5466666666666669-0.466666666666665l0.466666666666665-3.125q1.25-0.5500000000000007 1.9549999999999983-1.0949999999999989l2.8900000000000006 1.1716666666666669q0.39000000000000057 0.1566666666666663 0.7033333333333331-0.3133333333333326l2.3433333333333337-3.9833333333333343q0.3133333333333326-0.46999999999999886-0.07833333333333314-0.783333333333335l-2.5-1.875q0.07833333333333314-0.39000000000000057 0.07833333333333314-1.1716666666666669z m2.8900000000000006-15q1.4066666666666663 0 2.383333333333333 1.0166666666666666t0.9766666666666666 2.3400000000000007v23.28333333333333q0 1.326666666666668-0.9766666666666666 2.3416666666666686t-2.383333333333333 1.0166666666666657h-23.28333333333333q-1.405000000000002 0-2.3833333333333346-1.0166666666666657t-0.9733333333333345-2.341666666666665v-23.28333333333334q0-1.3266666666666653 0.9749999999999996-2.341666666666665t2.383333333333333-1.0150000000000006h23.28333333333333z m-11.64 11.64q1.3283333333333331 0 2.3433333333333337 1.0166666666666657t1.0166666666666657 2.3416666666666686-1.0166666666666657 2.3416666666666686-2.3433333333333337 1.0166666666666657-2.3433333333333337-1.0166666666666657-1.0166666666666657-2.3400000000000034 1.0166666666666657-2.344999999999999 2.3433333333333337-1.0166666666666657z' })
                )
            );
        }
    }]);

    return MdSettingsApplications;
}(React.Component);

exports.default = MdSettingsApplications;