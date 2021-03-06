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

var MdToys = function (_React$Component) {
    _inherits(MdToys, _React$Component);

    function MdToys() {
        _classCallCheck(this, MdToys);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdToys).apply(this, arguments));
    }

    _createClass(MdToys, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 20q0 3.75-2.6950000000000003 6.445t-6.445 2.6950000000000003-6.483333333333333-2.6950000000000003-2.7383333333333324-6.445h18.361666666666665z m0 0q-3.75 0-6.445-2.6950000000000003t-2.6949999999999985-6.4449999999999985 2.6950000000000003-6.483333333333333 6.4449999999999985-2.738333333333334v18.361666666666665z m0 0q3.75 0 6.445 2.6950000000000003t2.6950000000000003 6.445-2.6950000000000003 6.483333333333334-6.445 2.7383333333333297v-18.361666666666665z m0 0q0-3.75 2.6950000000000003-6.445t6.445-2.6950000000000003 6.483333333333334 2.6950000000000003 2.7383333333333297 6.445h-18.361666666666665z' })
                )
            );
        }
    }]);

    return MdToys;
}(React.Component);

exports.default = MdToys;