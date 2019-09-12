let assert = require("assert");
let yearsAgo = require("../yearsAgo");

describe('The yearsAgo function', function () {

    it('should return the exact number of years for the year that is entered with respect to the current time', function () {
        assert.equal(2, yearsAgo(2017));
    });

    it('should return the exact number of years for the year that is entered with respect to the current time', function () {
        assert.equal(24, yearsAgo(1995));
    });

    it('should return the exact number of years for the year that is entered with respect to the current time', function () {
        assert.equal(0, yearsAgo(2019));
    });
});