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

var GoDiffRenamed = function (_React$Component) {
    _inherits(GoDiffRenamed, _React$Component);

    function GoDiffRenamed() {
        _classCallCheck(this, GoDiffRenamed);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(GoDiffRenamed).apply(this, arguments));
    }

    _createClass(GoDiffRenamed, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35 2.5h-30c-1.25 0-2.5 1.25-2.5 2.5v30c0 1.25 1.25 2.5 2.5 2.5h30c1.25 0 2.5-1.25 2.5-2.5v-30c0-1.25-1.25-2.5-2.5-2.5z m-2.5 28.75c0 0.625-0.6625000000000014 1.25-1.25 1.25h-22.5c-0.7037499999999994 0-1.25-0.46875-1.25-1.25v-22.5c0-0.625 0.625-1.25 1.25-1.25h22.5c0.5874999999999986 0 1.25 0.625 1.25 1.25v22.5z m-12.5-13.75h-7.5v5h7.5v5l10-7.5-10-7.5v5z' })
                )
            );
        }
    }]);

    return GoDiffRenamed;
}(React.Component);

exports.default = GoDiffRenamed;