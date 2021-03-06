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

var MdHighQuality = function (_React$Component) {
    _inherits(MdHighQuality, _React$Component);

    function MdHighQuality() {
        _classCallCheck(this, MdHighQuality);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdHighQuality).apply(this, arguments));
    }

    _createClass(MdHighQuality, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm24.14 22.5v-5h3.3599999999999994v5h-3.3599999999999994z m5.859999999999999 0.8599999999999994v-6.716666666666669q0-0.7050000000000001-0.466666666666665-1.1733333333333338t-1.173333333333332-0.4666666666666668h-5q-0.7033333333333331 0-1.211666666666666 0.4666666666666668t-0.5100000000000016 1.171666666666665v6.716666666666669q0 0.7049999999999983 0.5083333333333329 1.173333333333332t1.2100000000000009 0.466666666666665h1.25v2.5h2.5v-2.4983333333333277h1.25q0.7033333333333331 0 1.1716666666666669-0.466666666666665t0.466666666666665-1.173333333333332z m-11.64 1.6400000000000006v-10h-2.5v4.140000000000001h-3.3599999999999994v-4.140000000000001h-2.5v10h2.5v-3.3599999999999994h3.3599999999999994v3.3599999999999994h2.5z m13.280000000000001-18.36q1.3283333333333331 0 2.3433333333333337 1.0166666666666666t1.0166666666666657 2.3400000000000007v20q0 1.326666666666668-1.0166666666666657 2.3416666666666686t-2.3433333333333337 1.0166666666666657h-23.28333333333333q-1.405000000000002 0-2.3833333333333346-1.0166666666666657t-0.9733333333333345-2.3383333333333383v-20q0-1.33 0.9749999999999996-2.3450000000000006t2.383333333333333-1.0166666666666666h23.28333333333333z' })
                )
            );
        }
    }]);

    return MdHighQuality;
}(React.Component);

exports.default = MdHighQuality;