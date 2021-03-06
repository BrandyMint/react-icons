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

var GoSquirrel = function (_React$Component) {
    _inherits(GoSquirrel, _React$Component);

    function GoSquirrel() {
        _classCallCheck(this, GoSquirrel);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(GoSquirrel).apply(this, arguments));
    }

    _createClass(GoSquirrel, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm30 2.5c-5.522500000000001 0-10 3.27125-10 7.300000000000001 0 4.8375 1.25 7.5825 0 15.2 0-11.25-6.912500000000001-15.85-10-15.85 0.12750000000000128-1.258750000000001-1.2087500000000002-1.6500000000000004-1.2087500000000002-1.6500000000000004s-0.5474999999999994 0.2787499999999996-0.7562499999999996 0.8424999999999994c-0.6725000000000003-0.7837499999999995-1.4124999999999996-0.6850000000000005-1.4124999999999996-0.6850000000000005l-0.3312499999999998 1.4499999999999993s-4.572500000000001 1.592500000000003-4.633750000000001 8.055000000000003c0.5312500000000004 0.84375 3.8625 1.5124999999999993 6.230000000000001 1.0824999999999996 2.2325 0.11499999999999844 1.678749999999999 1.9787500000000016 1.1799999999999997 2.4787500000000016-2.1087500000000006 2.113749999999996-4.067500000000001-0.7237500000000026-6.567500000000001-0.7237500000000026s-2.5 2.5 0 2.5 2.5 2.5 7.5 2.5c-7.733750000000001 3.008749999999999 0 10 0 10h-2.5c-2.5 0-2.5 2.5-2.5 2.5h15c7.5 0 12.5-2.5 12.5-8.677500000000002 0-2.1224999999999987-1.0812500000000007-4.477499999999999-2.5-6.337499999999999-2.7699999999999996-3.633749999999999 0.5662500000000001-6.6875 2.5-4.983750000000001s7.5 2.5 7.5-5c0-5.52125-4.475000000000001-10-10-10z m-23.75 12.5c-0.6900000000000004 0-1.25-0.5600000000000005-1.25-1.25s0.5600000000000005-1.25 1.25-1.25 1.25 0.5600000000000005 1.25 1.25-0.5600000000000005 1.25-1.25 1.25z' })
                )
            );
        }
    }]);

    return GoSquirrel;
}(React.Component);

exports.default = GoSquirrel;