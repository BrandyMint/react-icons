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

var FaHashtag = function (_React$Component) {
    _inherits(FaHashtag, _React$Component);

    function FaHashtag() {
        _classCallCheck(this, FaHashtag);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaHashtag).apply(this, arguments));
    }

    _createClass(FaHashtag, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm22.12 22.857142857142858l1.428571428571427-5.714285714285715h-5.671428571428571l-1.428571428571427 5.714285714285715h5.671428571428571z m17.142857142857142-11.25l-1.25 5q-0.15714285714285836 0.5357142857142847-0.6928571428571431 0.5357142857142847h-7.300000000000001l-1.428571428571427 5.714285714285715h6.942857142857143q0.33428571428571274 0 0.5571428571428569 0.2671428571428578 0.2242857142857133 0.31428571428571317 0.13571428571428612 0.6257142857142846l-1.25 5q-0.11142857142856855 0.5357142857142847-0.691428571428574 0.5357142857142847h-7.297142857142859l-1.8085714285714296 7.321428571428569q-0.15714285714285836 0.5357142857142847-0.6914285714285704 0.5357142857142847h-5q-0.35714285714285765 0-0.5799999999999983-0.2671428571428578-0.1999999999999993-0.2671428571428578-0.13428571428571345-0.6257142857142881l1.7428571428571438-6.964285714285715h-5.671428571428571l-1.8085714285714296 7.321428571428569q-0.15714285714285658 0.5357142857142847-0.6914285714285722 0.5357142857142847h-5.022857142857141q-0.3342857142857145 0-0.5571428571428569-0.2671428571428578-0.20285714285714285-0.2671428571428578-0.13571428571428612-0.6257142857142881l1.741428571428571-6.964285714285701h-6.942857142857143q-0.3328571428571432 0-0.5571428571428574-0.2671428571428578-0.19999999999999996-0.2671428571428578-0.13428571428571434-0.6257142857142846l1.25-5q0.1557142857142857-0.5357142857142847 0.6928571428571426-0.5357142857142847h7.300000000000001l1.4285714285714288-5.714285714285715h-6.942857142857143q-0.3342857142857145 0-0.5571428571428569-0.2671428571428578-0.2242857142857142-0.31428571428571317-0.13571428571428568-0.6257142857142846l1.2499999999999996-5q0.10999999999999943-0.5357142857142847 0.6914285714285713-0.5357142857142847h7.297142857142856l1.8085714285714296-7.321428571428571q0.15714285714285658-0.5357142857142856 0.7142857142857135-0.5357142857142856h5.000000000000002q0.33428571428571274 0 0.5571428571428569 0.2671428571428569 0.20285714285714107 0.2671428571428569 0.13571428571428612 0.6257142857142859l-1.741428571428571 6.9642857142857135h5.671428571428571l1.807142857142857-7.321428571428571q0.15714285714285836-0.5357142857142856 0.7142857142857153-0.5357142857142856h5q0.33428571428571274 0 0.5571428571428569 0.2671428571428569 0.20285714285714107 0.2671428571428569 0.13571428571428612 0.6257142857142859l-1.7428571428571438 6.9642857142857135h6.9428571428571395q0.33428571428571274 0 0.5571428571428569 0.2671428571428578 0.20285714285714107 0.2671428571428578 0.13571428571428612 0.6257142857142863z' })
                )
            );
        }
    }]);

    return FaHashtag;
}(React.Component);

exports.default = FaHashtag;