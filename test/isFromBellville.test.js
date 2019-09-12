let assert = require("assert");
let isFromBellville = require("../isFromBellville");

describe('The isFromBellville function', function () {

    it('should return true for all Bellville numberplates', function () {
        assert.equal(true, isFromBellville('CY 123'));
    });

    it('should return false for numberplates not from Bellville', function () {
        assert.equal(false, isFromBellville('CK 123'));
    });

    it('should return false for an empty string that passed', function () {
        assert.equal(false, isFromBellville(''));
    });
});