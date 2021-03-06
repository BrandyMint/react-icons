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

var FaMap = function (_React$Component) {
    _inherits(FaMap, _React$Component);

    function FaMap() {
        _classCallCheck(this, FaMap);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaMap).apply(this, arguments));
    }

    _createClass(FaMap, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm11.428571428571429 0q0.2900000000000009 0 0.5028571428571436 0.2114285714285714t0.21142857142856997 0.5028571428571429v32.85714285714286q0 0.4471428571428575-0.3800000000000008 0.6257142857142881l-10.714285714285715 5.714285714285715q-0.1571428571428548 0.08857142857142009-0.33428571428571197 0.08857142857142009-0.29000000000000004 0-0.5028571428571429-0.21000000000000085t-0.2114285714285714-0.5042857142857144v-32.85714285714286q0-0.44571428571428573 0.38-0.6242857142857146l10.714285714285715-5.714285714285714q0.15714285714285658-0.08999999999999453 0.33428571428571274-0.08999999999999453z m27.857142857142854 0q0.28999999999999915 0 0.5028571428571453 0.2114285714285714t0.21142857142856997 0.5028571428571429v32.85714285714286q0 0.4471428571428575-0.38000000000000256 0.6257142857142881l-10.714285714285715 5.714285714285715q-0.1571428571428548 0.08857142857142009-0.3342857142857092 0.08857142857142009-0.28999999999999915 0-0.5028571428571418-0.21000000000000085t-0.21142857142857352-0.5042857142857144v-32.85714285714286q0-0.44571428571428573 0.379999999999999-0.6242857142857146l10.714285714285715-5.714285714285714q0.15714285714285836-0.08999999999999453 0.33428571428571274-0.08999999999999453z m-25 0q0.1785714285714306 0 0.3142857142857167 0.06714285714285714l11.42857142857143 5.714285714285714q0.3999999999999986 0.2228571428571433 0.3999999999999986 0.6471428571428568v32.85714285714286q0 0.28999999999999915-0.21142857142856997 0.5028571428571453t-0.5028571428571453 0.21142857142856286q-0.17857142857142705 0-0.31428571428571317-0.06714285714285495l-11.428571428571429-5.714285714285715q-0.40000000000000036-0.2228571428571442-0.40000000000000036-0.6471428571428604v-32.857142857142854q0-0.29000000000000103 0.21142857142857174-0.5028571428571439t0.5028571428571418-0.2114285714285714z' })
                )
            );
        }
    }]);

    return FaMap;
}(React.Component);

exports.default = FaMap;