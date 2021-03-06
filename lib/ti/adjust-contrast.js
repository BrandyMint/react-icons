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

var TiAdjustContrast = function (_React$Component) {
    _inherits(TiAdjustContrast, _React$Component);

    function TiAdjustContrast() {
        _classCallCheck(this, TiAdjustContrast);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiAdjustContrast).apply(this, arguments));
    }

    _createClass(TiAdjustContrast, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 6.666666666666667c-7.363333333333333 0-13.333333333333334 5.97-13.333333333333334 13.333333333333332s5.970000000000001 13.333333333333336 13.333333333333334 13.333333333333336 13.333333333333336-5.969999999999999 13.333333333333336-13.333333333333336-5.969999999999999-13.333333333333334-13.333333333333336-13.333333333333334z m0 23.333333333333336c-5.523333333333333 0-10-4.476666666666667-10-10s4.476666666666667-10 10-10 10 4.476666666666667 10 10-4.476666666666667 10-10 10z m0-18.333333333333336v16.666666666666668c4.594999999999999 0 8.333333333333336-3.7383333333333333 8.333333333333336-8.333333333333336s-3.7383333333333333-8.333333333333334-8.333333333333336-8.333333333333334z' })
                )
            );
        }
    }]);

    return TiAdjustContrast;
}(React.Component);

exports.default = TiAdjustContrast;