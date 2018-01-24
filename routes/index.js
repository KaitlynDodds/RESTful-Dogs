const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Dog = require('../models/dogModel');

// CREATE TEST DOG


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
    console.log(req.body);
    const name      = req.body.name,
          breed     = req.body.breed,
          age       = req.body.age,
          status    = req.body.status,
          desc      = req.body.description,
          image     = req.body.image;
    Dog.create({
        name: name,
        breed: breed,
        age: age,
        status: status,
        description: desc,
        image: image
    }, function(err, dog) {
        if (err) {
            console.log('Unable to add dog to db...');
        } else {
            console.log('NEW DOG');
            console.log(dog);
            res.redirect('/dogs/' + dog._id);
        }
    });
});

// EDIT
router.get('/dogs/:id/edit', function(req, res) {
    const id = req.params.id;
    Dog.findById({"_id": id}, function(err, dog) {
        if (err) {
            console.log(err);
        } else {
            res.render('views/edit', {dog, dog});    
        }
    });
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