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

var GoGift = function (_React$Component) {
    _inherits(GoGift, _React$Component);

    function GoGift() {
        _classCallCheck(this, GoGift);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(GoGift).apply(this, arguments));
    }

    _createClass(GoGift, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 37.5h12.5v-12.5h-12.5v12.5z m-15 0h12.5v-12.5h-12.5v12.5z m14.990000000000002-22.805c1.2287500000000016-0.1374999999999993 2.6125000000000007-0.28749999999999964 3.4125000000000014-0.3800000000000008 3.2749999999999986-0.3650000000000002 6.225000000000001-3.3149999999999995 6.587499999999999-6.59 0.36499999999999844-3.27125-1.9912500000000009-5.629999999999999-5.259999999999998-5.2625-2.5549999999999997 0.28750000000000053-4.892500000000005 2.147500000000001-5.980000000000004 4.505-1.0874999999999986-2.3587500000000006-3.4250000000000007-4.22-5.981249999999999-4.5075-3.2687500000000007-0.3649999999999993-5.6312500000000005 1.9937500000000012-5.262500000000001 5.265000000000001 0.3650000000000002 3.2750000000000004 3.3149999999999995 6.225 6.5875 6.59 0.8037500000000009 0.08999999999999986 2.1875 0.24499999999999922 3.414999999999999 0.3800000000000008-0.021249999999998437 0.16499999999999915-0.008749999999999147 0.3049999999999997-0.008749999999999147 0.3049999999999997h2.5s0.008749999999999147-0.14000000000000057-0.01249999999999929-0.3049999999999997z m4.203749999999999-9.200000000000001c1.7674999999999983-0.1974999999999998 3.0474999999999994 1.0750000000000002 2.8462500000000013 2.8462499999999995-0.19500000000000028 1.7699999999999996-1.7925000000000004 3.365-3.5599999999999987 3.5625-1.7725000000000009 0.1974999999999998-3.0474999999999994-1.0749999999999993-2.8500000000000014-2.8462500000000013s1.7962500000000006-3.365 3.5625-3.5625z m-10.175 6.41c-1.7650000000000006-0.1974999999999998-3.3587500000000023-1.7924999999999986-3.5562499999999986-3.5624999999999982s1.0775000000000006-3.0462499999999997 2.84375-2.8475c1.7699999999999996 0.19625000000000004 3.3649999999999984 1.7925000000000004 3.5625 3.5625s-1.0749999999999993 3.045-2.8462500000000013 2.8475z m5.981249999999999 3.0950000000000006v7.5h15v-7.5h-15z m-17.5 7.5h15v-7.5h-15v7.5z' })
                )
            );
        }
    }]);

    return GoGift;
}(React.Component);

exports.default = GoGift;