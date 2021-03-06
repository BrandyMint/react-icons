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

var MdDriveEta = function (_React$Component) {
    _inherits(MdDriveEta, _React$Component);

    function MdDriveEta() {
        _classCallCheck(this, MdDriveEta);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdDriveEta).apply(this, arguments));
    }

    _createClass(MdDriveEta, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm8.360000000000001 16.64h23.28333333333334l-2.5-7.5h-18.285000000000004z m20.78 8.36q1.0166666666666693 0 1.7583333333333364-0.7033333333333331t0.7399999999999984-1.7966666666666669-0.7416666666666671-1.7966666666666669-1.7583333333333329-0.7033333333333331-1.7583333333333329 0.7033333333333331-0.7433333333333323 1.7966666666666669 0.7416666666666671 1.7966666666666669 1.7566666666666677 0.7033333333333331z m-18.28 0q1.0166666666666693 0 1.7583333333333346-0.7033333333333331t0.7433333333333341-1.7966666666666669-0.7416666666666671-1.7966666666666669-1.7583333333333329-0.7033333333333331-1.7583333333333329 0.7033333333333331-0.7400000000000002 1.7966666666666669 0.7416666666666671 1.7966666666666669 1.756666666666666 0.7033333333333331z m20.70333333333334-16.64l3.4383333333333326 10v13.283333333333331q0 0.7000000000000028-0.46666666666666856 1.2100000000000009t-1.1716666666666669 0.5083333333333329h-1.7166666666666686q-0.7049999999999983 0-1.173333333333332-0.5083333333333329t-0.466666666666665-1.211666666666666v-1.6416666666666657h-20v1.6416666666666657q0 0.7033333333333331-0.47000000000000064 1.211666666666666t-1.17 0.5083333333333329h-1.7166666666666668q-0.7050000000000001 0-1.1733333333333338-0.5083333333333329t-0.4666666666666668-1.211666666666666v-13.283333333333331l3.4366666666666656-10q0.5466666666666669-1.7166666666666668 2.421666666666667-1.7166666666666668h18.28q1.875 0 2.421666666666667 1.7166666666666668z' })
                )
            );
        }
    }]);

    return MdDriveEta;
}(React.Component);

exports.default = MdDriveEta;