const express = require('express');

const app = express();

const mongoose = require('mongoose');

const Note = require('./models/Note');

mongoose.connect("mongodb+srv://subhanshu:ramayana1@cluster0.bm8slnx.mongodb.net/?retryWrites=true&w=majority").then(function() {
    // Home Page
    app.get("/", function(req, res) {
        res.send("Home Page");
    });

    // Notes Page
    app.get("/notes/list/", async function(req, res) {
        const notes = await Note.find(
            {
                userid: req.body.userid
            }
        );

        res.json(notes);
    });

    app.post("/notes/add", async function(req, res) {

        // await newNote.save();
        //
        // const response = {
        //     message: "New Note Created"
        // };

        res.json(req.body);
    });

});





app.listen(5000, function() {
    console.log(`Server started at Port 5000`);
});