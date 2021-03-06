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

var TiShoppingCart = function (_React$Component) {
    _inherits(TiShoppingCart, _React$Component);

    function TiShoppingCart() {
        _classCallCheck(this, TiShoppingCart);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiShoppingCart).apply(this, arguments));
    }

    _createClass(TiShoppingCart, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm34.593333333333334 8.908333333333333c-0.31666666666667-0.36666666666666536-0.7766666666666637-0.5749999999999993-1.259999999999998-0.5749999999999993h-23.033333333333335l-0.32333333333333414-1.9399999999999995c-0.13333333333333286-0.8033333333333337-0.8266666666666662-1.3933333333333344-1.6433333333333326-1.3933333333333344h-3.75c-0.9216666666666669 0-1.666666666666667 0.7450000000000001-1.666666666666667 1.666666666666667s0.7450000000000001 1.666666666666667 1.666666666666667 1.666666666666667h2.338333333333333l3.0999999999999996 18.606666666666662c0.013333333333333641 0.07499999999999929 0.05000000000000071 0.13666666666666671 0.07499999999999929 0.206666666666667 0.026666666666667282 0.08833333333333471 0.05000000000000071 0.17166666666666686 0.08999999999999986 0.25 0.05333333333333279 0.11166666666666814 0.125 0.2049999999999983 0.1999999999999993 0.3000000000000007 0.05000000000000071 0.06666666666666643 0.09999999999999964 0.129999999999999 0.15833333333333321 0.18666666666666742 0.09666666666666757 0.08999999999999986 0.20833333333333393 0.15333333333333243 0.3216666666666672 0.216666666666665 0.06333333333333258 0.03333333333333499 0.11666666666666714 0.08333333333333215 0.18666666666666742 0.10833333333333428 0.19333333333333336 0.07833333333333314 0.3966666666666665 0.125 0.6116666666666664 0.125h18.333333333333336c0.9216666666666669 0 1.6666666666666679-0.745000000000001 1.6666666666666679-1.6666666666666679s-0.745000000000001-1.6666666666666679-1.6666666666666679-1.6666666666666679h-16.92l-0.2766666666666655-1.6666666666666679h18.865000000000002c0.8299999999999983 0 1.5333333333333314-0.6099999999999994 1.6499999999999986-1.4299999999999997l1.6666666666666643-11.666666666666668c0.06666666666666998-0.4800000000000004-0.07500000000000284-0.9666666666666668-0.39000000000000057-1.3283333333333331z m-3.1833333333333336 2.7583333333333346l-0.4733333333333327 3.333333333333334h-5.936666666666667v-3.333333333333334h6.411666666666669z m-8.076666666666664 0v3.333333333333334h-5v-3.333333333333334h5z m0 5v3.333333333333332h-5v-3.333333333333332h5z m-6.666666666666668-5v3.333333333333334h-5c-0.08833333333333293 0-0.16666666666666607 0.025000000000000355-0.24666666666666615 0.05000000000000071l-0.5633333333333344-3.3833333333333346h5.8100000000000005z m-4.976666666666667 5h4.976666666666667v3.333333333333332h-4.421666666666667l-0.5549999999999997-3.333333333333332z m13.309999999999999 3.333333333333332v-3.333333333333332h5.696666666666665l-0.4750000000000014 3.333333333333332h-5.221666666666664z m-8.333333333333332 12.5c0 1.3800000000000026-1.120000000000001 2.5-2.5 2.5s-2.5-1.1199999999999974-2.5-2.5 1.1199999999999992-2.5 2.5-2.5 2.5 1.120000000000001 2.5 2.5z m15 0c0 1.3800000000000026-1.120000000000001 2.5-2.5 2.5s-2.5-1.1199999999999974-2.5-2.5 1.120000000000001-2.5 2.5-2.5 2.5 1.120000000000001 2.5 2.5z' })
                )
            );
        }
    }]);

    return TiShoppingCart;
}(React.Component);

exports.default = TiShoppingCart;