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

var MdNotificationsOff = function (_React$Component) {
    _inherits(MdNotificationsOff, _React$Component);

    function MdNotificationsOff() {
        _classCallCheck(this, MdNotificationsOff);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdNotificationsOff).apply(this, arguments));
    }

    _createClass(MdNotificationsOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm30 24.453333333333337l-14.921666666666665-15.703333333333337q0.2333333333333325-0.07833333333333314 0.625-0.27333333333333343l0.5466666666666651-0.27333333333333343h0.07833333333333314l0.466666666666665-0.2333333333333334q0.0799999999999983 0 0.31666666666666643-0.08000000000000007t0.38833333333333186-0.07833333333333314v-1.1716666666666669q0-1.0166666666666666 0.7033333333333331-1.7583333333333337t1.7966666666666704-0.7433333333333323 1.7966666666666669 0.7416666666666671 0.7033333333333331 1.7566666666666668v1.1716666666666669q3.5166666666666657 0.8600000000000003 5.508333333333333 3.749999999999999t1.9916666666666671 6.800000000000001v6.093333333333334z m-10 12.186666666666664q-1.4066666666666663 0-2.383333333333333-0.9383333333333326t-0.9766666666666666-2.3416666666666686h6.716666666666669q0 1.4066666666666663-0.9750000000000014 2.3433333333333337t-2.383333333333333 0.9399999999999977z m-6.953333333333333-26.406666666666666q1.875 1.9549999999999983 9.805 10.079999999999998t12.148333333333333 12.578333333333333l-2.1099999999999923 2.1083333333333343-3.3599999999999994-3.3583333333333343h-22.890000000000008v-1.6416666666666657l3.3599999999999994-3.3566666666666656v-8.36q0-3.205 1.3283333333333331-5.705l-4.688333333333333-4.611666666666667 2.1099999999999994-2.1833333333333336z' })
                )
            );
        }
    }]);

    return MdNotificationsOff;
}(React.Component);

exports.default = MdNotificationsOff;