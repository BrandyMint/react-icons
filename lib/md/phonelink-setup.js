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

var MdPhonelinkSetup = function (_React$Component) {
    _inherits(MdPhonelinkSetup, _React$Component);

    function MdPhonelinkSetup() {
        _classCallCheck(this, MdPhonelinkSetup);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdPhonelinkSetup).apply(this, arguments));
    }

    _createClass(MdPhonelinkSetup, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.640000000000004 1.6400000000000001q1.3283333333333367 0 2.34333333333333 1.0166666666666666t1.0166666666666657 2.3400000000000003v30.000000000000004q0 1.326666666666668-1.0166666666666657 2.3416666666666686t-2.3433333333333337 1.0166666666666657h-16.64q-1.3283333333333331 0-2.3433333333333337-1.0166666666666657t-1.0166666666666657-2.3383333333333383v-5h3.3616666666666664v3.3583333333333343h16.641666666666666v-26.71666666666667h-16.64333333333333v3.3583333333333343h-3.3566666666666674v-5q0-1.3283333333333331 1.0166666666666675-2.3433333333333333t2.34-1.0166666666666666h16.64z m-18.28 21.72q1.3283333333333314 0 2.304999999999998-1.0166666666666657t0.9749999999999996-2.3416666666666686-0.9766666666666666-2.3416666666666686-2.3066666666666666-1.0166666666666657-2.3433333333333337 1.0166666666666657-1.0133333333333336 2.3400000000000034 1.0166666666666657 2.344999999999999 2.3433333333333337 1.0166666666666657z m6.328333333333333-2.5l1.7966666666666669 1.4833333333333343q0.31666666666666643 0.31666666666666643 0.158333333333335 0.46999999999999886l-1.643333333333338 2.890000000000004q-0.15500000000000114 0.1566666666666663-0.466666666666665 0.1566666666666663l-2.1883333333333326-0.860000000000003q-1.0933333333333337 0.7033333333333331-1.4833333333333343 0.8599999999999994l-0.3916666666666675 2.1099999999999994q-0.39000000000000057 0.39000000000000057-0.4666666666666668 0.39000000000000057h-3.3633333333333333q-0.1566666666666663 0-0.27333333333333343-0.1566666666666663t-0.03666666666666707-0.23333333333333428l-0.3133333333333326-2.111666666666668q-0.39000000000000057-0.1566666666666663-1.4833333333333325-0.8599999999999994l-2.3450000000000006 0.6999999999999993q-0.1566666666666663 0.158333333333335-0.5466666666666669-0.23333333333333428l-1.6416666666666675-2.8116666666666603q0-0.3133333333333326 0.15833333333333321-0.625l1.875-1.3283333333333331v-1.7166666666666686l-1.875-1.3299999999999983q-0.31333333333333346-0.3133333333333326-0.1566666666666663-0.466666666666665l1.6416666666666666-2.8916666666666675q0.1566666666666663-0.1566666666666663 0.5466666666666669-0.1566666666666663l2.1100000000000003 0.8616666666666628q1.0133333333333336-0.7050000000000001 1.5616666666666674-0.8616666666666664l0.3133333333333326-2.110000000000001q0.39000000000000057-0.39000000000000057 0.4666666666666668-0.39000000000000057h3.3616666666666664q0.4666666666666668 0 0.4666666666666668 0.39000000000000057l0.3916666666666675 2.1099999999999994q0.39000000000000057 0.1566666666666663 1.4833333333333343 0.8599999999999994l2.1900000000000013-0.7050000000000001q0.158333333333335-0.07833333333333314 0.46999999999999886 0.2333333333333325l1.6400000000000006 2.8166666666666664q0 0.3116666666666674-0.1566666666666663 0.466666666666665l-1.7966666666666669 1.3283333333333331v1.7166666666666686z' })
                )
            );
        }
    }]);

    return MdPhonelinkSetup;
}(React.Component);

exports.default = MdPhonelinkSetup;