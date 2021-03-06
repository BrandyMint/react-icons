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

var MdFlipToFront = function (_React$Component) {
    _inherits(MdFlipToFront, _React$Component);

    function MdFlipToFront() {
        _classCallCheck(this, MdFlipToFront);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdFlipToFront).apply(this, arguments));
    }

    _createClass(MdFlipToFront, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm11.64 35v-3.3599999999999994h3.3599999999999994v3.3599999999999994h-3.3599999999999994z m6.719999999999999 0v-3.3599999999999994h3.2833333333333314v3.3599999999999994h-3.2833333333333314z m13.280000000000001-10v-16.64h-16.64v16.64h16.64z m0-20q1.3283333333333331 0 2.3433333333333337 1.0166666666666666t1.0166666666666657 2.3400000000000007v16.64333333333333q0 1.326666666666668-1.0166666666666657 2.3416666666666686t-2.3433333333333337 1.0166666666666657h-16.64q-1.4066666666666663 0-2.383333333333333-1.0166666666666657t-0.9766666666666666-2.3416666666666686v-16.64333333333333q0-1.328333333333335 0.9766666666666666-2.3433333333333355t2.383333333333333-1.0133333333333336h16.64z m-6.640000000000001 30v-3.3599999999999994h3.3599999999999994v3.3599999999999994h-3.3599999999999994z m-20-20v-3.3599999999999994h3.3599999999999994v3.3599999999999994h-3.3599999999999994z m3.3599999999999994 20q-1.4066666666666663 0-2.383333333333333-1.0166666666666657t-0.9766666666666666-2.34h3.3599999999999994v3.3566666666666656z m-3.3599999999999994-6.640000000000001v-3.3599999999999994h3.3599999999999994v3.3599999999999994h-3.3599999999999994z m0-6.719999999999999v-3.2833333333333314h3.3599999999999994v3.2833333333333314h-3.3599999999999994z' })
                )
            );
        }
    }]);

    return MdFlipToFront;
}(React.Component);

exports.default = MdFlipToFront;