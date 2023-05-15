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
        res.json({
            message: "API Working!!"
        });
    });

    const noteRouter = require("./routes/Note");

    app.use("/notes", noteRouter);

});





app.listen(5000, function() {
    console.log(`Server started at Port 5000`);
});