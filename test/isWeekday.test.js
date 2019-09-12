let assert = require("assert");
let isWeekday = require("../isWeekday");

describe('The isWeekday function', function () {

    it('should return true if the passed string is a weekday', function () {
        assert.equal(true, isWeekday('Monday', 'Monday, Tuesday, Wednesday, Thursday, Friday'));
    });

    it('should return false if the passed string is not in valid a weekday format with a capitalized first letter eg. monday instead of Monday', function () {
        assert.equal(false, isWeekday('monday', 'Monday, Tuesday, Wednesday, Thursday, Friday'));
    });

    it('should return false if the passed string is not a weekday', function () {
        assert.equal(false, isWeekday('Saturday', 'Monday, Tuesday, Wednesday, Thursday, Friday'));
    });

    it('should return false if the passed string is empty', function () {
        assert.equal(false, isWeekday('', 'Monday, Tuesday, Wednesday, Thursday, Friday'));
    });

    it('should return false if the passed string is not a valid weekday', function () {
        assert.equal(false, isWeekday('dvedvsasa', 'Monday, Tuesday, Wednesday, Thursday, Friday'));
    });

});