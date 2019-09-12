module.exports = findItemsOver;


function findItemsOver(shop, threshold){
    var pull = [];
    var threshold = 20;
    for(var i=0; i<shop.length; i++){
        if(shop[i].qty > threshold){
            pull.push(shop[i]);
        }
    }
    return pull;
};
