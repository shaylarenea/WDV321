// JavaScript Document
//arrayTest.js

let assert = require('chai').assert;

describe('Array', function() {
	
	it('should start empty', function() {
		
		let arr = ["a"];
		
		assert.equal(arr.length, 0);
	});
	
	
	it('should have five items', function() {
		
		let arr = [1,2,3,4];
		
		assert.equal(arr.length, 5);
	});
	
	it("should have less than 10 items", function() {

		let arr = [1,2,3,4];

		assert.isBelow(arr,10);
	})
	
});
