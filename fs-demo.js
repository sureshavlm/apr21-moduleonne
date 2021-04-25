//Access files Asynchronously
const fs = require('fs');

const https = require('https');

//fs_perm should be loaded then only remaining code needs to be executed
/*var publickey = fs.readFileSync('./data/cert.perm'); //5 secs

publickey.on('data', function(response) {
		console.log(response);
});

publickey.on('error', function(err) {
	console.log('Error while reading the file');
});*/

console.log('******* Program started ****');

fs.readFile('./data/employees.txt', function(err, data) {
	if(err)
		throw err;
	console.log(data.toString());
});

setTimeout(function() {
	console.log('***** setTimeout executed *****');
}, 1000);

console.log('******* Before udpating File content ****');

fs.writeFile('./data/employees.txt','\nSmith, Engineer, 150000, Male', {'flag':'a'}, function(err, data) {
	console.log('Data inserted into file');
});

console.log('******* End of Program ****');