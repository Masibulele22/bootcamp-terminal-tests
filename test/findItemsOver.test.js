let assert = require("assert");
let findItemsOver = require("../findItemsOver");

describe('The findItemsOver function', function () {

    var shop = [
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 3},
    ];

    it('should return the exact object that is above twenty: pears and bananas', function () {
        assert.deepEqual([ { name: 'pears', qty: 37 }, { name: 'bananas', qty: 27 } ], findItemsOver(shop));
    });

    var shop2 = [
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 21},
        {name : 'bananas', qty : 29},
        {name : 'apples', qty : 10},
    ];

    it('should return the exact object that is above twenty: pears and bananas', function () {
        assert.deepEqual([{name : 'pears', qty : 21}, {name : 'bananas', qty : 29}], findItemsOver(shop2));
    });

});