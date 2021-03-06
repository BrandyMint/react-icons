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

var FaQuestionCircle = function (_React$Component) {
    _inherits(FaQuestionCircle, _React$Component);

    function FaQuestionCircle() {
        _classCallCheck(this, FaQuestionCircle);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaQuestionCircle).apply(this, arguments));
    }

    _createClass(FaQuestionCircle, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm22.857142857142858 30.714285714285715v-4.285714285714285q0-0.31428571428571317-0.1999999999999993-0.5142857142857125t-0.514285714285716-0.20000000000000284h-4.285714285714285q-0.31428571428571317 0-0.514285714285716 0.1999999999999993t-0.1999999999999993 0.514285714285716v4.285714285714285q0 0.31428571428571317 0.1999999999999993 0.5142857142857125t0.5142857142857125 0.1999999999999993h4.285714285714285q0.31428571428571317 0 0.5142857142857125-0.1999999999999993t0.1999999999999993-0.5142857142857125z m5.714285714285715-15q0-1.9642857142857153-1.2385714285714293-3.638571428571428t-3.0900000000000034-2.5900000000000016-3.7971428571428554-0.9142857142857146q-5.422857142857142 0-8.28 4.751428571428573-0.3342857142857145 0.5357142857142865 0.17857142857142883 0.9371428571428577l2.9485714285714284 2.232857142857142q0.15714285714285658 0.13428571428571345 0.4242857142857144 0.13428571428571345 0.35714285714285765 0 0.5599999999999987-0.2671428571428578 1.1828571428571415-1.5171428571428578 1.9200000000000017-2.0528571428571425 0.7571428571428562-0.5357142857142865 1.9200000000000017-0.5357142857142865 1.071428571428573 0 1.9085714285714275 0.581428571428571t0.8371428571428581 1.3171428571428567q0 0.8471428571428561-0.4471428571428575 1.3599999999999994t-1.518571428571427 1.0042857142857144q-1.4057142857142857 0.6257142857142846-2.578571428571429 1.9314285714285724t-1.1714285714285708 2.8000000000000007v0.8042857142857152q0 0.31428571428571317 0.1999999999999993 0.5142857142857125t0.514285714285716 0.1999999999999993h4.285714285714285q0.31428571428571317 0 0.5142857142857125-0.1999999999999993t0.1999999999999993-0.5142857142857125q0-0.4242857142857126 0.4800000000000004-1.1042857142857159t1.217142857142857-1.1042857142857159q0.7142857142857153-0.3999999999999986 1.0942857142857143-0.6357142857142861t1.0285714285714285-0.7828571428571429 0.9914285714285711-1.071428571428573 0.6257142857142846-1.3500000000000014 0.27857142857142847-1.8085714285714296z m8.571428571428573 4.285714285714285q0 4.665714285714287-2.299999999999997 8.604285714285716t-6.237142857142857 6.238571428571426-8.605714285714292 2.3000000000000043-8.6-2.3000000000000043-6.242857142857143-6.238571428571426-2.295714285714286-8.604285714285716 2.3000000000000003-8.604285714285714 6.234285714285714-6.238571428571428 8.604285714285714-2.3000000000000003 8.605714285714285 2.3000000000000003 6.238571428571426 6.238571428571428 2.298571428571435 8.604285714285714z' })
                )
            );
        }
    }]);

    return FaQuestionCircle;
}(React.Component);

exports.default = FaQuestionCircle;