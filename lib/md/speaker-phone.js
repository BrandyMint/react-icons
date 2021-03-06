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

var MdSpeakerPhone = function (_React$Component) {
    _inherits(MdSpeakerPhone, _React$Component);

    function MdSpeakerPhone() {
        _classCallCheck(this, MdSpeakerPhone);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdSpeakerPhone).apply(this, arguments));
    }

    _createClass(MdSpeakerPhone, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm25 33.36v-13.36h-10v13.36h10z m-0.23333333333333428-16.641666666666666q0.7800000000000011 0 1.326666666666668 0.5500000000000007t0.5466666666666669 1.326666666666668v16.171666666666663q0 0.7800000000000011-0.5466666666666669 1.326666666666668t-1.3283333333333331 0.5466666666666669h-9.531666666666666q-0.7833333333333332 0-1.3283333333333331-0.5466666666666669t-0.5466666666666669-1.3283333333333331v-16.173333333333336q0-0.783333333333335 0.5466666666666669-1.3666666666666671t1.3283333333333331-0.586666666666666z m-4.766666666666666-15.076666666666668q7.5 8.881784197001252e-16 12.89 5.3900000000000015l-2.3433333333333337 2.343333333333333q-4.375-4.375-10.546666666666667-4.375t-10.546666666666667 4.371666666666668l-2.343333333333333-2.3416666666666677q5.39-5.390000000000001 12.89-5.390000000000001z m-8.36 10.155000000000001q3.4383333333333344-3.4383333333333344 8.36-3.4383333333333344t8.36 3.4383333333333344l-2.421666666666667 2.3433333333333337q-2.421666666666667-2.423333333333334-5.938333333333333-2.423333333333334t-5.938333333333334 2.424999999999999z' })
                )
            );
        }
    }]);

    return MdSpeakerPhone;
}(React.Component);

exports.default = MdSpeakerPhone;