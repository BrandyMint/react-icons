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

var TiSocialTwitter = function (_React$Component) {
    _inherits(TiSocialTwitter, _React$Component);

    function TiSocialTwitter() {
        _classCallCheck(this, TiSocialTwitter);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiSocialTwitter).apply(this, arguments));
    }

    _createClass(TiSocialTwitter, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.483333333333334 11.686666666666666c1.346666666666664-0.8266666666666662 2.2383333333333297-1.955 2.674999999999997-3.389999999999999-1.3100000000000023 0.6950000000000003-2.616666666666667 1.1716666666666669-3.916666666666668 1.4333333333333336-1.173333333333332-1.2583333333333329-2.6566666666666663-1.9000000000000004-4.433333333333334-1.9000000000000004-1.740000000000002 0-3.208333333333332 0.6116666666666664-4.406666666666666 1.8000000000000007-1.1900000000000013 1.1933333333333334-1.7916666666666679 2.6449999999999996-1.7916666666666679 4.340000000000002 0 0.5166666666666675 0.06666666666666643 0.9749999999999996 0.19500000000000028 1.3666666666666671-5.12833333333333-0.17833333333333456-9.371666666666663-2.3033333333333346-12.714999999999996-6.398333333333335-0.5666666666666664 1-0.8499999999999996 2.0216666666666665-0.8499999999999996 3.076666666666666 0 2.166666666666668 0.916666666666667 3.8866666666666667 2.741666666666667 5.149999999999999-1.043333333333333-0.08999999999999986-1.961666666666667-0.3533333333333317-2.743333333333333-0.783333333333335 0 1.5466666666666669 0.45500000000000007 2.84 1.3666666666666663 3.9783333333333353 0.9166666666666661 1.1266666666666652 2.09 1.8449999999999989 3.5250000000000004 2.1499999999999986-0.5216666666666665 0.13333333333333286-1.0700000000000003 0.1999999999999993-1.6333333333333329 0.1999999999999993-0.5199999999999996 0-0.8883333333333336-0.045000000000001705-1.1066666666666674-0.14000000000000057 0.38333333333333286 1.2616666666666667 1.1066666666666674 2.283333333333335 2.1500000000000004 3.0666666666666664 1.043333333333333 0.788333333333334 2.241666666666667 1.2033333333333331 3.588333333333333 1.2399999999999984-2.2216666666666676 1.7416666666666671-4.76 2.6033333333333353-7.633333333333334 2.6033333333333353-0.7000000000000002 0-1.2000000000000002-0.011666666666666714-1.5-0.06666666666666643 2.826666666666667 1.8383333333333347 5.9750000000000005 2.7499999999999964 9.458333333333332 2.7499999999999964 3.5666666666666664 0 6.716666666666669-0.9033333333333324 9.456666666666667-2.710000000000001 2.7399999999999984-1.7966666666666669 4.763333333333332-4.013333333333335 6.063333333333333-6.623333333333335 1.3066666666666684-2.6066666666666656 1.9533333333333331-5.32 1.9533333333333331-8.153333333333334v-0.7766666666666566c1.2633333333333319-0.9499999999999993 2.283333333333335-2.0199999999999996 3.0666666666666664-3.200000000000001-1.1333333333333329 0.48666666666666636-2.3049999999999997 0.8166666666666664-3.5166666666666657 0.9866666666666664z' })
                )
            );
        }
    }]);

    return TiSocialTwitter;
}(React.Component);

exports.default = TiSocialTwitter;