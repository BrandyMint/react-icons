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

var MdHotel = function (_React$Component) {
    _inherits(MdHotel, _React$Component);

    function MdHotel() {
        _classCallCheck(this, MdHotel);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdHotel).apply(this, arguments));
    }

    _createClass(MdHotel, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.640000000000004 11.64q2.7333333333333307 0 4.72666666666667 1.9916666666666671t1.9916666666666671 4.725000000000001v15h-3.3583333333333414v-5h-30v5h-3.3633333333333333v-25h3.3633333333333333v15h13.358333333333334v-11.716666666666667h13.283333333333331z m-20 10q-2.033333333333333 0-3.5166666666666657-1.4833333333333343t-1.4833333333333334-3.5166666666666657 1.4833333333333334-3.5166666666666657 3.5166666666666657-1.4833333333333343 3.5166666666666657 1.4833333333333343 1.4833333333333343 3.5166666666666657-1.4833333333333343 3.5166666666666657-3.5166666666666657 1.4833333333333343z' })
                )
            );
        }
    }]);

    return MdHotel;
}(React.Component);

exports.default = MdHotel;