const express = require('express');

const app = express();

const mongoose = require('mongoose');

const Note = require('./models/Note');

const bodyParser = require('body-parser');
app.use(
    bodyParser.urlencoded(
        {
            extended: false
        }
    )
)
app.use(
    bodyParser.json()
)

mongoose.connect("mongodb+srv://subhanshu:ramayana1@cluster0.bm8slnx.mongodb.net/?retryWrites=true&w=majority").then(function() {
    // Home Page
    app.get("/", function(req, res) {
        res.send("Home Page");
    });

    // Notes Page
    app.post("/notes/list/", async function(req, res) {
        const notes = await Note.find(
            {
                userid: req.body.userid
            }
        );

        res.json(notes);
    });

    app.post("/notes/add", async function(req, res) {
        await Note.deleteOne(
            {
                id: req.body.id,
            }
        )
        const newNote = new Note(
            {
                id: req.body.id,
                userid: req.body.userid,
                title: req.body.title,
                content: req.body.content
            }
        )

        await newNote.save();

        const response = {
            message: "New Note Created " + `id: ${req.body.id}`
        };

        res.json(response);
    });

    app.post("/notes/delete", async function(req, res) {
        await Note.deleteOne(
            {
                id: req.body.id,
            }
        )

        const response = {
            message: "Note Deleted"
        };

        res.json(response);
    });


});





app.listen(5000, function() {
    console.log(`Server started at Port 5000`);
});