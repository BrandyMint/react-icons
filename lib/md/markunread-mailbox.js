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

var MdMarkunreadMailbox = function (_React$Component) {
    _inherits(MdMarkunreadMailbox, _React$Component);

    function MdMarkunreadMailbox() {
        _classCallCheck(this, MdMarkunreadMailbox);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdMarkunreadMailbox).apply(this, arguments));
    }

    _createClass(MdMarkunreadMailbox, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm33.36 10q1.3283333333333331 0 2.3049999999999997 1.0166666666666657t0.9750000000000014 2.341666666666667v20q0 1.3283333333333331-0.9766666666666666 2.3049999999999997t-2.306666666666665 0.9766666666666666h-26.713333333333335q-1.330000000000001 0-2.3066666666666675-0.9766666666666666t-0.9766666666666666-2.3049999999999997v-20q0-1.3283333333333331 0.9766666666666666-2.3433333333333337t2.3049999999999997-1.0150000000000006h3.3583333333333334v-10h13.361666666666665v6.640000000000001h-10v13.36h3.2833333333333314v-10h16.71666666666667z' })
                )
            );
        }
    }]);

    return MdMarkunreadMailbox;
}(React.Component);

exports.default = MdMarkunreadMailbox;