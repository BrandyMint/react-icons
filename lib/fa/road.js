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

var FaRoad = function (_React$Component) {
    _inherits(FaRoad, _React$Component);

    function FaRoad() {
        _classCallCheck(this, FaRoad);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaRoad).apply(this, arguments));
    }

    _createClass(FaRoad, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm23.146666666666665 22.084000000000003v-0.08400000000000318l-0.501333333333335-6.666666666666666q-0.021333333333334537-0.27066666666666706-0.22933333333333294-0.46933333333333316t-0.4800000000000004-0.19733333333333292h-3.8733333333333313q-0.27066666666666706 0-0.4800000000000004 0.19733333333333292t-0.22666666666666657 0.46933333333333316l-0.501333333333335 6.666666666666666v0.08399999999999963q-0.019999999999999574 0.24933333333333252 0.16799999999999926 0.4173333333333318t0.4373333333333349 0.16666666666666785h5.084q0.24933333333333252 0 0.4373333333333349-0.1653333333333329t0.16666666666666785-0.4173333333333318z m15.813333333333329 9.728000000000002q0 1.5200000000000031-0.9600000000000009 1.5200000000000031h-14.666666666666664q0.27066666666666706 0 0.4586666666666659-0.19733333333333292t0.16666666666666785-0.4693333333333314l-0.41866666666666674-5.333333333333332q-0.021333333333334537-0.27066666666666706-0.22933333333333294-0.46933333333333493t-0.4800000000000004-0.19733333333333292h-5.666666666666668q-0.2693333333333321 0-0.47733333333333405 0.19733333333333292t-0.22933333333333294 0.46933333333333493l-0.4173333333333318 5.333333333333332q-0.019999999999999574 0.2706666666666635 0.16799999999999926 0.4693333333333314t0.45866666666666944 0.19866666666665367h-14.666666666666666q-0.96 0-0.96-1.5199999999999996 0-1.1266666666666652 0.5426666666666666-2.4186666666666667l8.688000000000002-21.74933333333333q0.16666666666666607-0.3959999999999999 0.5413333333333341-0.6879999999999997t0.7906666666666666-0.293333333333333h7.0639999999999965q-0.27066666666666706 0-0.4800000000000004 0.20000000000000018t-0.22666666666666657 0.4666666666666668l-0.3133333333333326 4q-0.021333333333334537 0.293333333333333 0.16666666666666785 0.4800000000000004t0.4586666666666659 0.18666666666666742h3.458666666666666q0.27066666666666706 0 0.4586666666666659-0.18666666666666742t0.16666666666666785-0.4800000000000004l-0.31200000000000117-4q-0.021333333333334537-0.269333333333333-0.22933333333333294-0.4666666666666668t-0.47733333333333405-0.20000000000000018h7.062666666666669q0.41600000000000037 0 0.7906666666666666 0.293333333333333t0.5413333333333341 0.6879999999999997l8.686666666666667 21.749333333333333q0.5413333333333341 1.293333333333333 0.5413333333333341 2.417333333333332z' })
                )
            );
        }
    }]);

    return FaRoad;
}(React.Component);

exports.default = FaRoad;