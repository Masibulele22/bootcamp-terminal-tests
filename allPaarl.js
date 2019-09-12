module.exports = allPaarl;

function allPaarl(regNumbers) {
    var paarlList = [];
    var regNumsPaarl = regNumbers.split(', ');

    for (i = 0; i < regNumsPaarl.length; i++) {
        var regNumbersPaarl = regNumsPaarl[i];
        if (regNumbersPaarl.startsWith('CJ')) {
            paarlList.push(regNumbersPaarl);
        }
    }
    return paarlList;
};
