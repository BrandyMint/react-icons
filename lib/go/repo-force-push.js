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

var GoRepoForcePush = function (_React$Component) {
    _inherits(GoRepoForcePush, _React$Component);

    function GoRepoForcePush() {
        _classCallCheck(this, GoRepoForcePush);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(GoRepoForcePush).apply(this, arguments));
    }

    _createClass(GoRepoForcePush, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35 2.5c0-1.25-1.25-2.5-2.5-2.5h-25s-2.5 1.25-2.5 2.5v30s0-1.25 0 0 1.25 2.5 2.5 2.5h5v5l5-5v-5h-5v2.5h-3.75s-1.25-0.5874999999999986-1.25-1.25v-3.75h10v-2.5h-5v-22.5h20v22.5h-5v2.5h5v3.75s-0.5874999999999986 1.25-1.25 1.25h-3.75v2.5h5s2.5-1.25 2.5-2.5v-30z m-10.625 12.5h5.625l-7.5-10-7.5 10h5.625l-5.625 7.5h5v17.5h5v-17.5h5l-5.625-7.5z' })
                )
            );
        }
    }]);

    return GoRepoForcePush;
}(React.Component);

exports.default = GoRepoForcePush;