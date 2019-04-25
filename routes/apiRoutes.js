const db = require("../model");
const axios = require('axios');

module.exports = function(app){

    // Google Map API route
    app.get('/api/maps', (req, res) => {
        let queryReviewURL = "https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJVZiQSzr4wIcR6DwKBkAZodA&key=AIzaSyDK47iRJeeV1kj_xv-U2ZoPO-Lk7UnVyHM"
  
        axios({
            method: 'get',
            url: queryReviewURL
        })
        .then(function(response) {
            res.json(response.data);
        });
    });
  
    /*********User API Routes***********/
    
    // Post user data
    app.post("/api/user", function(req, res){
        db.User.create({
            name: req.body.name,
            interests: req.body.interests,
            email: req.body.email,
            rsvp: req.body.rsvp
        }).then(function(response){
            res.json(response);
        }).catch(function(err){
            console.log(err);
        });
    });
    
    // Get all users
    app.get("/api/user", function(req, res){
        db.User.find({}).then(function(response){
            res.json(response);
        }).catch(function(err){
            console.log(err);
        });
    });
    
    // Get one User
    app.get("/api/user/:id", function(req, res){
        db.User.findOne({
            _id: req.params.id
        }).then(function(response){
            res.json(response);
        }).catch(function(err){
            console.log(err);
        });
    });
    
    // Delete user
    app.delete("/api/user/:id", function(req, res){
        db.User.remove({
            _id: req.params.id
        }).then(function(response){
            res.json(response);
        }).catch(function(err){
            console.log(err);
        });
    });


    /*********Calendar API Routes***********/

    // Post new event
    app.post("/api/calendar", function(req, res){
        const date = new Date
        db.Calendar.create({
            eventTitle: req.body.eventTitle,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            startTime: req.body.startTime,
            description: req.body.description,
            location: req.body.location
        }).then(function(response){
            res.json(response);
        }).catch(function(err){
            console.log(err);
        });
    });

    // Get all events
    app.get("/api/calendar", function(req, res){
        db.Calendar.find({}).then(function(response){
            res.json(response);
        }).catch(function(err){
            console.log(err);
        });
    });

    // Get one event
    app.get("/api/calendar/:id", function(req, res){
        db.Calendar.findOne({
            _id: req.params.id
        }).then(function(response){
            res.json(response);
        }).catch(function(err){
            console.log(err);
        });
    });

    // Delete all events
    app.delete("/api/calendar", function(req, res){
        db.Calendar.remove({}).then(function(response){
            res.json(response);
        }).catch(function(err){
            console.log(err);
        });
    });

    // Delete one Event
    app.delete("/api/calendar/:id", function(req, res){
        db.Calendar.remove({
            _id: req.params.id
        }).then(function(response){
            res.json(response);
        }).catch(function(err){
            console.log(err);
        });
    });


    /*********Calendar API Routes***********/

    // Post the buy list
    app.post("/api/buylist", function(req, res){
        db.BuyList.create({
            price: req.body.price,
            quantity: req.body.quantity,
            cardName: req.body.cardName
        }).then(function(response){
            res.json(response);
        }).catch(function(err){
            console.log(err);
        });
    });
}