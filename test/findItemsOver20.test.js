let assert = require("assert");
let findItemsOver20 = require("../findItemsOver20");

describe('The findItemsOver20 function', function () {

    var itemList = [
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 3},
    ];

    it('should return the exact object that is above twenty: pears and bananas', function () {
        assert.deepEqual([ { name: 'pears', qty: 37 }, { name: 'bananas', qty: 27 } ], findItemsOver20(itemList));
    });

    var itemList2 = [
        {name : 'apples', qty : 30},
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 38},
    ];

    it('should return the exact object that is above twenty: apples, pears and bananas', function () {
        assert.deepEqual([{name : 'apples', qty : 30}, {name : 'pears', qty : 37}, {name : 'bananas', qty : 27}, {name : 'apples', qty : 38}], findItemsOver20(itemList2));
    });

    var itemList3 = [
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 17},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 8},
    ];

    it('should return the exact object that is above twenty: bananas', function () {
        assert.deepEqual([{name : 'bananas', qty : 27}], findItemsOver20(itemList3));
    });

});
