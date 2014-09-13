
/**
 * Test dependencies.
 */

var assert = require('assert');
var bernstein = require('..');


describe("bernstein", function() {

	it("0-0-x", function() {
		assert.equal(bernstein(0, 0, 0), 1);
		assert.equal(bernstein(0, 0, 0.5), 1);
		assert.equal(bernstein(0, 0, 1), 1);
	});

	it("0-1-x", function() {
		assert.equal(bernstein(0, 1, 0), 1);
		assert.equal(bernstein(0, 1, 0.5), 0.5);
		assert.equal(bernstein(0, 1, 1), 0);
	});


	it("0-2-x", function() {
		assert.equal(bernstein(0, 2, 0), 1);
		assert.equal(bernstein(0, 2, 0.5), 0.25);
		assert.equal(bernstein(0, 2, 1), 0);
	});
	
	it("1-2-x", function() {
		//2x(1-x)
		assert.equal(bernstein(1, 2, 0), 0);
		assert.equal(bernstein(1, 2, 0.5), 0.5);
		assert.equal(bernstein(1, 2, 1), 0);
	});
});
