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

var FaPinterestSquare = function (_React$Component) {
    _inherits(FaPinterestSquare, _React$Component);

    function FaPinterestSquare() {
        _classCallCheck(this, FaPinterestSquare);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaPinterestSquare).apply(this, arguments));
    }

    _createClass(FaPinterestSquare, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm30.714285714285715 2.857142857142857q2.6571428571428584 0 4.5428571428571445 1.8857142857142857t1.8857142857142861 4.542857142857144v21.42857142857143q0 2.6571428571428584-1.8857142857142861 4.5428571428571445t-4.5428571428571445 1.8857142857142861h-16.182857142857145q1.8971428571428604-2.722857142857144 2.411428571428573-4.68571428571429 0.1999999999999993-0.7600000000000016 1.1814285714285724-4.667142857142856 0.46857142857142975 0.8714285714285701 1.6400000000000006 1.4957142857142856t2.5114285714285707 0.6257142857142846q4.039999999999999 0 6.595714285714287-3.2928571428571445t2.557142857142857-8.337142857142851q0-1.8757142857142846-0.7828571428571429-3.628571428571428t-2.154285714285713-3.0999999999999996-3.4057142857142857-2.16714285714286-4.394285714285719-0.814285714285715q-2.321428571428573 0-4.342857142857145 0.6357142857142861t-3.414285714285711 1.7071428571428573-2.4000000000000004 2.442857142857143-1.4857142857142858 2.8571428571428577-0.47714285714285687 2.9571428571428555q0 2.2785714285714285 0.8814285714285717 4.018571428571427t2.5999999999999996 2.4571428571428555q0.28999999999999915 0.10999999999999943 0.524285714285714 0t0.32428571428571473-0.42571428571428527q0.22142857142857153-0.9828571428571422 0.33285714285714363-1.361428571428572 0.13428571428571345-0.514285714285716-0.24571428571428555-0.937142857142856-1.1142857142857139-1.3857142857142861-1.1142857142857139-3.3485714285714288 0-3.3485714285714288 2.3100000000000005-5.725714285714286t6.038571428571428-2.3771428571428572q3.325714285714284 0 5.190000000000001 1.8085714285714296t1.8642857142857139 4.685714285714287q0 3.7514285714285727-1.5071428571428562 6.385714285714286t-3.87142857142857 2.6342857142857135q-1.3428571428571416 0-2.1671428571428564-0.9714285714285715t-0.514285714285716-2.3099999999999987q0.17999999999999972-0.7571428571428562 0.5928571428571416-2.064285714285713t0.6571428571428584-2.277142857142856 0.24714285714285822-1.662857142857142q0-1.0942857142857143-0.5914285714285725-1.8185714285714276t-1.6857142857142868-0.725714285714286q-1.361428571428572 0-2.3099999999999987 1.2600000000000016t-0.9485714285714284 3.114285714285714q0 1.6071428571428577 0.5357142857142865 2.6999999999999993l-2.185714285714287 9.24285714285714q-0.5371428571428574 2.232857142857142-0.15714285714285658 5.671428571428571h-4.085714285714285q-2.654285714285715 0-4.542857142857144-1.8857142857142861t-1.8857142857142892-4.544285714285714v-21.42857142857143q0-2.6571428571428575 1.8857142857142857-4.542857142857144t4.542857142857144-1.885714285714284h21.42857142857143z' })
                )
            );
        }
    }]);

    return FaPinterestSquare;
}(React.Component);

exports.default = FaPinterestSquare;