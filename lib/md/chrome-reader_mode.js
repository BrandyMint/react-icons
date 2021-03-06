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

var MdChromeReaderMode = function (_React$Component) {
    _inherits(MdChromeReaderMode, _React$Component);

    function MdChromeReaderMode() {
        _classCallCheck(this, MdChromeReaderMode);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdChromeReaderMode).apply(this, arguments));
    }

    _createClass(MdChromeReaderMode, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35 31.640000000000004v-21.640000000000004h-15v21.64h15z m0-25q1.3283333333333331 0 2.3433333333333337 1.0166666666666666t1.0166666666666657 2.3416666666666677v21.638333333333335q0 1.3283333333333367-1.0166666666666657 2.34333333333333t-2.3433333333333337 1.0150000000000006h-30q-1.3283333333333331 0-2.3433333333333333-1.0166666666666657t-1.0166666666666666-2.3416666666666686v-21.63666666666667q0-1.33 1.0166666666666666-2.3450000000000006t2.3433333333333333-1.0166666666666657h30z m-13.36 17.5h11.716666666666669v2.5h-11.716666666666669v-2.5z m0-8.280000000000001h11.716666666666669v2.5h-11.716666666666669v-2.5z m0 4.140000000000001h11.716666666666669v2.5h-11.716666666666669v-2.5000000000000036z' })
                )
            );
        }
    }]);

    return MdChromeReaderMode;
}(React.Component);

exports.default = MdChromeReaderMode;