module.exports = fromWhere;

// function fromWhere(reg) {

// 	if (reg === 'CY') {
//     	return 'Bellville';
//     } else if (reg.startsWith('CJ')) {
//     	return 'Paarl';
//     } else if (reg.startsWith('CA')) {
//     	return 'Cape Town';
//     } else { 
//     	return 'Some other place!';
//     }
// };

function fromWhere(reg) {

	if (reg === 'CY') {
    	return 'Bellville';
    } else if (reg === 'CJ') {
    	return 'Paarl';
    } else if (reg === 'CA') {
    	return 'Cape Town';
	} else if (reg === '') {
    	return 'Please enter a valid numberplate!';
	} else { 
    	return 'Some other place!';
    }

};
