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

var MdStayPrimaryPortrait = function (_React$Component) {
    _inherits(MdStayPrimaryPortrait, _React$Component);

    function MdStayPrimaryPortrait() {
        _classCallCheck(this, MdStayPrimaryPortrait);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdStayPrimaryPortrait).apply(this, arguments));
    }

    _createClass(MdStayPrimaryPortrait, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28.36 31.640000000000004v-23.28333333333334h-16.71666666666667v23.283333333333335h16.71666666666667z m0-29.921666666666667q1.3283333333333331 0 2.3049999999999997 0.9783333333333335t0.975000000000005 2.3033333333333292v30q0 1.3283333333333331-0.9766666666666666 2.3433333333333337t-2.3066666666666684 1.0166666666666657h-16.71333333333334q-1.3299999999999983 0-2.306666666666665-1.0166666666666657t-0.9766666666666648-2.3433333333333337v-30q0-1.3283333333333331 0.9766666666666666-2.3433333333333333t2.3049999999999997-1.0166666666666666z' })
                )
            );
        }
    }]);

    return MdStayPrimaryPortrait;
}(React.Component);

exports.default = MdStayPrimaryPortrait;