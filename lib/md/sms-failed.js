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

var MdSmsFailed = function (_React$Component) {
    _inherits(MdSmsFailed, _React$Component);

    function MdSmsFailed() {
        _classCallCheck(this, MdSmsFailed);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdSmsFailed).apply(this, arguments));
    }

    _createClass(MdSmsFailed, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm21.64 16.64v-6.640000000000001h-3.2833333333333314v6.640000000000001h3.2833333333333314z m0 6.719999999999999v-3.3599999999999994h-3.2833333333333314v3.3599999999999994h3.2833333333333314z m11.719999999999999-20q1.3283333333333331 0 2.3049999999999997 0.9766666666666666t0.9750000000000014 2.3049999999999997v20q0 1.3283333333333331-0.9766666666666666 2.3433333333333337t-2.306666666666665 1.0166666666666657h-23.35666666666667l-6.640000000000001 6.640000000000001v-30q0-1.3283333333333331 0.9766666666666666-2.3049999999999997t2.3049999999999997-0.9750000000000001h26.71666666666667z' })
                )
            );
        }
    }]);

    return MdSmsFailed;
}(React.Component);

exports.default = MdSmsFailed;