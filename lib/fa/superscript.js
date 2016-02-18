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

var FaSuperscript = function (_React$Component) {
    _inherits(FaSuperscript, _React$Component);

    function FaSuperscript() {
        _classCallCheck(this, FaSuperscript);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaSuperscript).apply(this, arguments));
    }

    _createClass(FaSuperscript, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm22.88 30.557142857142857v3.7285714285714278h-5.537142857142854l-3.547142857142857-5.625714285714288-0.5357142857142865-0.937142857142856q-0.17857142857142883-0.1999999999999993-0.24571428571428555-0.46857142857142975h-0.06714285714285673l-0.1999999999999993 0.46857142857142975q-0.2242857142857151 0.4471428571428575-0.5600000000000005 0.9828571428571422l-3.45857142857143 5.580000000000002h-5.7614285714285725v-3.7285714285714278h2.8571428571428577l4.397142857142857-6.494285714285716-4.128571428571429-6.071428571428569h-3.059999999999999v-3.7485714285714273h6.16l3.102857142857143 5.088571428571427q0.042857142857142705 0.08999999999999986 0.5142857142857142 0.937142857142856 0.17714285714285793 0.1999999999999993 0.242857142857142 0.46857142857142975h0.0685714285714294q0.06714285714285673-0.1999999999999993 0.24571428571428555-0.46857142857142975l0.5571428571428569-0.937142857142856 3.1328571428571426-5.088571428571427h5.7357142857142875v3.7485714285714273h-2.7928571428571445l-4.107142857142858 5.960000000000001 4.5528571428571425 6.607142857142858h2.4328571428571415z m14.218571428571426-15.157142857142857v4.6h-11.474285714285713l-0.0671428571428585-0.6028571428571432q-0.08857142857142719-0.6257142857142846-0.08857142857142719-1.0285714285714285 0-1.428571428571427 0.5800000000000018-2.6099999999999994t1.451428571428572-1.9285714285714288 1.8757142857142846-1.4528571428571428 1.8757142857142846-1.217142857142857 1.451428571428572-1.2042857142857137 0.5799999999999983-1.4285714285714288q0-0.8485714285714288-0.6571428571428584-1.395714285714286t-1.5757142857142838-0.5471428571428572q-1.138571428571428 0-2.1657142857142873 0.8714285714285719-0.31428571428571317 0.24285714285714288-0.8042857142857152 0.8471428571428579l-2.3428571428571416-2.0528571428571425q0.5785714285714292-0.8257142857142856 1.404285714285713-1.4714285714285715 1.8528571428571432-1.4528571428571428 4.1971428571428575-1.4528571428571428 2.457142857142859 0 3.9714285714285715 1.3285714285714292t1.518571428571427 3.5385714285714283q0 1.25-0.5457142857142827 2.3000000000000007t-1.3857142857142861 1.7057142857142864-1.817142857142855 1.305714285714286-1.8285714285714292 1.1285714285714281-1.4628571428571426 1.1500000000000004-0.6814285714285724 1.4057142857142857h5.178571428571431v-1.7857142857142865h2.8142857142857167z' })
                )
            );
        }
    }]);

    return FaSuperscript;
}(React.Component);

exports.default = FaSuperscript;