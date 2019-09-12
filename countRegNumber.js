module.exports = countRegNumber;

function countRegNumber(str) {
    var splitstr = str.split(',');
    for (var i = 0; i < splitstr.length; i++) {
        var results = splitstr.length;
    } 
    if (str === ''){
        return 'Enter a valid numberplate!';
    }
    return results;
};
