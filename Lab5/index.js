var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://JessicaKrapfl:database@cluster0.cpon5.mongodb.net/Assignment5?retryWrites=true&w=majority";

//**********CREATE********
//this is where i figured out how to create data:
//https://www.w3schools.com/nodejs/nodejs_mongodb_insert.asp
//user info
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Assignment5");
  var customer = 
      [{ custID:0, title: "Mr.", name: "John", surname: "Doe", phone:"49848292", email: "johndoe@gmail.com", orderedProduct:0, addressNo:0, shipNo:0 },
      { custID:1, title: "Mrs.", name: "Jessica", surname: "Griffin", phone:"6839240", email: "jessicagriffin@gmail.com", orderedProduct:1, addressNo:1, shipNo:1 },
      { custID:2, title: "Mx.", name: "Alix", surname: "Zeno", phone:"8492285", email: "alixzeno@gmail.com", orderedProduct:2, addressNo:2, shipNo:2 },
      { custID:3, custID:0, custID:0, custID:0, custID:0, custID:0, custID:0, title: "Miss.", name: "Alice", surname: "Doe", phone:"445959692", email: "alicedoe@gmail.com", orderedProduct:3, addressNo:3, shipNo:3 },
      { custID:4, custID:0, custID:0, custID:0, custID:0, custID:0, title: "Dr.", name: "Ralf", surname: "Gill", phone:"4939285", email: "ralfgill@gmail.com", orderedProduct:4, addressNo:4, shipNo:4 },
      { custID:5, custID:0, custID:0, custID:0, custID:0, title: "Mr.", name: "Bill", surname: "Dill", phone:"4693928", email: "billdill@gmail.com", orderedProduct:5, addressNo:5, shipNo:5 },
      { custID:6, custID:0, custID:0, custID:0, title: "Mrs.", name: "Lucy", surname: "Quincy", phone:"49848292", email: "lucyquincy@gmail.com", orderedProduct:6, addressNo:6, shipNo:6 },
      { custID:7, custID:0, custID:0, title: "Mx.", name: "Jamie", surname: "Hughes", phone:"568392759", email: "jamiehughes@gmail.com", orderedProduct:7, addressNo:7, shipNo:7 },
      { custID:8, custID:0, title: "Miss.", name: "Issabell", surname: "Dog", phone:"547292958", email: "issabelldog@gmail.com", orderedProduct:8, addressNo:8, shipNo:8 },
      { custID:9, title: "Dr.", name: "Joe", surname: "Dun", phone:"5859596832", email: "joedun@gmail.com", orderedProduct:9, addressNo:9, shipNo:9 }];
    
  dbo.collection("Customers").insertMany(customer, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
  });

//adresses
  var addresses = 
      [{ addressID:0, address1: "Curraghmore New Ross Wexford", address2: "Frog street", town: "New Ross", countyCity:"County Wexford", eircode: "98RI49" },
      { addressID:1, address1: "58 Catherine St.", address2: "Deer street", town: "Limerick", countyCity:"County Limerick", eircode: "49GU50" },
      { addressID:2, address1: "108 Main St.", address2: "Rabbit street", town: "Castleisland", countyCity:"County Kerry", eircode: "69JK59" },
      { addressID:3, address1: "Emlycass", address2: "Duck street", town: "Belmullet", countyCity:"County Mayo", eircode: "37FK70" },
      { addressID:4, address1: "Roxboro rd Limerick", address2: "Cat street", town: "Limerick", countyCity:"County Limerick", eircode: "20AB50" },
      { addressID:5, address1: "Ballagh Monasterevin", address2: "Newt street", town: "Monasterevin", countyCity:"County Kildare", eircode: "10HU50" },
      { addressID:6, address1: "65 Thomond Rd, 10", address2: "Dog street", town: "Dublin", countyCity:"County Dublin", eircode: "20TH52" },
      { addressID:7, address1: "131 Hight St., BT18 9LG", address2: "Fish street", town: "Holywood", countyCity:"County Down", eircode: "56TO50" },
      { addressID:8, address1: "Circular Rd.", address2: "Butterfly street", town: "Roscommon", countyCity:"County Roscommon", eircode: "67VN570" },
      { addressID:9, address1: "The Leap Inn Courtyard Leap Skibbereen", address2: "Cow street", town: "Skibbereen", countyCity:"County Cork", eircode: "10NF49" }];
    
  dbo.collection("Addresses").insertMany(addresses, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted"); 
  });
    
