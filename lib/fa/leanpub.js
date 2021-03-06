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

var FaLeanpub = function (_React$Component) {
    _inherits(FaLeanpub, _React$Component);

    function FaLeanpub() {
        _classCallCheck(this, FaLeanpub);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaLeanpub).apply(this, arguments));
    }

    _createClass(FaLeanpub, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm36.9725 10.15625l3.0275000000000034 24.84375q-2.5587500000000034 0-5.019999999999996-1.1124999999999972-3.90625-1.7787500000000023-7.675000000000001-1.7787500000000023-4.414999999999999 0-7.306249999999999 2.8900000000000006-2.8912499999999994-2.8912499999999994-7.306249999999999-2.8912499999999994-3.7699999999999996 0-7.675 1.7775000000000034-2.5 1.1124999999999972-4.925 1.1124999999999972h-0.09250000000000647l3.025-24.841250000000002q4.375-2.48125 9.4125-2.48125 4.552500000000002 0 7.560000000000002 2.07125 3.0075000000000003-2.0700000000000003 7.55875-2.0700000000000003 5.037499999999998 0 9.412499999999998 2.4812499999999993z m-9.6675 19.2775q2.5199999999999996 0 4.53125 0.5562499999999986t5.074999999999999 1.8249999999999993l-2.417499999999997-19.939999999999998q-3.34-1.5250000000000004-7.1875-1.5250000000000004-4.375 0-7.305 2.755000000000001-2.9299999999999997-2.75375-7.305-2.75375-3.8475 0-7.1875 1.5250000000000004l-2.421249999999999 19.939999999999998q2.05-0.8399999999999963 3.23125-1.269999999999996t2.8999999999999995-0.7712499999999984 3.4749999999999996-0.3412499999999987q3.946250000000001 0 7.30625 2.1087500000000006 3.3599999999999994-2.1087500000000006 7.305-2.1087500000000006z m0.78125-0.6625000000000014l-1.0749999999999993-17.71625q-4.12125 0.07874999999999943-7.012499999999999 3.0275-2.967500000000001-3.0275-7.303750000000001-3.0275-3.4375 0-6.5625 1.2874999999999996l-2.2237499999999972 18.3825q2.42-0.9962500000000034 4.4625-1.485000000000003t4.324999999999999-0.4875000000000007q4.0825 0 7.305 1.9912500000000009 3.361250000000002-2.0937499999999964 7.306250000000002-1.9937499999999986z' })
                )
            );
        }
    }]);

    return FaLeanpub;
}(React.Component);

exports.default = FaLeanpub;