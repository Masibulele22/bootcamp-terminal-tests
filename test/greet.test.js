let assert = require("assert");
let greet = require("../greet");

describe('The greet function', function(){

    it('should greet Andrew correctly', function(){
        assert.equal('Hello, Andre', greet('Andre'));
    });
    
    it('should greet Karen correctly', function(){
        assert.equal('Hello, Karen', greet('Karen'));
    });
});