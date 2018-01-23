const express = require('express');
const router = express.Router();


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
        available: false,
        description: "Rosie has had a tough life. She was found abandoned with a litter of puppies. She might not be quick to warm up to strangers, but once she gets to know you she won't be able to get enough of you. Rosie needs a quiet home, preferaçbly with no children or loud adults.",
        image: "https://vetstreet.brightspotcdn.com/dims4/default/55e292f/2147483647/crop/0x0%2B0%2B0/resize/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F55%2F39e8a0a72211e0a0d50050568d634f%2Ffile%2FBlack-and-Tan-Coonhound-4-380mk062311.jpg" 
    },
    {
        name: "Rosie",
        breed: "Black and Tan Hound Mix",
        age: 1,
        available: true,
        description: "Rosie has had a tough life. She was found abandoned with a litter of puppies. She might not be quick to warm up to strangers, but once she gets to know you she won't be able to get enough of you. Rosie needs a quiet home, preferaçbly with no children or loud adults.",
        image: "https://vetstreet.brightspotcdn.com/dims4/default/55e292f/2147483647/crop/0x0%2B0%2B0/resize/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F55%2F39e8a0a72211e0a0d50050568d634f%2Ffile%2FBlack-and-Tan-Coonhound-4-380mk062311.jpg" 
    },
    {
        name: "Rosie",
        breed: "Black and Tan Hound Mix",
        age: 1,
        available: false,
        description: "Rosie has had a tough life. She was found abandoned with a litter of puppies. She might not be quick to warm up to strangers, but once she gets to know you she won't be able to get enough of you. Rosie needs a quiet home, preferaçbly with no children or loud adults.",
        image: "https://vetstreet.brightspotcdn.com/dims4/default/55e292f/2147483647/crop/0x0%2B0%2B0/resize/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F55%2F39e8a0a72211e0a0d50050568d634f%2Ffile%2FBlack-and-Tan-Coonhound-4-380mk062311.jpg" 
    },
    {
        name: "Rosie",
        breed: "Black and Tan Hound Mix",
        age: 1,
        available: true,
        description: "Rosie has had a tough life. She was found abandoned with a litter of puppies. She might not be quick to warm up to strangers, but once she gets to know you she won't be able to get enough of you. Rosie needs a quiet home, preferaçbly with no children or loud adults.",
        image: "https://vetstreet.brightspotcdn.com/dims4/default/55e292f/2147483647/crop/0x0%2B0%2B0/resize/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F55%2F39e8a0a72211e0a0d50050568d634f%2Ffile%2FBlack-and-Tan-Coonhound-4-380mk062311.jpg" 
    },
];

router.get('/', function(req, res) {
    res.render('views/landing', {dogs: dogsArray});
});

module.exports = router;