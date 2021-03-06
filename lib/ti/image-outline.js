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

var TiImageOutline = function (_React$Component) {
    _inherits(TiImageOutline, _React$Component);

    function TiImageOutline() {
        _classCallCheck(this, TiImageOutline);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiImageOutline).apply(this, arguments));
    }

    _createClass(TiImageOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm14.166666666666668 13.333333333333334c1.3783333333333339 0 2.5 1.1199999999999992 2.5 2.5s-1.121666666666668 2.5000000000000018-2.5 2.5000000000000018-2.5-1.1250000000000036-2.5-2.5000000000000018 1.1216666666666661-2.5 2.5-2.5z m0-1.666666666666666c-2.3000000000000007 0-4.166666666666668 1.8616666666666681-4.166666666666668 4.166666666666666s1.8666666666666671 4.166666666666666 4.166666666666668 4.166666666666666 4.166666666666668-1.8666666666666636 4.166666666666668-4.166666666666666-1.8666666666666671-4.166666666666666-4.166666666666668-4.166666666666666z m12.5 8.333333333333332c0.75 0.08333333333333215 2.116666666666667 3.004999999999999 2.966666666666665 6.666666666666668h-18.99c0.7233333333333327-1.7233333333333363 1.7599999999999998-3.333333333333332 2.6899999999999995-3.333333333333332 1.3416666666666668 0 1.873333333333333 0.3066666666666684 2.5500000000000007 0.6999999999999993 0.7433333333333341 0.42833333333333456 1.674999999999999 0.966666666666665 3.283333333333333 0.966666666666665 1.8949999999999996 0 3.2333333333333343-1.4766666666666666 4.420000000000002-2.7783333333333324 1.0466666666666633-1.1449999999999996 2.0299999999999976-2.2216666666666676 3.0799999999999983-2.2216666666666676z m0-1.6666666666666679c-3.333333333333332 0-5 5-7.5 5s-2.5-1.6666666666666643-5.833333333333334-1.6666666666666643-5 6.666666666666668-5 6.666666666666668h23.333333333333336s-1.6666666666666679-10-5-10z m10.000000000000004-8.333333333333332c0-1.8399999999999999-1.4933333333333323-3.333333333333334-3.3333333333333357-3.333333333333334h-26.666666666666668c-1.8400000000000016 0-3.3333333333333344 1.493333333333334-3.3333333333333344 3.333333333333334v20c0 1.8399999999999999 1.4933333333333336 3.3333333333333357 3.3333333333333335 3.3333333333333357h26.666666666666668c1.8400000000000034 0 3.3333333333333357-1.4933333333333323 3.3333333333333357-3.333333333333332v-20.000000000000004z m-3.3333333333333357 20h-26.666666666666668v-20h26.671666666666663l-0.0049999999999954525 20z' })
                )
            );
        }
    }]);

    return TiImageOutline;
}(React.Component);

exports.default = TiImageOutline;