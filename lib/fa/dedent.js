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

var FaDedent = function (_React$Component) {
    _inherits(FaDedent, _React$Component);

    function FaDedent() {
        _classCallCheck(this, FaDedent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaDedent).apply(this, arguments));
    }

    _createClass(FaDedent, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm8.571428571428571 12.142857142857142v12.857142857142858q0 0.28999999999999915-0.21142857142857174 0.5028571428571418t-0.5028571428571418 0.21142857142857352q-0.31428571428571406 0-0.5142857142857142-0.1999999999999993l-6.428571428571429-6.428571428571427q-0.2000000000000003-0.2042857142857173-0.2000000000000003-0.514285714285716t0.20000000000000007-0.514285714285716l6.428571428571429-6.428571428571429q0.20428571428571463-0.1999999999999993 0.5142857142857142-0.1999999999999993 0.28999999999999915 0 0.5028571428571436 0.21142857142857174t0.21142857142856997 0.5028571428571418z m31.42857142857143 17.142857142857142v4.285714285714285q0 0.28999999999999915-0.21142857142856997 0.5028571428571453t-0.5028571428571453 0.21142857142856997h-38.57142857142857q-0.29000000000000103 0-0.5028571428571439-0.21142857142856997t-0.2114285714285714-0.5028571428571453v-4.285714285714285q0-0.28999999999999915 0.2114285714285714-0.5028571428571418t0.5028571428571429-0.21142857142856997h38.57142857142857q0.28999999999999915 0 0.5028571428571453 0.21142857142856997t0.21142857142856997 0.5028571428571418z m0-8.57142857142857v4.285714285714285q0 0.28999999999999915-0.21142857142856997 0.5028571428571418t-0.5028571428571453 0.21142857142857352h-24.285714285714285q-0.28999999999999915 0-0.5028571428571436-0.21142857142856997t-0.21142857142856997-0.5028571428571453v-4.285714285714285q0-0.28999999999999915 0.21142857142857174-0.5028571428571418t0.5028571428571418-0.21142857142857352h24.285714285714285q0.28999999999999915 0 0.5028571428571453 0.21142857142856997t0.21142857142856997 0.5028571428571453z m0-8.571428571428571v4.2857142857142865q0 0.28999999999999915-0.21142857142856997 0.5028571428571418t-0.5028571428571453 0.21142857142856997h-24.285714285714285q-0.28999999999999915 0-0.5028571428571436-0.21142857142856997t-0.21142857142856997-0.5028571428571418v-4.285714285714285q0-0.28999999999999915 0.21142857142857174-0.5028571428571436t0.5028571428571418-0.21142857142857352h24.285714285714285q0.28999999999999915 0 0.5028571428571453 0.21142857142857174t0.21142857142856997 0.5028571428571418z m0-8.571428571428571v4.285714285714286q0 0.29000000000000004-0.21142857142856997 0.5028571428571427t-0.5028571428571453 0.21142857142856997h-38.57142857142857q-0.29000000000000103 0-0.5028571428571439-0.21142857142857174t-0.2114285714285714-0.5028571428571418v-4.285714285714286q0-0.29000000000000004 0.2114285714285714-0.5028571428571427t0.5028571428571429-0.2114285714285722h38.57142857142857q0.28999999999999915 0 0.5028571428571453 0.2114285714285713t0.21142857142856997 0.5028571428571431z' })
                )
            );
        }
    }]);

    return FaDedent;
}(React.Component);

exports.default = FaDedent;