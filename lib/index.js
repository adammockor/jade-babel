'use strict';

var _jadeBabel = require('./jadeBabel');

var _jadeBabel2 = _interopRequireDefault(_jadeBabel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = Object.assign(_jadeBabel2.default, {
  createFilter: _jadeBabel.createFilter,
  enhanceJade: _jadeBabel.enhanceJade
});