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

var MdVolumeOff = function (_React$Component) {
    _inherits(MdVolumeOff, _React$Component);

    function MdVolumeOff() {
        _classCallCheck(this, MdVolumeOff);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdVolumeOff).apply(this, arguments));
    }

    _createClass(MdVolumeOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 6.640000000000001v7.033333333333333l-3.5166666666666657-3.5166666666666675z m-12.89-1.6400000000000006l27.89 27.890000000000008-2.1099999999999923 2.1099999999999923-3.4383333333333326-3.4383333333333326q-2.8883333333333354 2.2666666666666657-6.091666666666669 3.046666666666667v-3.4383333333333326q1.9533333333333331-0.5466666666666669 3.75-1.9533333333333331l-7.1100000000000065-7.110000000000003v11.250000000000004l-8.361666666666668-8.36h-6.638333333333332v-10h7.888333333333332l-7.888333333333332-7.890000000000002z m24.53 15q0-3.9833333333333343-2.3049999999999997-7.033333333333333t-5.975000000000001-4.138333333333334v-3.4383333333333326q5.078333333333333 1.0933333333333337 8.36 5.195t3.280000000000001 9.415q0 3.75-1.7166666666666686 6.949999999999999l-2.5-2.576666666666668q0.8583333333333343-2.1099999999999994 0.8583333333333343-4.375z m-4.140000000000001 0q0 0.7033333333333331-0.07833333333333314 1.0166666666666657l-4.063333333333333-4.066666666666666v-3.666666666666666q4.140000000000001 2.033333333333333 4.140000000000001 6.716666666666667z' })
                )
            );
        }
    }]);

    return MdVolumeOff;
}(React.Component);

exports.default = MdVolumeOff;