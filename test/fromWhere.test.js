let assert = require("assert");
let fromWhere = require("../fromWhere");

describe('The fromWhere function', function () {

    it('should return "Cape Town" for a numberplate from that start with "CA"', function () {
        var regPlates = fromWhere('CA');
        assert.equal('Cape Town', regPlates);
    });

    it('should return "Bellville" for a numberplate from that start with "CY"', function () {
        var regPlates = fromWhere('CY');
        assert.deepEqual('Bellville', regPlates);
    });

    it('should return "Paarl" for a numberplate from that start with "CJ"', function () {
        var regPlates = fromWhere('CJ');
        assert.deepEqual('Paarl', regPlates);
    });

    it('should return "Some other place!" for a numberplate from that start with "CK" or any where else', function () {
        var regPlates = fromWhere('CK');
        assert.deepEqual('Some other place!', regPlates);

        var regPlates = fromWhere('hhdms');
        assert.deepEqual('Some other place!', regPlates);        
    });

    it('should return "Please enter a valid numberplate!" for an empty numberplate entered', function () {
        var regPlates = fromWhere('');
        assert.deepEqual('Please enter a valid numberplate!', regPlates);
    });

});
