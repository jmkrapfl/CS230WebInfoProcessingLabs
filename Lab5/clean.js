var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://JessicaKrapfl:database@cluster0.cpon5.mongodb.net/Assignment5?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Assignment5");
  var query1 = {};
    
    //clean out Customers
  dbo.collection("Customers").deleteMany(query1, function(err, obj) {
    if (err) throw err;
  });
    
    //clean out Addresses
    var query2 = {};
  dbo.collection("Addresses").deleteMany(query2, function(err, obj) {
    if (err) throw err;
  });
    
    //clean out Shipping
    var query3 = {};
  dbo.collection("Shipping").deleteMany(query3, function(err, obj) {
    if (err) throw err;
  });
    
    //clean out phone models
    var query4 = {};
  dbo.collection("PhoneModels").deleteMany(query4, function(err, obj) {
    if (err) throw err;
    db.close();
  });
});