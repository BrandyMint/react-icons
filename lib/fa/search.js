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

var FaSearch = function (_React$Component) {
    _inherits(FaSearch, _React$Component);

    function FaSearch() {
        _classCallCheck(this, FaSearch);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaSearch).apply(this, arguments));
    }

    _createClass(FaSearch, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm27.142857142857142 18.571428571428573q0-4.12857142857143-2.935714285714287-7.064285714285715t-7.064285714285713-2.935714285714287-7.064285714285713 2.935714285714285-2.935714285714286 7.064285714285717 2.935714285714286 7.064285714285713 7.064285714285713 2.935714285714287 7.064285714285713-2.935714285714287 2.935714285714287-7.064285714285713z m11.428571428571427 18.571428571428573q0 1.1600000000000037-0.8485714285714252 2.008571428571429t-2.008571428571429 0.8485714285714252q-1.2057142857142864 0-2.008571428571429-0.8485714285714252l-7.657142857142858-7.634285714285717q-3.991428571428571 2.768571428571427-8.90285714285714 2.768571428571427-3.1900000000000013 0-6.102857142857143-1.240000000000002t-5.022857142857143-3.3485714285714288-3.3485714285714283-5.022857142857145-1.2428571428571444-6.102857142857136 1.242857142857143-6.107142857142859 3.345714285714285-5.0214285714285705 5.022857142857142-3.3485714285714288 6.102857142857143-1.237142857142857 6.105714285714285 1.237142857142857 5.022857142857145 3.3485714285714288 3.3485714285714288 5.022857142857143 1.2371428571428602 6.105714285714287q0 4.9085714285714275-2.765714285714285 8.904285714285717l7.657142857142855 7.657142857142858q0.8242857142857147 0.8242857142857147 0.8242857142857147 2.00714285714286z' })
                )
            );
        }
    }]);

    return FaSearch;
}(React.Component);

exports.default = FaSearch;