let assert = require("assert");
let regCheck = require("../regCheck");

describe('The regCheck function', function(){

    it('should return true for numberplates belonging to thier respective locations', function(){
        assert.equal(true, regCheck('KL 123 GP', 'GP'));
    });

    it('should return false for numberplates not belonging to thier respective locations', function(){
        assert.equal(false, regCheck('JK 882 EC', 'GP'));
    });
});