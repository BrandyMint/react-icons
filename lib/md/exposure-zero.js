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

var MdExposureZero = function (_React$Component) {
    _inherits(MdExposureZero, _React$Component);

    function MdExposureZero() {
        _classCallCheck(this, MdExposureZero);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdExposureZero).apply(this, arguments));
    }

    _createClass(MdExposureZero, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm23.36 16.875q0-3.125-0.8599999999999994-4.453333333333333-0.3133333333333326-0.4666666666666668-1.0933333333333337-0.9383333333333326-0.5466666666666669-0.3133333333333326-1.4066666666666663-0.3133333333333326t-1.4066666666666663 0.3133333333333326q-0.783333333333335 0.4666666666666668-1.0933333333333337 0.9383333333333326-0.8599999999999994 1.3283333333333331-0.8599999999999994 4.453333333333333v4.453333333333333q0 4.375 1.9533333333333331 5.546666666666667 0.5466666666666669 0.3133333333333326 1.4066666666666663 0.3133333333333326 1.6400000000000006 0 2.5-1.3283333333333331 0.9383333333333326-1.4066666666666663 0.9383333333333326-4.533333333333335v-4.449999999999999h-0.07833333333333314z m-10.233333333333333 0.5466666666666669q0-9.063333333333333 6.873333333333333-9.063333333333333 5.078333333333333 0 6.406666666666666 4.843333333333334 0.5466666666666669 2.033333333333333 0.5466666666666669 4.219999999999999v3.4383333333333326h-0.07833333333333314q0 4.609999999999999-1.875 7.033333333333331-1.0933333333333337 1.25-2.1883333333333326 1.6383333333333319-1.25 0.466666666666665-2.8133333333333326 0.466666666666665t-2.8166666666666664-0.466666666666665q-1.091666666666665-0.39000000000000057-2.1866666666666674-1.6400000000000006-1.875-2.1099999999999994-1.875-7.033333333333335v-3.4366666666666674z' })
                )
            );
        }
    }]);

    return MdExposureZero;
}(React.Component);

exports.default = MdExposureZero;