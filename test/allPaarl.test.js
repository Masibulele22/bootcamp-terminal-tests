let assert = require("assert");
let allPaarl = require("../allPaarl");

describe('The allPaarl function', function () {

    var fromPaarl = allPaarl('CK 123, CJ 566, CL 273, CW 562, CL 928');

    it('should return a numberplate from Paarl if it starts with "CJ"', function () {
        assert.deepEqual(['CJ 566'], fromPaarl);
    });

    var fromPaarl2 = allPaarl('CL 678, CJ 123, CJ 566, CX 235, CJ 928');

    it('should return numerous numberplates from Paarl if they start with "CJ"', function () {
        assert.deepEqual(['CJ 123', 'CJ 566', 'CJ 928'], fromPaarl2);
    });

    var fromPaarl3 = allPaarl('');

    it('should return an empty string if an empty string is passed', function () {
        assert.deepEqual([], fromPaarl3);
    });

    var fromPaarl4 = allPaarl('CK 123, CV 566, CL 273, CW 562, CL 928');

    it('should return an empty string if there is no numberplate from Paarl', function () {
        assert.deepEqual([], fromPaarl4);
    });

});
