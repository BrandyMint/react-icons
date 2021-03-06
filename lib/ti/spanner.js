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

var TiSpanner = function (_React$Component) {
    _inherits(TiSpanner, _React$Component);

    function TiSpanner() {
        _classCallCheck(this, TiSpanner);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiSpanner).apply(this, arguments));
    }

    _createClass(TiSpanner, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm33.80833333333334 11.866666666666667c-0.0833333333333357-0.2833333333333332-0.30666666666666487-0.5-0.5900000000000034-0.5749999999999993-0.28333333333333144-0.07833333333333314-0.5833333333333357 0.005000000000000782-0.7933333333333366 0.21000000000000085l-4.361666666666661 4.265000000000001-3.1900000000000013-0.6383333333333336-0.6333333333333329-3.178333333333333 4.406666666666666-4.308333333333334c0.21000000000000085-0.20500000000000007 0.29666666666666686-0.5049999999999999 0.22833333333333172-0.79s-0.28000000000000114-0.5166666666666666-0.5599999999999987-0.6033333333333335c-0.8866666666666667-0.2766666666666664-1.6999999999999993-0.4133333333333331-2.4833333333333343-0.4133333333333331-4.595000000000002 0-8.333333333333332 3.7383333333333333-8.333333333333332 8.333333333333334 0 0.538333333333334 0.06333333333333258 1.083333333333334 0.19666666666666544 1.6833333333333336-0.9366666666666674 0.7716666666666683-1.8266666666666662 1.4366666666666674-2.833333333333334 2.1900000000000013-1.4433333333333334 1.076666666666668-3.076666666666666 2.2950000000000017-5.305 4.176666666666666-1.3066666666666666 1.1416666666666622-2.0566666666666666 2.764999999999997-2.0566666666666666 4.448333333333331 0 3.216666666666665 2.616666666666667 5.833333333333332 5.833333333333334 5.833333333333332 1.700000000000001 0 3.321666666666667-0.7600000000000016 4.436666666666666-2.083333333333332 1.9166666666666679-2.245000000000001 3.1499999999999986-3.8933333333333344 4.239999999999998-5.350000000000001 0.7366666666666681-0.9833333333333343 1.3866666666666667-1.8500000000000014 2.138333333333332-2.7666666666666657 0.6000000000000014 0.13666666666666671 1.1449999999999996 0.1999999999999993 1.6833333333333336 0.1999999999999993 4.594999999999999 0 8.333333333333336-3.7383333333333333 8.333333333333336-8.333333333333334 0-0.7283333333333335-0.11333333333333684-1.458333333333334-0.3583333333333343-2.299999999999999z m-20.475 16.46666666666667c-0.9216666666666686 0-1.6666666666666679-0.745000000000001-1.6666666666666679-1.6666666666666679s0.7449999999999992-1.6666666666666679 1.666666666666666-1.6666666666666679 1.666666666666666 0.745000000000001 1.666666666666666 1.6666666666666679-0.7449999999999992 1.6666666666666679-1.666666666666666 1.6666666666666679z' })
                )
            );
        }
    }]);

    return TiSpanner;
}(React.Component);

exports.default = TiSpanner;