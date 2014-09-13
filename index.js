
/**
 * Module dependencies.
 */

var binomial = require('binomial');


/**
 * Bernstein basis polynomial
 * of degree n.
 *
 * @param {Number} v (0, ..., n)
 * @param {Number} n
 * @param {Number} x ∈ [0, 1]
 * 
 */

module.exports = function(v, n, x) {
  return binomial(n, v) * Math.pow(x, v) * Math.pow(1 -x, n - v);
};

