module.exports = mostProfitableDepartment;

function mostProfitableDepartment(depList) {
    var num = 0;
    var total = [];
    for (var i = 0; i < depList.length; i++) {
        if (num < depList[i].sales) {
            num = depList[i].sales;
        }
    }
    for (var i = 0; i < depList.length; i++) {
        if (depList[i].sales == num) {
            total.push(depList[i]);
        }
    }
    return (total[0].department)
};
