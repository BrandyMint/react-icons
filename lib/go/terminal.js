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

var GoTerminal = function (_React$Component) {
    _inherits(GoTerminal, _React$Component);

    function GoTerminal() {
        _classCallCheck(this, GoTerminal);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(GoTerminal).apply(this, arguments));
    }

    _createClass(GoTerminal, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm34.9625 4.9625h-30c-1.3825000000000003 0-2.5 1.1174999999999997-2.5 2.5v25c0 1.3800000000000026 1.1174999999999997 2.5 2.5 2.5h30c1.3800000000000026 0 2.5-1.1199999999999974 2.5-2.5v-25c0-1.3825000000000003-1.1199999999999974-2.5-2.5-2.5z m-27.5 17.5l5-5-5-5 2.5-2.5 7.5 7.5-7.5 7.5-2.5-2.5z m20 2.5h-10v-2.5h10v2.5z' })
                )
            );
        }
    }]);

    return GoTerminal;
}(React.Component);

exports.default = GoTerminal;