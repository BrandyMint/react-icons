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

var GoGistSecret = function (_React$Component) {
    _inherits(GoGistSecret, _React$Component);

    function GoGistSecret() {
        _classCallCheck(this, GoGistSecret);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(GoGistSecret).apply(this, arguments));
    }

    _createClass(GoGistSecret, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm10.037500000000001 27.5l5 7.5h-10l-2.5375000000000014-10 10.0375-2.5-2.5 5z m17.5-5l2.5 5-5 7.5h10l2.5-10-10-2.5z m-3.280000000000001 0h-8.4375l1.71875 3.9849999999999994-2.5 8.51625h10l-2.5-8.515 1.7199999999999989-3.9862499999999983z m3.28125-7.5h-15l-5 2.5h25l-5-2.5z m-2.5-10l-5 2.5-5-2.5-2.5 7.5h15l-2.5-7.5z' })
                )
            );
        }
    }]);

    return GoGistSecret;
}(React.Component);

exports.default = GoGistSecret;