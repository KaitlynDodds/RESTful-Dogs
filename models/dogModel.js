const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/dogs');

// dog schema 
var dogSchema = new mongoose.Schema({
    name: String,
    breed: String,
    age: Number,
    available: Boolean,
    description: String,
    image: String
});

// CREATE SAMPLE DOG
// Dog.create({
//     name: "Rufus",
//     breed: "Mutt",
//     age: 4,
//     available: true,
//     description: "Rufus is a fun loving pup looking for his forever home. If you have an active lifestyle and are looking for a companion to take on the trails, Rufus could be just the dog for you.",
//     image: "http://cdn1-www.dogtime.com/assets/uploads/2011/01/file_23228_mutt.jpg"
// }, function(err, dog) {
//     if (err) {
//           console.log('Unable to add dog to db...');
//     } else {
//           console.log('NEW DOG');
//           console.log(dog);
//     }
// });

// export dog model 
module.exports = mongoose.model("Dog", dogSchema);