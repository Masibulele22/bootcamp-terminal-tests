let assert = require("assert");
let mostProfitableDepartment = require("../mostProfitableDepartment");

describe('The mostProfitableDepartment function', function () {

    var data = mostProfitableDepartment([
        {department: 'hardware', sales: 4500, day: 'Monday'},
        {department: 'outdoor', sales: 1500, day: 'Monday'},
        {department: 'carpentry', sales: 5500, day: 'Monday'}
    ]);

    it('should return the carpentry as the most profitable department in this data set', function () {
        assert.equal(['carpentry'], data);
    });

    var data2 = mostProfitableDepartment([
        {department: 'hardware', sales: 7500, day: 'Tuesday'},
        {department: 'outdoor', sales: 2505, day: 'Tuesday'},
        {department: 'carpentry', sales: 1540, day: 'Tuesday'}
    ]);

    it('should return the hardware as the most profitable department in this data set', function () {
        assert.equal(['hardware'], data2);
    });

    var data3 = mostProfitableDepartment([
        {department: 'hardware', sales: 1500, day: 'Wednesday'},
        {department: 'outdoor', sales: 8507, day: 'Wednesday'},
        {department: 'carpentry', sales: 8009, day: 'Wednesday'}
    ]);

    it('should return the outdoor as the most profitable department in this data set', function () {
        assert.equal(['outdoor'], data3);
    });

});
