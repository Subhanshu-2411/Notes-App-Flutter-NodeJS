const express = require('express');

const router = express.Router();

const Note = require('./../models/Note');


// GET LIST of NOTES
router.post("/list", async function(req, res) {
    const notes = await Note.find(
        {
            userid: req.body.userid
        }
    );

    res.json(notes);
});

// ADD / UPDATE A LIST
router.post("/add", async function(req, res) {
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

// DELETE A LIST
router.post("/delete", async function(req, res) {
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

module.exports = router;