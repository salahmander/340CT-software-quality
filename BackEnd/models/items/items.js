const db = require('../../database')

module.exports.getAll = function(conData, callback){
	db.connect(conData, function(err, conn){
		
		if (err) {
			callback(err);
			return;
        }

        conn.query('SELECT * FROM computer', function (err, computerData) {

				callback(err, computerData);
			 
		});
	});
};

module.exports.add = function(conData, itemData, callback){
	db.connect(conData, function(err, conn){

		if (err) {
			callback(err);
			return;
		}
		conn.query("INSERT INTO orderdetails  (userID,title, device, type, CPU, RAM, GPU, storage, size, price) VALUES (\""+itemData.userID+"\", \""+itemData.title+"\", \""+itemData.device+"\", \""+itemData.type+"\", \""+itemData.CPU+"\", \""+itemData.RAM+"\", \""+itemData.GPU+"\", \""+itemData.storage+"\", \""+itemData.size+"\", \""+itemData.price+"\");", itemData, function(err,result){

			callback(err, result);
		});
	});
};