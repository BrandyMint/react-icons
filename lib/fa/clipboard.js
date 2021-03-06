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

var FaClipboard = function (_React$Component) {
    _inherits(FaClipboard, _React$Component);

    function FaClipboard() {
        _classCallCheck(this, FaClipboard);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaClipboard).apply(this, arguments));
    }

    _createClass(FaClipboard, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm17.142857142857142 37.142857142857146h19.999999999999996v-14.285714285714288h-9.285714285714285q-0.8928571428571423 0-1.5171428571428578-0.6257142857142846t-0.625714285714281-1.5171428571428578v-9.285714285714286h-8.57142857142857v25.714285714285715z m5.714285714285715-32.142857142857146v-1.4285714285714288q0-0.29000000000000004-0.21142857142856997-0.5028571428571427t-0.5028571428571453-0.2114285714285713h-15.714285714285715q-0.29000000000000004 0-0.5028571428571427 0.2114285714285713t-0.21142857142856997 0.5028571428571431v1.4285714285714284q0 0.29000000000000004 0.21142857142857174 0.5028571428571427t0.5028571428571427 0.21142857142857174h15.714285714285717q0.28999999999999915 0 0.5028571428571418-0.21142857142857174t0.21142857142856997-0.5028571428571427z m5.714285714285715 15h6.674285714285713l-6.674285714285713-6.674285714285714v6.674285714285714z m11.428571428571427 2.8571428571428577v15.000000000000004q0 0.8928571428571459-0.6257142857142881 1.5171428571428578t-1.5171428571428507 0.625714285714281h-21.42857142857143q-0.8928571428571423 0-1.5171428571428578-0.6257142857142881t-0.6257142857142863-1.5171428571428507v-3.5714285714285765h-12.142857142857144q-0.8928571428571423 0-1.517142857142857-0.6257142857142881t-0.6257142857142854-1.5171428571428507v-30q0-0.8928571428571459 0.6257142857142858-1.51714285714286t1.517142857142857-0.6257142857142859h24.285714285714285q0.8928571428571423 0 1.5171428571428578 0.6257142857142858t0.6257142857142881 1.517142857142857v7.321428571428571q0.46857142857142975 0.2900000000000009 0.8028571428571425 0.6242857142857137l9.107142857142858 9.107142857142858q0.6257142857142881 0.6257142857142846 1.0714285714285694 1.6971428571428575t0.4471428571428575 1.9642857142857153z' })
                )
            );
        }
    }]);

    return FaClipboard;
}(React.Component);

exports.default = FaClipboard;