const db = require('../../database')

module.exports.add = function (conData, userData, callback) {
	db.connect(conData, function (err, conn) {

		if (err) {
			callback(err);
			return;
		}

		conn.query("INSERT INTO user  (first_name, surname, email, username, password) VALUES (\"" + userData.firstName + "\", \"" + userData.surname + "\", \"" + userData.email + "\", \"" + userData.username + "\", \"" + userData.password + "\");", userData, function (err, result) {

			callback(err, result);
		});
		
	})
};

module.exports.getAll = function (conData, callback) {
	db.connect(conData, function (err, conn) {

		if (err) {
			callback(err);
			return;
		}

		conn.query('SELECT username, email FROM user', function (err, result) {
			console.log(result)
			callback(err, result);

		});
	});
};