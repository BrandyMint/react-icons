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

var FaBars = function (_React$Component) {
    _inherits(FaBars, _React$Component);

    function FaBars() {
        _classCallCheck(this, FaBars);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaBars).apply(this, arguments));
    }

    _createClass(FaBars, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm37.142857142857146 30v2.857142857142854q0 0.5799999999999983-0.42428571428571615 1.0042857142857144t-1.0042857142857144 0.42428571428571615h-31.42857142857143q-0.5799999999999992 0-1.0042857142857136-0.42428571428571615t-0.42428571428571393-1.0042857142857073v-2.8571428571428577q0-0.5800000000000018 0.4242857142857144-1.0042857142857144t1.004285714285714-0.42428571428571615h31.42857142857143q0.5799999999999983 0 1.0042857142857144 0.4242857142857126t0.42428571428571615 1.0042857142857144z m0-11.42857142857143v2.8571428571428577q0 0.5800000000000018-0.42428571428571615 1.0042857142857144t-1.0042857142857144 0.42428571428571615h-31.42857142857143q-0.5799999999999992 0-1.0042857142857136-0.4242857142857126t-0.42428571428571393-1.0042857142857144v-2.8571428571428577q0-0.5800000000000018 0.4242857142857144-1.0042857142857144t1.004285714285714-0.42428571428571615h31.42857142857143q0.5799999999999983 0 1.0042857142857144 0.4242857142857126t0.42428571428571615 1.004285714285718z m0-11.428571428571429v2.8571428571428577q0 0.5800000000000001-0.42428571428571615 1.0042857142857144t-1.0042857142857144 0.42428571428571615h-31.42857142857143q-0.5799999999999992 0-1.0042857142857136-0.4242857142857144t-0.42428571428571393-1.0042857142857144v-2.8571428571428568q0-0.5800000000000001 0.4242857142857144-1.0042857142857144t1.004285714285714-0.4242857142857144h31.42857142857143q0.5799999999999983 0 1.0042857142857144 0.4242857142857144t0.42428571428571615 1.0042857142857144z' })
                )
            );
        }
    }]);

    return FaBars;
}(React.Component);

exports.default = FaBars;