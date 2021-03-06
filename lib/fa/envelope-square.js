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

var FaEnvelopeSquare = function (_React$Component) {
    _inherits(FaEnvelopeSquare, _React$Component);

    function FaEnvelopeSquare() {
        _classCallCheck(this, FaEnvelopeSquare);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaEnvelopeSquare).apply(this, arguments));
    }

    _createClass(FaEnvelopeSquare, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm30.714285714285715 2.857142857142857q2.6571428571428584 0 4.5428571428571445 1.8857142857142857t1.8857142857142861 4.542857142857144v21.42857142857143q0 2.6571428571428584-1.8857142857142861 4.5428571428571445t-4.5428571428571445 1.8857142857142861h-21.42857142857143q-2.6571428571428575 0-4.542857142857144-1.8857142857142861t-1.885714285714284-4.5428571428571445v-21.42857142857143q0-2.6571428571428575 1.8857142857142857-4.542857142857144t4.542857142857144-1.885714285714284h21.42857142857143z m0.7142857142857153 23.571428571428573v-9.732857142857142q-0.6914285714285704 0.7814285714285703-1.428571428571427 1.2285714285714278-0.7571428571428562 0.48999999999999844-2.9571428571428555 1.8957142857142841t-3.3814285714285717 2.210000000000001q-2.1857142857142904 1.5414285714285718-3.6614285714285764 1.5414285714285718-1.4714285714285715 0-3.6571428571428584-1.5428571428571445-1.0285714285714285-0.7142857142857153-3.16-2.062857142857144t-3.1828571428571415-2.065714285714286q-0.2657142857142851-0.17714285714285793-0.7357142857142858-0.6000000000000014t-0.6928571428571431-0.6057142857142814v9.734285714285715q0 0.8928571428571423 0.6285714285714281 1.5171428571428578t1.514285714285716 0.6257142857142846h18.571428571428573q0.894285714285715 0 1.518571428571427-0.6257142857142846t0.6242857142857154-1.5171428571428578z m0-12.79q0-0.9142857142857146-0.6142857142857139-1.5628571428571423t-1.528571428571432-0.6471428571428604h-18.571428571428573q-0.8928571428571423 0-1.5171428571428578 0.6257142857142863t-0.6257142857142828 1.517142857142856q0 0.8257142857142856 0.6814285714285706 1.7071428571428573t1.5071428571428562 1.4400000000000013q1.048571428571428 0.7142857142857153 3.0685714285714294 1.985714285714284t2.889999999999999 1.8542857142857159q0.0671428571428585 0.04571428571428626 0.379999999999999 0.25714285714285623t0.4671428571428571 0.31428571428571317 0.46857142857142975 0.28999999999999915 0.524285714285714 0.28999999999999915 0.4800000000000004 0.21142857142856997 0.5028571428571418 0.16714285714285637 0.4571428571428555 0.05714285714285694 0.4571428571428555-0.05714285714285694 0.5028571428571418-0.16571428571428726 0.4800000000000004-0.21142857142856997 0.524285714285714-0.28999999999999915 0.46857142857142975-0.28999999999999915 0.46857142857142975-0.31428571428571317 0.38142857142857167-0.25714285714285623l5.960000000000001-3.8828571428571443q0.7800000000000011-0.5142857142857125 1.4828571428571422-1.395714285714286t0.7042857142857208-1.6428571428571388z' })
                )
            );
        }
    }]);

    return FaEnvelopeSquare;
}(React.Component);

exports.default = FaEnvelopeSquare;