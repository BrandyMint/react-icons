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

var MdDescription = function (_React$Component) {
    _inherits(MdDescription, _React$Component);

    function MdDescription() {
        _classCallCheck(this, MdDescription);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdDescription).apply(this, arguments));
    }

    _createClass(MdDescription, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm21.64 15h9.216666666666669l-9.216666666666669-9.14v9.14z m5 8.36v-3.3599999999999994h-13.283333333333333v3.3599999999999994h13.283333333333333z m0 6.640000000000001v-3.3599999999999994h-13.283333333333333v3.3599999999999994h13.283333333333333z m-3.280000000000001-26.64l10 10v20q0 1.3283333333333331-1.0166666666666657 2.3049999999999997t-2.3416666666666686 0.9750000000000014h-20.001666666666665q-1.3266666666666662 0-2.341666666666667-0.9766666666666666t-1.0166666666666666-2.306666666666665l0.08000000000000007-26.71666666666667q0-1.33 0.9766666666666666-2.3066666666666666t2.3016666666666667-0.9733333333333336h13.36z' })
                )
            );
        }
    }]);

    return MdDescription;
}(React.Component);

exports.default = MdDescription;