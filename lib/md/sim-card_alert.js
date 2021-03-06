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

var MdSimCardAlert = function (_React$Component) {
    _inherits(MdSimCardAlert, _React$Component);

    function MdSimCardAlert() {
        _classCallCheck(this, MdSimCardAlert);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdSimCardAlert).apply(this, arguments));
    }

    _createClass(MdSimCardAlert, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm21.64 21.64v-8.283333333333333h-3.2833333333333314v8.283333333333333h3.2833333333333314z m0 6.719999999999999v-3.3599999999999994h-3.2833333333333314v3.3599999999999994h3.2833333333333314z m8.36-25q1.3283333333333331 0 2.3433333333333337 0.9766666666666666t1.0166666666666657 2.3049999999999997v26.71666666666667q0 1.3299999999999983-1.0166666666666657 2.306666666666665t-2.3433333333333337 0.9750000000000085h-20q-1.3283333333333331 0-2.3433333333333337-0.9766666666666666t-1.0166666666666666-2.306666666666665l0.08000000000000007-20 9.921666666666667-10h13.358333333333334z' })
                )
            );
        }
    }]);

    return MdSimCardAlert;
}(React.Component);

exports.default = MdSimCardAlert;