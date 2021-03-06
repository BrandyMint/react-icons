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

var TiTag = function (_React$Component) {
    _inherits(TiTag, _React$Component);

    function TiTag() {
        _classCallCheck(this, TiTag);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiTag).apply(this, arguments));
    }

    _createClass(TiTag, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm15 6.666666666666667c2.133333333333333 0 4.266666666666666 0.8133333333333335 5.891666666666666 2.4416666666666673l5.775000000000002 5.891666666666666 8.333333333333332 8.333333333333336-11.666666666666668 11.666666666666664-9.163333333333334-9.163333333333334c-0.061666666666667425 0.054999999999999716-5.061666666666667-4.945-5.061666666666667-4.945-3.255000000000001-3.254999999999999-3.255000000000001-8.533333333333333 0-11.783333333333335 1.6250000000000036-1.6283333333333294 3.7583333333333364-2.4416666666666638 5.891666666666669-2.4416666666666638z m0-3.3333333333333335c-3.116666666666667 0-6.046666666666667 1.2166666666666672-8.25 3.4166666666666665-2.2 2.200000000000001-3.4166666666666665 5.133333333333333-3.4166666666666665 8.25s1.2166666666666672 6.045000000000002 3.4166666666666665 8.25l5 5c0.17999999999999972 0.17666666666666586 0.3800000000000008 0.33333333333333215 0.5833333333333339 0.4633333333333347l8.646666666666667 8.643333333333334c0.6499999999999986 0.6499999999999986 1.5 0.9766666666666666 2.3550000000000004 0.9766666666666666s1.7049999999999983-0.32500000000000284 2.3583333333333343-0.9766666666666666l11.666666666666664-11.666666666666668c1.2999999999999972-1.3000000000000007 1.2999999999999972-3.4116666666666653 0-4.713333333333335l-8.333333333333336-8.333333333333334-5.75-5.866666666666667c-2.229999999999997-2.2299999999999986-5.159999999999997-3.443333333333332-8.276666666666664-3.443333333333332z m0 9.163333333333334c1.3833333333333329 0 2.5 1.1199999999999992 2.5 2.503333333333334s-1.1166666666666671 2.496666666666668-2.5 2.496666666666668-2.5-1.1133333333333368-2.5-2.4966666666666697 1.1166666666666671-2.503333333333332 2.5-2.503333333333332z m0-1.666666666666666c-2.299999999999999-1.7763568394002505e-15-4.166666666666666 1.8699999999999992-4.166666666666666 4.169999999999998 0 2.2950000000000017 1.8666666666666671 4.163333333333334 4.166666666666666 4.163333333333334s4.166666666666668-1.8666666666666671 4.166666666666668-4.163333333333334c0-2.3000000000000007-1.8666666666666671-4.17-4.166666666666668-4.17z' })
                )
            );
        }
    }]);

    return TiTag;
}(React.Component);

exports.default = TiTag;