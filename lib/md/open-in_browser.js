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

var MdOpenInBrowser = function (_React$Component) {
    _inherits(MdOpenInBrowser, _React$Component);

    function MdOpenInBrowser() {
        _classCallCheck(this, MdOpenInBrowser);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdOpenInBrowser).apply(this, arguments));
    }

    _createClass(MdOpenInBrowser, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 16.64l6.640000000000001 6.716666666666669h-5v10h-3.2833333333333314v-10h-5z m11.64-10q1.4066666666666663 0 2.383333333333333 1.0166666666666666t0.9766666666666666 2.3400000000000007v20q0 1.326666666666668-1.0166666666666657 2.3416666666666686t-2.3416666666666686 1.0166666666666657h-6.641666666666666v-3.361666666666668h6.641666666666666v-16.63666666666667h-23.28333333333333v16.64h6.641666666666666v3.360000000000003h-6.639999999999999q-1.4066666666666663 0-2.383333333333333-1.0166666666666657t-0.9766666666666683-2.3400000000000034v-20q0-1.33 0.9766666666666666-2.3450000000000006t2.383333333333333-1.0166666666666666h23.283333333333335z' })
                )
            );
        }
    }]);

    return MdOpenInBrowser;
}(React.Component);

exports.default = MdOpenInBrowser;