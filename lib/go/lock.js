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

var GoLock = function (_React$Component) {
    _inherits(GoLock, _React$Component);

    function GoLock() {
        _classCallCheck(this, GoLock);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(GoLock).apply(this, arguments));
    }

    _createClass(GoLock, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm32.5 17.5h-2.5v-7.5s-5-10-10-10-10 5-10 10v7.5h-2.5s-2.5 1.25-2.5 2.5v17.5s1.25 2.5 2.5 2.5h25s2.5-1.25 2.5-2.5v-17.5s-1.25-2.5-2.5-2.5z m-7.5 5h-15v2.5h15v2.5h-15v2.5h15v2.5h-15v2.5h15v2.5h-17.5v-17.5h17.5v2.5z m0-5h-10v-7.5s2.5-5 5-5 5 2.5 5 5v7.5z' })
                )
            );
        }
    }]);

    return GoLock;
}(React.Component);

exports.default = GoLock;