//shipping addresses
//adresses
  var shipping = 
      [{ shipID:0, address1: "Curraghmore New Ross Wexford", address2: "Frog street", town: "New Ross", countyCity:"County Wexford", eircode: "98RI49" },
      { shipID:1, address1: "58 Catherine St.", address2: "Deer street", town: "Limerick", countyCity:"County Limerick", eircode: "49GU50" },
      { shipID:2, address1: "108 Main St.", address2: "Rabbit street", town: "Castleisland", countyCity:"County Kerry", eircode: "69JK59" },
      { shipID:3, address1: "Emlycass", address2: "Duck street", town: "Belmullet", countyCity:"County Mayo", eircode: "37FK70" },
      { shipID:4, address1: "Roxboro rd Limerick", address2: "Cat street", town: "Limerick", countyCity:"County Limerick", eircode: "20AB50" },
      { shipID:5, address1: "Ballagh Monasterevin", address2: "", town: "Monasterevin", countyCity:"County Kildare", eircode: "10HU50" },
      { shipID:6, address1: "65 Thomond Rd, 10", address2: "Dog street", town: "Dublin", countyCity:"County Dublin", eircode: "20TH52" },
      { shipID:7, address1: "131 Hight St., BT18 9LG", address2: "Fish street", town: "Holywood", countyCity:"County Down", eircode: "56TO50" },
      { shipID:8, address1: "Circular Rd.", address2: "Butterfly street", town: "Roscommon", countyCity:"County Roscommon", eircode: "67VN570" },
      { shipID:9, address1: "The Leap Inn Courtyard Leap Skibbereen", address2: "Cow street", town: "Skibbereen", countyCity:"County Cork", eircode: "10NF49" }];
    
  dbo.collection("Shipping").insertMany(shipping, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted"); 
  });

//phone info
  var phone = 
      [{ productID:0, manufacturer: "Apple", model: "iPhone 12", price: "800" },
      { productID:1, manufacturer: "Samsung", model: "12", price: "750"},
      { productID:2, manufacturer: "One Plus", model: "10", price: "500" },
      { productID:3, manufacturer: "Google Pixel", model: "Pixel 12", price: "500" },
      { productID:4, manufacturer: "Nokia", model: "3310", price: "300" },
      { productID:5, manufacturer: "Motorola", model: "RAZR V3", price: "350" },
      { productID:6, manufacturer: "Apple", model: "iPhone 12 Pro Max", price: "1200" },
      { productID:7, manufacturer: "Apple", model: "iPhone X", price: "500" },
      { productID:8, manufacturer: "Apple", model: "iPhone 8", price: "450" },
      { productID:9, manufacturer: "Apple", model: "iPhone 7", price: "400" }];
    
  dbo.collection("PhoneModels").insertMany(phone, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
  });
    
    //*********JOIN**********
    //this is where i figured out how to join tables:
    //https://www.w3schools.com/nodejs/nodejs_mongodb_join.asp
    dbo.collection('Customers').aggregate([
    { $lookup:
       {
         from: 'PhoneModels',
         localField: 'orderedProduct',
         foreignField: 'productID',
         as: 'orderdetails'
       }
     }
    ]).toArray(function(err, res) {
    if (err) throw err;
    console.log(JSON.stringify(res));
  });
    
    //***********RETREIVE******
    //this is where i figured out how to retrive info:
    //https://www.w3schools.com/nodejs/nodejs_mongodb_find.asp
    //retrives a random customer
    var randNum = Math.floor((Math.random()*customer.length));
    
    var cust = customer[randNum];
  dbo.collection("Customers").find({_id:cust._id}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
  });
    
    var add = addresses[randNum];
    dbo.collection("Addresses").find({_id:add._id}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
  });
    
    var ship = shipping[randNum]
    dbo.collection("Shipping").find({_id:ship._id}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
  });
    
    //*******UPDATE*********
    //this is where i figured out how to update information:
    //https://www.w3schools.com/nodejs/nodejs_mongodb_update.asp

    var rand = Math.floor((Math.random()*10));

    var findCust = {adderessID: rand};
    var updateAdd = {$set: {address1: "123 Canyon"}};
    dbo.collection("Addresses").updateOne(findCust, updateAdd, function(err, res) 
    {
        if (err) throw err;
        console.log("1 document updated");
  });
    
    var findCust = {custID: rand};
    var updateCust = {$set: {title:"Mx", phone:39048201, email:"newemail@gmail.com"}};
    dbo.collection("Customers").updateOne(findCust, updateCust, function(err, res) 
    {
    if (err) throw err;
    console.log("1 document updated");
  });
    
    //********DELETE********
    //this is where i figured out how to delete things:
    //https://www.w3schools.com/nodejs/nodejs_mongodb_delete.asp

  var toDelete = { name: 'John', phone: '49848292', email:'johndoe@gmail.com' };
  dbo.collection("Customers").deleteOne(toDelete, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    db.close();
  }); 

});

/*
i decided to have 4 different collections in my Assignment5 cluster one table each for customers, addresses, shipping addresses, and phone information. 
i felt this helped me to keep things more organized and helped me to keep my code easier to read from my screen. all of the collections are connected via ids. this assignment really helped make things make a little bit more sense. this assignment really helped me feel more confident in my coding abilites as compared to the last assignment.
*/
