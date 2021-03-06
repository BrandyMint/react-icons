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

var MdVpnLock = function (_React$Component) {
    _inherits(MdVpnLock, _React$Component);

    function MdVpnLock() {
        _classCallCheck(this, MdVpnLock);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdVpnLock).apply(this, arguments));
    }

    _createClass(MdVpnLock, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm16.64 34.92166666666667v-3.2833333333333314q-1.3283333333333331 0-2.3049999999999997-0.9750000000000014t-0.9749999999999996-2.3049999999999997v-1.7166666666666686l-8.046666666666667-7.969999999999999q-0.31333333333333435 1.25-0.31333333333333435 2.9666666666666686 0 5.079999999999998 3.3583333333333343 8.866666666666667t8.283333333333331 4.416666666666664z m14.923333333333332-14.921666666666667h3.3599999999999994q0.07833333333333314 0.5466666666666669 0.07833333333333314 1.6400000000000006 0 6.953333333333333-4.883333333333333 11.836666666666666t-11.756666666666668 4.883333333333333q-6.953333333333333 0-11.836666666666668-4.883333333333333t-4.883333333333334-11.836666666666666q0-6.875 4.883333333333334-11.758333333333333t11.835000000000003-4.881666666666668q2.421666666666667 0 5 0.7800000000000002v4.216666666666666q0 1.33-1.0166666666666657 2.3450000000000006t-2.3416666666666686 1.0166666666666675h-3.3583333333333307v3.280000000000001q0 0.7033333333333331-0.466666666666665 1.211666666666666t-1.1766666666666694 0.5083333333333329h-3.3566666666666674v3.2833333333333314h9.999999999999998q0.7033333333333331 0 1.211666666666666 0.5066666666666677t0.5083333333333329 1.2100000000000009v5h1.6366666666666703q2.423333333333332 0 3.2049999999999983 2.2666666666666657 3.4383333333333326-3.673333333333332 3.4383333333333326-8.986666666666668 0-1.0933333333333337-0.07833333333333314-1.6400000000000006z m3.75-13.360000000000001v-0.7833333333333332q0-1.17-0.8200000000000003-2.0300000000000002t-1.9933333333333323-0.8599999999999985-1.9899999999999984 0.8600000000000003-0.8200000000000003 2.033333333333333v0.7800000000000002h5.6249999999999964z m1.326666666666668 0q0.7033333333333331 0 1.211666666666666 0.5083333333333329t0.509999999999998 1.209999999999999v6.641666666666669q0 0.7033333333333331-0.5083333333333329 1.1716666666666669t-1.2100000000000009 0.466666666666665h-8.283333333333331q-0.6999999999999993 0-1.2100000000000009-0.466666666666665t-0.5116666666666632-1.1716666666666669v-6.639999999999999q0-0.7033333333333331 0.5083333333333329-1.211666666666667t1.211666666666666-0.5099999999999998v-0.7833333333333332q0-1.7166666666666668 1.211666666666666-2.966666666666667t2.9299999999999997-1.2483333333333344 2.9299999999999997 1.25 1.211666666666666 2.9666666666666672v0.7833333333333332z' })
                )
            );
        }
    }]);

    return MdVpnLock;
}(React.Component);

exports.default = MdVpnLock;