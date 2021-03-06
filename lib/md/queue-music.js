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

var MdQueueMusic = function (_React$Component) {
    _inherits(MdQueueMusic, _React$Component);

    function MdQueueMusic() {
        _classCallCheck(this, MdQueueMusic);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdQueueMusic).apply(this, arguments));
    }

    _createClass(MdQueueMusic, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28.36 10h8.283333333333331v3.3599999999999994h-5v15q0 2.0333333333333314-1.4866666666666681 3.5166666666666657t-3.5166666666666657 1.4833333333333343-3.513333333333332-1.4833333333333343-1.4833333333333343-3.5166666666666657 1.4833333333333343-3.5166666666666657 3.5166666666666657-1.4833333333333343q0.6233333333333348 0 1.7166666666666686 0.3133333333333326v-13.673333333333332z m-23.36 16.64v-3.2833333333333314h13.36v3.2833333333333314h-13.36z m20-10v3.3599999999999994h-20v-3.3599999999999994h20z m0-6.640000000000001v3.3599999999999994h-20v-3.3599999999999994h20z' })
                )
            );
        }
    }]);

    return MdQueueMusic;
}(React.Component);

exports.default = MdQueueMusic;