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

var GoDeviceDesktop = function (_React$Component) {
    _inherits(GoDeviceDesktop, _React$Component);

    function GoDeviceDesktop() {
        _classCallCheck(this, GoDeviceDesktop);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(GoDeviceDesktop).apply(this, arguments));
    }

    _createClass(GoDeviceDesktop, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm37.5 2.5h-35s-2.5 1.25-2.5 2.5v22.5s1.25 2.5 2.5 2.5h12.5s-7.5 2.5-7.5 5c0 1.25 1.25 2.5 2.5 2.5h20s2.5-1.25 2.5-2.5c0-2.5-7.5-5-7.5-5h12.5s2.5-1.25 2.5-2.5v-22.5s-1.25-2.5-2.5-2.5z m0 25h-35v-22.5h35v22.5z m-2.5-20h-7.5c-15 2.5-21.1725 11.71875-22.5 15v2.5h30v-17.5z' })
                )
            );
        }
    }]);

    return GoDeviceDesktop;
}(React.Component);

exports.default = GoDeviceDesktop;