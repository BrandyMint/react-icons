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

var TiTree = function (_React$Component) {
    _inherits(TiTree, _React$Component);

    function TiTree() {
        _classCallCheck(this, TiTree);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiTree).apply(this, arguments));
    }

    _createClass(TiTree, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm34.63333333333334 28.958333333333336l-4.500000000000007-5.625h1.533333333333335c0.6216666666666661 0 1.1916666666666664-0.34499999999999886 1.4783333333333353-0.8966666666666683s0.2433333333333323-1.2166666666666686-0.11333333333333684-1.7250000000000014l-11.666666666666668-16.666666666666668c-0.5300000000000011-0.7533333333333334-1.5666666666666664-0.9366666666666665-2.323333333333334-0.41000000000000014-0.14999999999999858 0.10666666666666647-0.26333333333333186 0.2450000000000001-0.36666666666666714 0.3866666666666667-0.043333333333333 0.025000000000000355-11.71 16.69166666666667-11.71 16.69166666666667-0.35666666666666647 0.5100000000000016-0.40000000000000036 1.173333333333332-0.11333333333333329 1.7250000000000014s0.8600000000000039 0.8949999999999996 1.481666666666671 0.8949999999999996h1.5333333333333332l-4.500000000000001 5.625c-0.40000000000000036 0.5-0.47999999999999954 1.1866666666666674-0.20333333333333314 1.7666666666666657 0.2783333333333333 0.5733333333333341 0.8633333333333333 0.9416666666666664 1.503333333333333 0.9416666666666664h11.66666666666667v5.0000000000000036c0 0.9216666666666669 0.7466666666666661 1.6666666666666643 1.6666666666666679 1.6666666666666643s1.6666666666666679-0.7449999999999974 1.6666666666666679-1.6666666666666643v-5h11.666666666666671c0.6400000000000006 0 1.2250000000000014-0.36666666666666714 1.5-0.9433333333333316 0.28000000000000114-0.5783333333333331 0.20000000000000284-1.2633333333333319-0.20000000000000284-1.7666666666666657z m-12.966666666666672-0.625v-8.333333333333336c0-0.9216666666666669-0.7466666666666661-1.6666666666666679-1.6666666666666679-1.6666666666666679s-1.6666666666666679 0.745000000000001-1.6666666666666679 1.6666666666666679v8.333333333333336h-8.199999999999998l4.500000000000002-5.625c0.40000000000000036-0.5 0.4800000000000004-1.1866666666666674 0.20333333333333314-1.7666666666666657-0.278333333333336-0.571666666666669-0.8633333333333351-0.94166666666667-1.5033333333333356-0.94166666666667h-1.8000000000000007l8.466666666666667-12.093333333333334 8.466666666666665 12.093333333333334h-1.7999999999999972c-0.6400000000000006 0-1.2250000000000014 0.36666666666666714-1.5 0.9433333333333316-0.28000000000000114 0.5783333333333331-0.1999999999999993 1.2633333333333319 0.1999999999999993 1.7666666666666657l4.5000000000000036 5.623333333333338h-8.200000000000003z' })
                )
            );
        }
    }]);

    return TiTree;
}(React.Component);

exports.default = TiTree;