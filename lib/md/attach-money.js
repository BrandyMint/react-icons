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

var MdAttachMoney = function (_React$Component) {
    _inherits(MdAttachMoney, _React$Component);

    function MdAttachMoney() {
        _classCallCheck(this, MdAttachMoney);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdAttachMoney).apply(this, arguments));
    }

    _createClass(MdAttachMoney, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm19.688333333333336 18.203333333333337q1.716666666666665 0.466666666666665 2.8500000000000014 0.9383333333333326t2.383333333333333 1.288333333333334 1.9166666666666679 2.0700000000000003 0.6616666666666653 2.966666666666665q0 2.423333333333332-1.6000000000000014 3.9466666666666654t-4.260000000000002 1.9916666666666671v3.594999999999999h-5v-3.594999999999999q-2.578333333333333-0.5466666666666669-4.258333333333333-2.1883333333333326t-1.8383333333333347-4.216666666666669h3.673333333333334q0.3133333333333326 3.5133333333333354 4.921666666666669 3.5133333333333354 2.421666666666667 0 3.4766666666666666-0.8999999999999986t1.0533333333333346-2.0666666666666664q0-2.8166666666666664-5-4.066666666666666-7.813333333333333-1.7950000000000017-7.813333333333333-6.873333333333333 0-2.2666666666666675 1.6400000000000006-3.866666666666667t4.140000000000001-2.1500000000000004v-3.5900000000000034h5v3.666666666666668q2.578333333333333 0.625 3.9450000000000003 2.3433333333333337t1.4433333333333351 3.9833333333333343h-3.671666666666667q-0.1566666666666663-3.5133333333333336-4.216666666666669-3.5133333333333336-2.0333333333333314 0-3.2433333333333323 0.8599999999999994t-1.211666666666666 2.2666666666666675q0 2.2633333333333354 5 3.591666666666665z' })
                )
            );
        }
    }]);

    return MdAttachMoney;
}(React.Component);

exports.default = MdAttachMoney;