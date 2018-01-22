const express   = require('express'),
      app       = express(),
      mongoose  = require('mongoose');

// default mongoose connection
// var mongoDb = 'mongodb://127.0.0.1/dogs'
// mongoose.connect(mongoDb);

// // DOG SCHEMA
// var dogSchema = new mongoose.Schema({
//     name: String,
//     breed: String,
//     age: Number,
//     available: Boolean,
//     description: String,
//     image: String
// });

// // DOG MODEL
// var Dog = mongoose.model("Dog", dogSchema);


// TEST Dog Array 
const dogsArray = [
    {
        name: "Rufus",
        breed: "Mutt",
        age: 3,
        available: true,
        description: "Rufus is a fun loving pup looking for his forever home. If you have an active lifestyle and are looking for a companion to take on the trails, Rufus could be just the dog for you.",
        image: "http://cdn1-www.dogtime.com/assets/uploads/2011/01/file_23228_mutt.jpg" 
    },
    {
        name: "Rosie",
        breed: "Black and Tan Hound Mix",
        age: 1,
        available: true,
        description: "Rosie has had a tough life. She was found abandoned with a litter of puppies. She might not be quick to warm up to strangers, but once she gets to know you she won't be able to get enough of you. Rosie needs a quiet home, preferably with no children or loud adults.",
        image: "https://vetstreet.brightspotcdn.com/dims4/default/55e292f/2147483647/crop/0x0%2B0%2B0/resize/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F55%2F39e8a0a72211e0a0d50050568d634f%2Ffile%2FBlack-and-Tan-Coonhound-4-380mk062311.jpg" 
    },
];

// set view engine
app.set('view engine', 'ejs');


// INDEX (GET) - /dogs
app.get('/dogs', function(req, res) {
    res.render('landing', {dogs: dogsArray});
});

// NEW (GET) - /dogs/new


// CREATE (POST) - /dogs


// SHOW (GET) - /dogs/:id


// EDIT (GET) - /dogs/:id/edit


// UPDATE (PUT) - /dogs/:id


// DESTROY (DELETE) - /dogs/:id


// App Port
app.listen(3000, () => console.log('App listening on port 3000'));