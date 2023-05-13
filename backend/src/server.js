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
    app.get("/notes/list", async function(req, res) {
        const notes = await Note.find();
        res.json(notes);
    });

    app.get("/notes/add", async function(req, res) {
        const newNote = new Note({
            id: "0002",
            userid: "subhanshu.bansal5566@gmail.com",
            title: "My First Note",
            content: "My Note"
        });
        await newNote.save();

        const response = {
            message: "New Note Created"
        };

        res.json(response);
    });

});





app.listen(5000, function() {
    console.log(`Server started at Port 5000`);
});