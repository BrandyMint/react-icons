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

var GoRss = function (_React$Component) {
    _inherits(GoRss, _React$Component);

    function GoRss() {
        _classCallCheck(this, GoRss);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(GoRss).apply(this, arguments));
    }

    _createClass(GoRss, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm10 25c-2.76 0-5 2.241250000000001-5 5s2.24 5 5 5 5-2.241250000000001 5-5-2.24-5-5-5z m0-10s-2.5 0.07874999999999943-2.5 2.5 2.5 2.5 2.5 2.5c5.522500000000001 0 10 4.477499999999999 10 10 0 0 0 2.5 2.5 2.5s2.5-2.5 2.5-2.5c0-8.28125-6.717500000000001-15-15-15z m0-10s-2.5 0-2.5 2.5 2.5 2.5 2.5 2.5c11.045000000000002 0 20 8.954999999999998 20 20 0 0 0 2.5 2.5 2.5s2.5-2.5 2.5-2.5c0-13.805-11.19125-25-25-25z' })
                )
            );
        }
    }]);

    return GoRss;
}(React.Component);

exports.default = GoRss;