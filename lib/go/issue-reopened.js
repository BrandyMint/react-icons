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

var GoIssueReopened = function (_React$Component) {
    _inherits(GoIssueReopened, _React$Component);

    function GoIssueReopened() {
        _classCallCheck(this, GoIssueReopened);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(GoIssueReopened).apply(this, arguments));
    }

    _createClass(GoIssueReopened, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm27.46625 29.97125c-2.0849999999999973 1.5662500000000001-4.653749999999999 2.5287499999999987-7.466249999999999 2.5287499999999987-6.904999999999999 0-12.5-5.596250000000001-12.5-12.5 0-1.7800000000000011 0.3825000000000003-3.467500000000001 1.0549999999999997-5h-3.5549999999999997v-3.8850000000000016c-1.5500000000000003 2.6125000000000007-2.5 5.627500000000001-2.5 8.885000000000002 0 9.665 7.835000000000001 17.5 17.5 17.5 4.193750000000001 0 7.987500000000001-1.5375000000000014 11.006250000000001-3.9937499999999986l1.4937499999999986 1.4937499999999986v-7.5h-7.5l2.4662499999999987 2.4712500000000013z m-9.966249999999999 0.02874999999999872h5v-5h-5v5z m5-20h-5v12.5h5v-12.5z m15 10c0-9.665000000000001-7.835000000000001-17.5-17.5-17.5-4.195 0-7.99 1.5350000000000001-11.0025 3.9975000000000005l-1.4975000000000005-1.4975000000000005v7.5h7.5l-2.467500000000001-2.467500000000001c2.0875000000000004-1.5700000000000003 4.655000000000001-2.532499999999999 7.467500000000001-2.532499999999999 6.903749999999999 0 12.5 5.594999999999999 12.5 12.5 0 1.7800000000000011-0.3812500000000014 3.4662499999999987-1.0549999999999997 5h3.5549999999999997v3.8874999999999993c1.5499999999999972-2.616250000000001 2.5-5.625 2.5-8.8875z' })
                )
            );
        }
    }]);

    return GoIssueReopened;
}(React.Component);

exports.default = GoIssueReopened;