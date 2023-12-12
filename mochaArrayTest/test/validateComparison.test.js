const assert = require('chai').assert;
const compareNumbers = require('../app/validateComparison');

describe('compareNumbers', function () {
  it('should return the larger of two values', function () {
   
    assert.equal(compareNumbers(5, 6), 6);
    assert.equal(compareNumbers(4, 3), 4);
    assert.equal(compareNumbers(3, 3), 'The amounts are equal');
    assert.equal(compareNumbers('a', 5), 'Please enter a number in Value 1');
    assert.equal(compareNumbers(5, 'a'), 'Please enter a number in Value 2');
    
  });
});
