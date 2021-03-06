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

var FaVenusMars = function (_React$Component) {
    _inherits(FaVenusMars, _React$Component);

    function FaVenusMars() {
        _classCallCheck(this, FaVenusMars);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaVenusMars).apply(this, arguments));
    }

    _createClass(FaVenusMars, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm32.5 3.125q0-0.2749999999999999 0.17499999999999716-0.4500000000000002t0.45000000000000284-0.17499999999999982h5.625q0.5075000000000003 0 0.8787499999999966 0.37124999999999986t0.3712500000000034 0.8787500000000001v5.625q0 0.27500000000000036-0.17499999999999716 0.4499999999999993t-0.45000000000000284 0.1750000000000007h-1.25q-0.2749999999999986 0-0.45000000000000284-0.1750000000000007t-0.17499999999999716-0.4499999999999993v-2.6174999999999997l-4.962499999999999 4.98q1.4874999999999972 1.8550000000000004 2.1000000000000014 4.18t0.1875 4.824999999999999q-0.625 3.5124999999999993-3.2124999999999986 6.053750000000001t-6.125 3.06625q-4.353749999999998 0.6625000000000014-7.987500000000001-1.7575000000000003-2.285 1.5249999999999986-5 1.8162500000000001v2.5787499999999994h1.875q0.27500000000000036 0 0.4499999999999993 0.17499999999999716t0.1750000000000007 0.45000000000000284v1.25q0 0.2749999999999986-0.1750000000000007 0.45000000000000284t-0.4499999999999993 0.17499999999999716h-1.8750000000000036v1.875q0 0.2749999999999986-0.1750000000000007 0.45000000000000284t-0.4499999999999993 0.17499999999999716h-1.25q-0.27500000000000036 0-0.4499999999999993-0.17499999999999716t-0.1750000000000007-0.45000000000000284v-1.875h-1.875q-0.27500000000000036 0-0.4500000000000002-0.17499999999999716t-0.17499999999999982-0.45000000000000284v-1.25q0-0.2749999999999986 0.17499999999999982-0.45000000000000284t0.4500000000000002-0.17499999999999716h1.875v-2.5787499999999994q-3.0275-0.3324999999999996-5.45875-2.1374999999999993t-3.6537499999999996-4.641250000000003-0.7700000000000002-5.99625q0.48750000000000004-3.6525 3.115-6.300000000000001t6.26-3.2125000000000004q4.375-0.6624999999999996 8.0075 1.758750000000001 2.8500000000000014-1.8924999999999983 6.25-1.8924999999999983 3.9250000000000007 0 7.012499999999999 2.460000000000001l4.978750000000002-4.9625h-2.616250000000001q-0.2749999999999986 0-0.45000000000000284-0.17499999999999982t-0.17499999999999716-0.4500000000000002v-1.25z m-15 21.7375q2.5-2.557500000000001 2.5-6.112500000000001t-2.5-6.112500000000001q-2.5 2.557499999999999-2.5 6.112500000000001t2.5 6.112500000000001z m-15-6.112500000000001q0 3.6125000000000007 2.5687499999999996 6.181249999999999t6.18125 2.5687500000000014q2.285 0 4.2575-1.1125000000000007-3.0075000000000003-3.2624999999999993-3.0075000000000003-7.637499999999999t3.0075000000000003-7.637499999999999q-1.9725000000000001-1.1125000000000007-4.2575-1.1125000000000007-3.6125 0-6.18125 2.5687499999999996t-2.5687499999999996 6.18125z m21.25 8.75q3.6125000000000007 0 6.181249999999999-2.5687500000000014t2.5687500000000014-6.181249999999999-2.5687500000000014-6.18125-6.181249999999999-2.5687499999999996q-2.285 0-4.2575 1.1125000000000007 3.0075000000000003 3.2624999999999993 3.0075000000000003 7.637499999999999t-3.0075000000000003 7.637499999999999q1.9725000000000001 1.1125000000000007 4.2575 1.1125000000000007z' })
                )
            );
        }
    }]);

    return FaVenusMars;
}(React.Component);

exports.default = FaVenusMars;