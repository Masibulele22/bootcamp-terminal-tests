let assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill");

describe('The totalPhoneBill function', function () {

    it('should return the exact total for an amount of entered calls and smses', function () {
        assert.equal('R10.85', totalPhoneBill('sms, call, sms, call, call, sms, sms'));
    });

    it('should return the exact total for an amount of entered calls and smses', function () {
        assert.equal('R4.05', totalPhoneBill('sms, sms, call'));
    });

    it('should return a total of zero for no amount of entered calls and smses', function () {
        assert.equal('R0.00', totalPhoneBill(''));
    });
});
