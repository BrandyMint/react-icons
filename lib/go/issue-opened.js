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

var GoIssueOpened = function (_React$Component) {
    _inherits(GoIssueOpened, _React$Component);

    function GoIssueOpened() {
        _classCallCheck(this, GoIssueOpened);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(GoIssueOpened).apply(this, arguments));
    }

    _createClass(GoIssueOpened, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 2.5c-9.665 0-17.5 7.835000000000001-17.5 17.5s7.835000000000001 17.5 17.5 17.5 17.5-7.835000000000001 17.5-17.5-7.835000000000001-17.5-17.5-17.5z m0 30c-6.904999999999999 0-12.5-5.596250000000001-12.5-12.5s5.595000000000001-12.5 12.5-12.5c6.903749999999999 0 12.5 5.594999999999999 12.5 12.5s-5.596250000000001 12.5-12.5 12.5z m-2.5-2.5h5v-5h-5v5z m0-7.5h5v-12.5h-5v12.5z' })
                )
            );
        }
    }]);

    return GoIssueOpened;
}(React.Component);

exports.default = GoIssueOpened;