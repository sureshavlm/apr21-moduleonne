var sudhakarModule = require('./math/'); 
var salaryModule = require('./math/salary');
var http = require('http'); // node built in
var express = require('express'); //third-party

var p = 10;
var q = 20;

console.log(sudhakarModule.sumOfTwoNumbers(p, q));

console.log("Salary is: ",salaryModule.calcualteBonus(60000,10));

console.log('Total Salaries: ', salaryModule.totalSalaries);