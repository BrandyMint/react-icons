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

var FaWechat = function (_React$Component) {
    _inherits(FaWechat, _React$Component);

    function FaWechat() {
        _classCallCheck(this, FaWechat);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaWechat).apply(this, arguments));
    }

    _createClass(FaWechat, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm11.328750000000001 11.50375q0-0.8000000000000007-0.4875000000000007-1.2874999999999996t-1.2912500000000016-0.49125000000000085q-0.8375000000000004 0-1.4837500000000006 0.5t-0.6449999999999978 1.2750000000000004q0 0.7624999999999993 0.6449999999999996 1.2599999999999998t1.4849999999999994 0.4975000000000005q0.8025000000000002 0 1.2899999999999991-0.4787499999999998t0.4875000000000007-1.2787500000000005z m14.512500000000001 9.9025q0-0.5474999999999994-0.5-0.9750000000000014t-1.2762500000000045-0.4312499999999986q-0.5249999999999986 0-0.9649999999999999 0.4400000000000013t-0.4400000000000013 0.9662499999999987q0 0.5474999999999994 0.4400000000000013 0.9875000000000007t0.9662499999999987 0.4375q0.7824999999999989 0 1.2800000000000011-0.42875000000000085t0.4974999999999987-0.9962499999999999z m-4.612500000000001-9.9025q0-0.8000000000000007-0.47749999999999915-1.2874999999999996t-1.276250000000001-0.49125000000000085q-0.8399999999999999 0-1.4849999999999994 0.5t-0.6475000000000009 1.2750000000000004q0 0.7624999999999993 0.6449999999999996 1.2599999999999998t1.4849999999999994 0.4975000000000005q0.8000000000000007 0 1.2787499999999987-0.4787499999999998t0.4800000000000004-1.2787500000000005z m12.403749999999999 9.9025q0-0.5474999999999994-0.5075000000000003-0.9750000000000014t-1.269999999999996-0.4312499999999986q-0.5274999999999999 0-0.9662499999999987 0.4400000000000013t-0.4375 0.9662499999999987q0 0.5474999999999994 0.4375 0.9875000000000007t0.9675000000000011 0.4375q0.7624999999999993 0 1.2699999999999996-0.42875000000000085t0.5075000000000003-0.9962499999999999z m-5.195-7.75375q-0.6050000000000004-0.07874999999999943-1.3674999999999997-0.07874999999999943-3.3000000000000007 0-6.074999999999999 1.5024999999999995t-4.362500000000001 4.0725-1.5924999999999994 5.615000000000002q0 1.5249999999999986 0.4499999999999993 2.96875-0.6850000000000005 0.05874999999999986-1.3287499999999994 0.05874999999999986-0.5087499999999991 0-0.9775000000000009-0.02874999999999872t-1.0749999999999993-0.125-0.8674999999999997-0.1374999999999993-1.0649999999999995-0.2049999999999983-0.9749999999999996-0.2049999999999983l-4.9425 2.4800000000000004 1.40625-4.2575q-5.6625000000000005-3.965-5.6625000000000005-9.57 0-3.3000000000000007 1.9025-6.074999999999999t5.15625-4.362500000000001 7.1012499999999985-1.5925000000000074q3.4375000000000018 0 6.49375 1.2875000000000005t5.1175 3.56625 2.664999999999999 5.0875z m11.5625 10.95625q0 2.285-1.3374999999999986 4.365000000000002t-3.6225000000000023 3.7762499999999974l1.0750000000000028 3.5349999999999966-3.887500000000003-2.1287499999999966q-2.9299999999999997 0.7224999999999966-4.2575 0.7224999999999966-3.3000000000000007 0-6.074999999999999-1.3774999999999977t-4.362500000000001-3.740000000000002-1.5924999999999994-5.155000000000001 1.5912500000000005-5.15625 4.365000000000002-3.7375000000000007 6.074999999999999-1.3787500000000001q3.1437500000000007 0 5.916250000000002 1.3774999999999995t4.443750000000001 3.7499999999999982 1.6687499999999957 5.145000000000007z' })
                )
            );
        }
    }]);

    return FaWechat;
}(React.Component);

exports.default = FaWechat;