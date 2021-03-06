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

var MdPermPhoneMsg = function (_React$Component) {
    _inherits(MdPermPhoneMsg, _React$Component);

    function MdPermPhoneMsg() {
        _classCallCheck(this, MdPermPhoneMsg);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdPermPhoneMsg).apply(this, arguments));
    }

    _createClass(MdPermPhoneMsg, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 5h15v11.64h-10l-5 5v-16.64z m13.36 20.86q0.7033333333333331 0 1.1716666666666669 0.466666666666665t0.46666666666666856 1.173333333333332v5.860000000000003q0 0.7033333333333331-0.46666666666666856 1.1716666666666669t-1.173333333333332 0.46666666666666856q-11.716666666666669 0-20.038333333333334-8.32t-8.32-20.03666666666667q0-0.7033333333333323 0.46999999999999975-1.171666666666666t1.1716666666666669-0.4666666666666668h5.858333333333333q0.7050000000000001 0 1.1733333333333338 0.4666666666666668t0.4666666666666668 1.1716666666666669q0 3.124999999999999 0.9399999999999995 5.9383333333333335 0.3133333333333326 1.0166666666666675-0.39000000000000057 1.7166666666666668l-3.673333333333332 3.6750000000000007q3.75 7.266666666666669 11.016666666666667 11.01666666666667l3.671666666666667-3.673333333333332q0.7033333333333331-0.7033333333333331 1.716666666666665-0.39000000000000057 2.8166666666666664 0.9383333333333326 5.939999999999998 0.9383333333333326z' })
                )
            );
        }
    }]);

    return MdPermPhoneMsg;
}(React.Component);

exports.default = MdPermPhoneMsg;