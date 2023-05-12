const express = require('express');

const app = express();

// Home Page
app.get("/", function(req, res) {
    res.send("Home Page");
});

// Notes Page
app.get("/notes", function(req, res) {
    res.send("Notes Page");
});

app.listen(5000, function() {
    console.log(`Server started at Port 5000`);
});