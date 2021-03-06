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

var MdStorage = function (_React$Component) {
    _inherits(MdStorage, _React$Component);

    function MdStorage() {
        _classCallCheck(this, MdStorage);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdStorage).apply(this, arguments));
    }

    _createClass(MdStorage, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm6.640000000000001 18.36v3.2833333333333314h3.3599999999999994v-3.2833333333333314h-3.3599999999999994z m-3.2800000000000002 5v-6.716666666666669h33.28333333333333v6.716666666666669h-33.285z m6.64-11.719999999999999v-3.283333333333333h-3.3599999999999994v3.283333333333333h3.3599999999999994z m-6.640000000000001-5h33.28333333333333v6.716666666666669h-33.285v-6.716666666666668z m3.2800000000000002 21.720000000000002v3.283333333333335h3.3600000000000003v-3.2833333333333314h-3.3599999999999994z m-3.2800000000000002 4.9999999999999964v-6.716666666666669h33.28333333333333v6.716666666666669h-33.285z' })
                )
            );
        }
    }]);

    return MdStorage;
}(React.Component);

exports.default = MdStorage;