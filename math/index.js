var salary = require('./salary');
var dates = require('./dates');


exports.getSalary = function(sal, percentage) {
	return salary.calcualteBonus(sal, percentage);
};

exports.sumOfTwoNumbers = function(n1, n2) {

	var result = 0;
	result = n1 + n2;

	return result;
};


exports.multiplication = function(n1, n2) {
	return n1 * n2;
};


function division() {

}