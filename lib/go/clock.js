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

var GoClock = function (_React$Component) {
    _inherits(GoClock, _React$Component);

    function GoClock() {
        _classCallCheck(this, GoClock);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(GoClock).apply(this, arguments));
    }

    _createClass(GoClock, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm17.5 22.5h10l2.5-2.5-2.5-2.5h-5v-7.5l-2.5-2.5-2.5 2.5v12.5z m2.5-20c-9.665 0-17.5 7.835000000000001-17.5 17.5s7.835000000000001 17.5 17.5 17.5 17.5-7.835000000000001 17.5-17.5-7.835000000000001-17.5-17.5-17.5z m0 30c-6.884999999999998 0-12.5-5.615000000000002-12.5-12.5 0-6.8725000000000005 5.6325-12.48 12.5-12.5 6.8675 0.019999999999999574 12.5 5.6274999999999995 12.5 12.5 0 6.884999999999998-5.615000000000002 12.5-12.5 12.5z' })
                )
            );
        }
    }]);

    return GoClock;
}(React.Component);

exports.default = GoClock;