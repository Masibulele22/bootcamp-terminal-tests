module.exports = countAllFromTown;

function countAllFromTown(str) {
    var fromStellies = [];
    var str2 = str.split(',');

    for (var i = 0; i < str2.length; i++) {
        var str3 = str2[i];
        if (str3.startsWith('CL')) {
            fromStellies.push(str3);
        }
    }
    return fromStellies.length;
};
