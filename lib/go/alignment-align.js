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

var GoAlignmentAlign = function (_React$Component) {
    _inherits(GoAlignmentAlign, _React$Component);

    function GoAlignmentAlign() {
        _classCallCheck(this, GoAlignmentAlign);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(GoAlignmentAlign).apply(this, arguments));
    }

    _createClass(GoAlignmentAlign, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm8.75 2.5c-4.1425 0-7.5 3.3575-7.5 7.5s3.3575 7.5 7.5 7.5 7.5-3.3575 7.5-7.5-3.3575-7.5-7.5-7.5z m18.75 21.25l6.25-6.25h-17.5v17.5l6.25-6.25 11.25 11.25 5-5-11.25-11.25z' })
                )
            );
        }
    }]);

    return GoAlignmentAlign;
}(React.Component);

exports.default = GoAlignmentAlign;