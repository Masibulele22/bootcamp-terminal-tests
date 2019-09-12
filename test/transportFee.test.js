let assert = require("assert");
let transportFee = require("../transportFee");

describe('The transportFee function', function () {

    var shift2 = transportFee('morning');

    it('should return "R20" if a user inserts a "morning" string', function () {
        assert.equal('R20', shift2);
    });

    var shift3 = transportFee('afternoon');

    it('should return "R10" if a user inserts a "afternoon" string', function () {
        assert.equal('R10', shift3);
    });

    var shift4 = transportFee('nightshift');

    it('should return "free" if a user inserts a "nightshift" string', function () {
        assert.equal('free', shift4);
    });

    var shift5 = transportFee('');

    it('should return "Enter a shift!" if a user inserts an empty string', function () {
        assert.equal('Enter a shift!', shift5);
    });

    var shift6 = transportFee('gvgvuh');

    it('should return "Please enter a valid shift!" if a user inserts an invalid string', function () {
        assert.equal('Please enter a valid shift!', shift6);
    });

});
