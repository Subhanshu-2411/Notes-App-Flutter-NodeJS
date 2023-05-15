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

const DBPath = "mongodb+srv://subhanshu:ramayana1@cluster0.bm8slnx.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(DBPath).then(function() {
    // Home Page
    app.get("/", function(req, res) {
        res.json({
            message: "API Working!!"
        });
    });

    const noteRouter = require("./routes/Note");

    app.use("/notes", noteRouter);

});




const PORT = process.env.PORT || 5000
app.listen(PORT, function() {
    console.log(`Server started at Port ${PORT}` );
});