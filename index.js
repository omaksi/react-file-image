'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FileImage = function (_Component) {
  _inherits(FileImage, _Component);

  function FileImage() {
    _classCallCheck(this, FileImage);

    return _possibleConstructorReturn(this, (FileImage.__proto__ || Object.getPrototypeOf(FileImage)).apply(this, arguments));
  }

  _createClass(FileImage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.img.file = this.props.file;
      var reader = new FileReader();
      reader.onload = function (e) {
        _this2.img.src = e.target.result;
      };
      reader.readAsDataURL(this.props.file);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      // to prevent error about wrong props for key and file,
      // but pass all other props (width, height etc...)
      var _props = this.props,
          file = _props.file,
          key = _props.key,
          other = _objectWithoutProperties(_props, ['file', 'key']);

      return _react2.default.createElement('img', _extends({ ref: function ref(img) {
          _this3.img = img;
        } }, other));
    }
  }]);

  return FileImage;
}(_react.Component);

FileImage.propTypes = {
  file: _react.PropTypes.object.isRequired
};
exports.default = FileImage;
module.exports = exports['default'];
