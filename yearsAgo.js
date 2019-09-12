module.exports = yearsAgo;

function yearsAgo(year) {
  
	const newYear = new Date();
    var year2 = newYear.getFullYear();
 	var results = (year2 - year)
    return results;
  	
};