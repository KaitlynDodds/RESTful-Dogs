const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Dog = require('../models/dogModel');

// CREATE TEST DOG
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

// INDEX
router.get('/', function(req, res) {
    Dog.find({}, function(err, dogs) {
        if (err) {
            console.log('UNABLE TO RETREIVE DOGS FROM DB');
        } else {
            res.render('views/landing', {dogs: dogs});
        }
    });
});

// NEW 
router.get('/dogs/new', function(req, res) {
    res.render('views/new');
});

// CREATE 
router.post('/dogs', function(req, res) {
    res.send('worked');
});

// SHOW
router.get('/dogs/:id', function(req, res) {
    var id = req.params.id;
    Dog.findById({"_id": id}, function(err, dog) {
        if (err) {
            console.log(err);
            res.redirect('/');
        } else {
            console.log(dog);
            res.render('views/show', {dog: dog});
        }
    })
});



module.exports = router;