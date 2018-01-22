const express = require('express');
const app = express();


// set view engine
app.set('view engine', 'ejs');


// INDEX (GET) - /dogs
app.get('/dogs', function(req, res) {
    res.render('landing');
});

// NEW (GET) - /dogs/new


// CREATE (POST) - /dogs


// SHOW (GET) - /dogs/:id


// EDIT (GET) - /dogs/:id/edit


// UPDATE (PUT) - /dogs/:id


// DESTROY (DELETE) - /dogs/:id


// App Port
app.listen(3000, () => console.log('App listening on port 3000'));