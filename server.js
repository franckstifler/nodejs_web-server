var MongoClient = require('mongodb').MongoClient;


MongoClient.connect('mongodb://127.0.0.1:27017/test', function(err, db){
	if (err) throw err;

	db.collection('test').findOne({}, function (err, doc){
		console.dir(doc);
		db.close();
	});
	console.dir("Called findOne!");
});

for (var i = 0; i <10000; i++) {
	db.students.insert({
		"age": Math.floor(Math.random() * (23 - 14 + 1)) + 14;
	})
};