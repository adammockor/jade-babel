'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.enhanceJade = exports.createFilter = undefined;

var _babelCore = require('babel-core');

/**
 * Creates a babel filter for jade.
 * @param  {object}   [babelOptions] the babel's options object
 * @return {function}                the created filter
 */
function createFilter(babelOptions) {
  var optionManager = new _babelCore.OptionManager();
  optionManager.init(babelOptions);

  return function (contents) {
    var output = (0, _babelCore.transform)(contents, optionManager.options);
    return output.code;
  };
}

/**
 * Enhances the provided jade module.
 * @param  {object} jade           the jade module to enhance
 * @param  {object} [babelOptions] the babel's options object
 * @return {object}                the enhanced Jade module
 */
function enhanceJade(jade, babelOptions) {
  var filter = createFilter(babelOptions);
  jade.filters.babel = filter;
  return jade;
}

/**
 * Creates a filter or enhance a jade module.
 * If a jade module is provided, it will have the same result as {@link enhanceJade}.
 * Otherwise it will return the same value as {@link createFilter}.
 * @deprecated Prefer using the specific functions ({@link createFilter} and {@link enhanceJade}).
 * @param  {object} [babelOptions] the babel's options object
 * @param  {object} [jade]         the jade module to enhance
 * @return {function|object}       the created filter or the enhanced Jade module
 */
function jadeBabel(babelOptions, jade) {
  if (jade) {
    return enhanceJade(jade, babelOptions);
  }
  return createFilter(babelOptions);
}

exports.default = jadeBabel;
exports.createFilter = createFilter;
exports.enhanceJade = enhanceJade;