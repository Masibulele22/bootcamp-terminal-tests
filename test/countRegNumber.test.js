let assert = require("assert");
let countRegNumber = require("../countRegNumber");

describe('The countRegNumber function', function () {

    it('should return a value of three if three numberplates are passed through', function () {
        assert.equal(3, countRegNumber('CA 1223, CK 4667, CY 661'));
    });

    it('should return a value of two if two numberplates are passed through', function () {
        assert.equal(2, countRegNumber('CX 571, CV 4678'));
    });

    it('should return a value of zero if no numberplates are passed through', function () {
        assert.equal('Enter a valid numberplate!', countRegNumber(''));
    });

});
