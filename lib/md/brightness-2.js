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

var MdBrightness2 = function (_React$Component) {
    _inherits(MdBrightness2, _React$Component);

    function MdBrightness2() {
        _classCallCheck(this, MdBrightness2);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdBrightness2).apply(this, arguments));
    }

    _createClass(MdBrightness2, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm16.64 3.3600000000000003q6.953333333333333 0 11.836666666666666 4.883333333333334t4.883333333333333 11.756666666666666-4.883333333333333 11.759999999999998-11.836666666666666 4.883333333333333q-4.533333333333335 0-8.283333333333333-2.1883333333333326 3.831666666666665-2.1883333333333326 6.0600000000000005-6.055t2.2233333333333327-8.399999999999999-2.2266666666666666-8.395-6.0550000000000015-6.055q3.75-2.1900000000000004 8.283333333333333-2.1900000000000004z' })
                )
            );
        }
    }]);

    return MdBrightness2;
}(React.Component);

exports.default = MdBrightness2;