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

var GoBrowser = function (_React$Component) {
    _inherits(GoBrowser, _React$Component);

    function GoBrowser() {
        _classCallCheck(this, GoBrowser);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(GoBrowser).apply(this, arguments));
    }

    _createClass(GoBrowser, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm15 7.5h2.5v2.5h-2.5v-2.5z m-5 0h2.5v2.5h-2.5v-2.5z m-5 0h2.5v2.5h-2.5v-2.5z m30 25h-30v-20h30v20z m0-22.5h-15v-2.5h15v2.5z m2.5-2.5c0-1.3812499999999996-1.1187499999999986-2.5-2.5-2.5h-30c-1.38125 0-2.5 1.1187499999999995-2.5 2.5v25c0 1.3812500000000014 1.11875 2.5 2.5 2.5h30c1.3812500000000014 0 2.5-1.1187499999999986 2.5-2.5v-25z' })
                )
            );
        }
    }]);

    return GoBrowser;
}(React.Component);

exports.default = GoBrowser;