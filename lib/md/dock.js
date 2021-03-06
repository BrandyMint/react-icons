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

var MdDock = function (_React$Component) {
    _inherits(MdDock, _React$Component);

    function MdDock() {
        _classCallCheck(this, MdDock);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdDock).apply(this, arguments));
    }

    _createClass(MdDock, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm26.64 25v-16.64h-13.283333333333333v16.64h13.283333333333333z m0-23.283333333333335q1.3283333333333331 0 2.3433333333333337 0.9783333333333335t1.0166666666666657 2.3050000000000015v23.36q0 1.3283333333333331-1.0166666666666657 2.3049999999999997t-2.3433333333333337 0.9750000000000014h-13.283333333333333q-1.3266666666666662 0-2.341666666666667-0.9766666666666666t-1.0150000000000006-2.3049999999999997v-23.358333333333334q0-1.3283333333333331 1.0166666666666657-2.3433333333333333t2.341666666666667-1.0166666666666666z m-13.28 36.644999999999996v-3.3616666666666646h13.283333333333333v3.3599999999999994h-13.283333333333333z' })
                )
            );
        }
    }]);

    return MdDock;
}(React.Component);

exports.default = MdDock;