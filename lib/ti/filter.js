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

var TiFilter = function (_React$Component) {
    _inherits(TiFilter, _React$Component);

    function TiFilter() {
        _classCallCheck(this, TiFilter);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiFilter).apply(this, arguments));
    }

    _createClass(TiFilter, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.7 10h-23.4c-1.7999999999999998 0-2.3 1-1 2.3000000000000007l7 7c1.4000000000000004 1.3999999999999986 2.3999999999999986 3.8999999999999986 2.3999999999999986 5.699999999999999v8.299999999999997l6.599999999999998-3.3000000000000007v-5.800000000000001c0-1.3999999999999986 1-3.5 2.3999999999999986-4.899999999999999l7-7c1.2999999999999972-1.3000000000000007 0.7999999999999972-2.3000000000000007-1-2.3000000000000007z' })
                )
            );
        }
    }]);

    return TiFilter;
}(React.Component);

exports.default = TiFilter;