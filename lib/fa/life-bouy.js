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

var FaLifeBouy = function (_React$Component) {
    _inherits(FaLifeBouy, _React$Component);

    function FaLifeBouy() {
        _classCallCheck(this, FaLifeBouy);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaLifeBouy).apply(this, arguments));
    }

    _createClass(FaLifeBouy, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 0q4.062857142857144 0 7.767142857142858 1.5857142857142859t6.385714285714286 4.2614285714285725 4.261428571428574 6.385714285714284 1.5857142857142819 7.764285714285716-1.585714285714289 7.765714285714285-4.262857142857143 6.385714285714286-6.385714285714286 4.261428571428574-7.765714285714282 1.5857142857142819-7.767142857142858-1.585714285714289-6.385714285714285-4.261428571428574-4.261428571428572-6.385714285714286-1.5857142857142854-7.762857142857136 1.5857142857142859-7.7714285714285705 4.262857142857143-6.385714285714285 6.385714285714286-4.261428571428572 7.765714285714285-1.5814285714285727z m0 2.857142857142857q-4.242857142857144 0-8.057142857142857 2.0085714285714285l4.328571428571429 4.328571428571428q1.8285714285714292-0.6228571428571428 3.7285714285714278-0.6228571428571428t3.725714285714286 0.6242857142857137l4.328571428571429-4.328571428571428q-3.811428571428575-2.0099999999999993-8.054285714285715-2.0099999999999993z m-15.134285714285713 25.2l4.328571428571427-4.328571428571429q-0.6228571428571428-1.8285714285714256-0.6228571428571428-3.7285714285714278t0.6242857142857137-3.725714285714286l-4.328571428571428-4.328571428571429q-2.0099999999999993 3.8114285714285714-2.0099999999999993 8.054285714285715t2.0085714285714285 8.057142857142857z m15.134285714285713 9.085714285714289q4.242857142857144 0 8.057142857142857-2.008571428571429l-4.328571428571429-4.328571428571429q-1.8285714285714256 0.6228571428571428-3.7285714285714278 0.6228571428571428t-3.725714285714286-0.6242857142857154l-4.328571428571429 4.328571428571426q3.8114285714285714 2.010000000000005 8.054285714285715 2.010000000000005z m0-8.57142857142857q3.548571428571428 0 6.060000000000002-2.5114285714285707t2.5114285714285707-6.060000000000006-2.5114285714285707-6.0600000000000005-6.060000000000002-2.5114285714285707-6.0600000000000005 2.5114285714285707-2.5114285714285707 6.0600000000000005 2.5114285714285725 6.060000000000002 6.059999999999999 2.5114285714285707z m10.802857142857142-4.842857142857142l4.328571428571429 4.328571428571429q2.0114285714285742-3.817142857142862 2.0114285714285742-8.057142857142864t-2.009999999999998-8.06l-4.328571428571429 4.328571428571427q0.6242857142857119 1.8314285714285745 0.6242857142857119 3.731428571428573t-0.6257142857142846 3.7285714285714278z' })
                )
            );
        }
    }]);

    return FaLifeBouy;
}(React.Component);

exports.default = FaLifeBouy;