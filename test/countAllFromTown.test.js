let assert = require("assert");
let countAllFromTown = require("../countAllFromTown");

describe('The countAllFromTown function', function () {

    var fromStellies = countAllFromTown('CA 124,CY 567,CL 345,CA 456,CL 341');

    it('should return the exact number of numberplates for a particular town eg.Stellenbosch', function () {
        assert.equal(2, fromStellies);
    });

    var fromStellies2 = countAllFromTown('CA 124,CY 567,CA 456,CX 341');

    it("should return zero for a string of passed numberplates that all don't belong to a particular town eg.Stellenbosch", function () {
        assert.equal(0, fromStellies2);
    });

    var fromStellies3 = countAllFromTown('CL 124,CL 567,CA 456,CL 341');

    it("should return three for a string of numberplates that do belong to a particular town eg.Stellenbosch", function () {
        assert.equal(3, fromStellies3);
    });
    
});