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

var FaCcDinersClub = function (_React$Component) {
    _inherits(FaCcDinersClub, _React$Component);

    function FaCcDinersClub() {
        _classCallCheck(this, FaCcDinersClub);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaCcDinersClub).apply(this, arguments));
    }

    _createClass(FaCcDinersClub, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm14.895555555555557 25.98888888888889v-12.02888888888889q-1.8399999999999999 0.7111111111111104-2.9866666666666664 2.352222222222224t-1.144444444444444 3.6722222222222243 1.144444444444444 3.6722222222222243 2.9866666666666664 2.3355555555555547z m8.75-6.006666666666668q0-2.0311111111111124-1.1444444444444457-3.6722222222222207t-2.987777777777776-2.354444444444445v12.048888888888888q1.8399999999999999-0.7111111111111121 2.986666666666668-2.352222222222224t1.1444444444444457-3.673333333333332z m3.7333333333333343 0q0 2.7600000000000016-1.362222222222222 5.104444444444443t-3.706666666666667 3.706666666666667-5.104444444444447 1.3633333333333333q-2.0666666666666664 0-3.9499999999999993-0.8066666666666649t-3.2488888888888887-2.1722222222222207-2.17-3.2444444444444436-0.8077777777777779-3.9511111111111106q0-2.7600000000000016 1.3633333333333333-5.104444444444445t3.706666666666667-3.706666666666667 5.104444444444443-1.3633333333333333 5.104444444444447 1.3633333333333333 3.706666666666667 3.706666666666667 1.3633333333333333 5.104444444444445z m6.650000000000002 0.12222222222222356q0-2.413333333333334-0.9633333333333312-4.540000000000001t-2.56111111111111-3.5666666666666664-3.706666666666667-2.275555555555556-4.384444444444451-0.8333333333333339h-5.224444444444444q-3.0555555555555554 0-5.617777777777778 1.4066666666666663t-4.08 3.993333333333334-1.5188888888888892 5.815555555555557q0 2.968888888888891 1.511111111111111 5.511111111111113t4.095555555555555 4.02 5.610000000000001 1.4755555555555553h5.225555555555555q2.2411111111111097 0 4.366666666666667-0.8777777777777764t3.7255555555555553-2.3422222222222224 2.56111111111111-3.5155555555555544 0.9633333333333312-4.271111111111111z m5.971111111111107-11.215555555555557v22.22222222222222q0 0.9022222222222247-0.6599999999999966 1.5622222222222213t-1.5622222222222248 0.6600000000000037h-35.55555555555556q-0.9022222222222216 0-1.5622222222222213-0.6599999999999966t-0.6600000000000001-1.5622222222222248v-22.222222222222225q0-0.902222222222222 0.66-1.5622222222222222t1.5622222222222222-0.6600000000000001h35.55555555555556q0.9022222222222211 0 1.5622222222222248 0.6600000000000001t0.6599999999999966 1.5622222222222222z' })
                )
            );
        }
    }]);

    return FaCcDinersClub;
}(React.Component);

exports.default = FaCcDinersClub;