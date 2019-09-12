let assert = require("assert");
let countAllPaarl = require("../countAllPaarl");

describe('The countAllPaarl function', function () {

    var string1 = countAllPaarl('CL 678, CJ 123, CJ 566, CX 235, CJ 928');

    it('should return 3 if the number of numberplates from Paarl are three', function () {
        assert.equal(3, string1);
    });

    var string2 = countAllPaarl('CJ 123, CJ 566, CJ 273, CJ 562, CJ 928');

    it('should return 5 if the number of numberplates from Paarl are five', function () {
        assert.equal(5, string2);
    });

    var string3 = countAllPaarl('CA 123, CL 566, CY 273, CK 562, CX 928');

    it('should return 0 if there is no numberplates from Paarl', function () {
        assert.equal(0, string3);
    });

});
