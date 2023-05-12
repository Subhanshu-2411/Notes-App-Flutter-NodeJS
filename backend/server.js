const express = require('express');

const app = express();

const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://subhanshu:ramayana1@cluster0.bm8slnx.mongodb.net/?retryWrites=true&w=majority").then(function() {
    // Home Page
    app.get("/", function(req, res) {
        res.send("Home Page");
    });

    // Notes Page
    app.get("/notes", function(req, res) {
        res.send("Notes Page");
    });
});





app.listen(5000, function() {
    console.log(`Server started at Port 5000`);
});