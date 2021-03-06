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

var TiWaves = function (_React$Component) {
    _inherits(TiWaves, _React$Component);

    function TiWaves() {
        _classCallCheck(this, TiWaves);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiWaves).apply(this, arguments));
    }

    _createClass(TiWaves, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm25 31.666666666666668c-2.236666666666668 0-4.475000000000001-0.8500000000000014-6.178333333333335-2.5533333333333346-2.1099999999999994-2.1083333333333343-5.538333333333334-2.1066666666666656-7.643333333333334 0-0.6500000000000004 0.6499999999999986-1.705 0.6499999999999986-2.3566666666666656 0s-0.6500000000000004-1.7049999999999983 0-2.3566666666666656c3.405000000000001-3.405000000000001 8.950000000000003-3.405000000000001 12.35666666666667 0 2.1083333333333343 2.1066666666666656 5.536666666666669 2.1050000000000004 7.643333333333334 0 0.6499999999999986-0.6499999999999986 1.7049999999999983-0.6499999999999986 2.3566666666666656 0s0.6499999999999986 1.7049999999999983 0 2.3566666666666656c-1.6999999999999993 1.6999999999999993-3.9400000000000013 2.5533333333333346-6.178333333333335 2.5533333333333346z m0-6.666666666666668c-2.236666666666668 0-4.475000000000001-0.8500000000000014-6.178333333333335-2.5533333333333346-2.1099999999999994-2.1083333333333343-5.538333333333334-2.1066666666666656-7.643333333333334 0-0.6500000000000004 0.6499999999999986-1.705 0.6499999999999986-2.3566666666666656 0s-0.6500000000000004-1.7049999999999983 0-2.3566666666666656c3.405000000000001-3.405000000000001 8.950000000000003-3.405000000000001 12.35666666666667 0 2.1083333333333343 2.1066666666666656 5.536666666666669 2.1050000000000004 7.643333333333334 0 0.6499999999999986-0.6499999999999986 1.7049999999999983-0.6499999999999986 2.3566666666666656 0s0.6499999999999986 1.7049999999999983 0 2.3566666666666656c-1.6999999999999993 1.7000000000000028-3.9400000000000013 2.5533333333333346-6.178333333333335 2.5533333333333346z m0-6.666666666666664c-2.236666666666668 0-4.475000000000001-0.8500000000000014-6.178333333333335-2.5533333333333346-2.1099999999999994-2.1083333333333343-5.538333333333334-2.1066666666666674-7.643333333333334 0-0.6500000000000004 0.6499999999999986-1.705 0.6499999999999986-2.3566666666666656 0s-0.6500000000000004-1.705 0-2.3566666666666656c3.405000000000001-3.4033333333333324 8.950000000000003-3.4066666666666663 12.35666666666667 0 2.1083333333333343 2.1066666666666674 5.536666666666669 2.1050000000000004 7.643333333333334 0 0.6499999999999986-0.6500000000000004 1.7049999999999983-0.6500000000000004 2.3566666666666656 0s0.6499999999999986 1.705 0 2.3566666666666656c-1.6999999999999993 1.6999999999999993-3.9400000000000013 2.5533333333333346-6.178333333333335 2.5533333333333346z' })
                )
            );
        }
    }]);

    return TiWaves;
}(React.Component);

exports.default = TiWaves;