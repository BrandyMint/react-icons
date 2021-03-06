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

var TiBeaker = function (_React$Component) {
    _inherits(TiBeaker, _React$Component);

    function TiBeaker() {
        _classCallCheck(this, TiBeaker);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiBeaker).apply(this, arguments));
    }

    _createClass(TiBeaker, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm32.40833333333334 28.016666666666666l-4.400000000000006-16.349999999999998h1.9916666666666671c0.9200000000000017 0 1.6666666666666679-0.7466666666666661 1.6666666666666679-1.666666666666666s-0.7466666666666661-1.666666666666666-1.6666666666666679-1.666666666666666h-20c-0.9199999999999999 0-1.666666666666666 0.7466666666666661-1.666666666666666 1.666666666666666s0.7466666666666661 1.666666666666666 1.666666666666666 1.666666666666666h1.8916666666666675c-0.0216666666666665 0.293333333333333-0.08000000000000007 0.6699999999999999-0.1999999999999993 1.1166666666666671l-4.1000000000000005 15.233333333333334c-0.3633333333333333 1.3466666666666676-0.12333333333333307 2.703333333333333 0.6550000000000002 3.716666666666665 0.7766666666666673 1.0166666666666657 2.0233333333333334 1.6000000000000014 3.42 1.6000000000000014h16.666666666666668c1.3966666666666683 0 2.6433333333333344-0.5833333333333357 3.4250000000000007-1.6000000000000014 0.7766666666666673-1.0133333333333319 1.0166666666666693-2.370000000000001 0.6500000000000021-3.7166666666666686z m-7.855000000000004-16.349999999999998l2.253333333333334 8.363333333333333c-0.045000000000001705-0.00999999999999801-0.08999999999999986-0.030000000000001137-0.14000000000000057-0.030000000000001137h-13.333333333333334c-0.05000000000000071 0-0.09500000000000064 0.019999999999999574-0.14000000000000057 0.030000000000001137l1.7166666666666668-6.376666666666667c0.13833333333333364-0.5199999999999996 0.28666666666666707-1.2400000000000002 0.31666666666666643-1.9866666666666664h9.326666666666668z m4.556666666666665 18.04c-0.14499999999999957 0.19000000000000128-0.4200000000000017 0.293333333333333-0.7766666666666673 0.293333333333333h-16.666666666666664c-0.35666666666666735 0-0.6333333333333329-0.10333333333333172-0.7766666666666673-0.293333333333333-0.14333333333333265-0.18833333333333258-0.17333333333333378-0.4833333333333343-0.08000000000000007-0.826666666666668l1.9949999999999992-7.416666666666668c0.1466666666666665 0.12166666666666615 0.3249999999999993 0.20333333333333314 0.5283333333333324 0.20333333333333314h13.333333333333332c0.20333333333333314 0 0.38333333333333286-0.08333333333333215 0.5266666666666673-0.1999999999999993l1.995000000000001 7.416666666666668c0.09499999999999886 0.341666666666665 0.06666666666666643 0.6333333333333329-0.07833333333333314 0.8233333333333341z' })
                )
            );
        }
    }]);

    return TiBeaker;
}(React.Component);

exports.default = TiBeaker;