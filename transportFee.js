module.exports = transportFee;

function transportFee(shift) {
    if (shift === 'morning') {
        return 'R20';
    } else if (shift === 'afternoon') {
        return 'R10';
    } else if (shift === '') {
        return 'Enter a shift!';
    } else if (shift === 'nightshift') {
        return 'free';
    } else {
        return 'Please enter a valid shift!'
    }
};
