module.exports = findItemsOver20;

function findItemsOver20(shop) {
    var pull = [];
    for (var i = 0; i < shop.length; i++) {
        if (shop[i].qty > 20) {
            pull.push(shop[i])
        }
    }
    return pull;
};
