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

var MdKeyboardControl = function (_React$Component) {
    _inherits(MdKeyboardControl, _React$Component);

    function MdKeyboardControl() {
        _classCallCheck(this, MdKeyboardControl);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdKeyboardControl).apply(this, arguments));
    }

    _createClass(MdKeyboardControl, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 16.64q1.3283333333333331 0 2.3433333333333337 1.0166666666666657t1.0166666666666657 2.3416666666666686-1.0166666666666657 2.3416666666666686-2.3433333333333337 1.0166666666666657-2.3433333333333337-1.0166666666666657-1.0166666666666657-2.3400000000000034 1.0166666666666657-2.344999999999999 2.3433333333333337-1.0166666666666657z m10 0q1.3283333333333331 0 2.3433333333333337 1.0166666666666657t1.0166666666666657 2.3416666666666686-1.0166666666666657 2.3416666666666686-2.3433333333333337 1.0166666666666657-2.3433333333333337-1.0166666666666657-1.0166666666666657-2.3433333333333337 1.0166666666666657-2.344999999999999 2.3433333333333337-1.0133333333333354z m-20 0q1.3283333333333331 0 2.3433333333333337 1.0166666666666657t1.0166666666666657 2.3416666666666686-1.0166666666666657 2.3416666666666686-2.3433333333333337 1.0166666666666657-2.3433333333333337-1.0166666666666657-1.0166666666666657-2.3400000000000034 1.0166666666666666-2.344999999999999 2.343333333333333-1.0166666666666657z' })
                )
            );
        }
    }]);

    return MdKeyboardControl;
}(React.Component);

exports.default = MdKeyboardControl;