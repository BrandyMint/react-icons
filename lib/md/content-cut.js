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

var MdContentCut = function (_React$Component) {
    _inherits(MdContentCut, _React$Component);

    function MdContentCut() {
        _classCallCheck(this, MdContentCut);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdContentCut).apply(this, arguments));
    }

    _createClass(MdContentCut, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.640000000000004 5h4.9999999999999964v1.6400000000000006l-11.64 11.716666666666665-3.3599999999999994-3.3566666666666656z m-11.640000000000004 15.86q0.8599999999999994 0 0.8599999999999994-0.8599999999999994t-0.8599999999999994-0.8599999999999994-0.8599999999999994 0.8599999999999994 0.8599999999999994 0.8599999999999994z m-10 12.5q1.3283333333333331 0 2.3433333333333337-0.9766666666666666t1.0166666666666657-2.383333333333333-1.0166666666666657-2.383333333333333-2.3433333333333337-0.9766666666666666-2.3433333333333337 0.9766666666666666-1.0166666666666666 2.383333333333333 1.0166666666666666 2.383333333333333 2.3433333333333337 0.9766666666666666z m0-20q1.3283333333333331 0 2.3433333333333337-0.9766666666666666t1.0166666666666675-2.383333333333333-1.0166666666666675-2.383333333333333-2.3433333333333337-0.9766666666666666-2.3433333333333337 0.9766666666666666-1.0166666666666657 2.383333333333333 1.0166666666666666 2.383333333333333 2.343333333333333 0.9766666666666683z m6.093333333333334-0.625l20.546666666666667 20.626666666666665v1.6383333333333354h-5l-11.64-11.64-3.9066666666666663 3.9066666666666663q0.5466666666666669 1.1716666666666669 0.5466666666666669 2.7333333333333343 0 2.7366666666666646-1.9533333333333331 4.689999999999998t-4.686666666666667 1.9533333333333402-4.69-1.9533333333333331-1.9533333333333331-4.690000000000005 1.9533333333333331-4.686666666666667 4.69-1.9533333333333331q1.5616666666666674 0 2.7333333333333343 0.5466666666666669l3.9066666666666663-3.9066666666666663-3.906666666666668-3.9066666666666663q-1.1716666666666669 0.5466666666666669-2.7333333333333325 0.5466666666666669-2.7366666666666664 0-4.69-1.9533333333333331t-1.9533333333333331-4.686666666666667 1.9533333333333331-4.69 4.69-1.9533333333333331 4.683333333333335 1.953333333333334 1.9566666666666652 4.6899999999999995q0 1.5616666666666674-0.5466666666666669 2.7333333333333343z' })
                )
            );
        }
    }]);

    return MdContentCut;
}(React.Component);

exports.default = MdContentCut;