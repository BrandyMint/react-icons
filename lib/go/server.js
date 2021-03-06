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

var GoServer = function (_React$Component) {
    _inherits(GoServer, _React$Component);

    function GoServer() {
        _classCallCheck(this, GoServer);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(GoServer).apply(this, arguments));
    }

    _createClass(GoServer, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm32.5 15h-25c-1.3674999999999997 0-2.5 1.25-2.5 2.5v5c0 1.25 1.25 2.5 2.5 2.5h25c1.25 0 2.5-1.25 2.5-2.5v-5c0-1.25-1.25-2.5-2.5-2.5z m-22.5 7.5h-2.5v-5h2.5v5z m5 0h-2.5v-5h2.5v5z m5 0h-2.5v-5h2.5v5z m5 0h-2.5v-5h2.5v5z m7.5 5h-25c-1.3674999999999997 0-2.5 1.25-2.5 2.5v5c0 1.25 1.25 2.5 2.5 2.5h25c1.25 0 2.5-1.25 2.5-2.5v-5c0-1.25-1.25-2.5-2.5-2.5z m-22.5 7.5h-2.5v-5h2.5v5z m5 0h-2.5v-5h2.5v5z m5 0h-2.5v-5h2.5v5z m5 0h-2.5v-5h2.5v5z m7.5-32.5h-25c-1.3675000000000006 0-2.5 1.25-2.5 2.5v5c0 1.25 1.25 2.5 2.5 2.5h25c1.25 0 2.5-1.25 2.5-2.5v-5c0-1.25-1.25-2.5-2.5-2.5z m-22.5 7.5h-2.5v-5h2.5v5z m5 0h-2.5v-5h2.5v5z m5 0h-2.5v-5h2.5v5z m5 0h-2.5v-5h2.5v5z m7.5-2.5h-2.5v-2.5h2.5v2.5z' })
                )
            );
        }
    }]);

    return GoServer;
}(React.Component);

exports.default = GoServer;