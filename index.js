const express = require('express');
var app = express();

//Startup
if (!process.env.MESSAGE) {
    throw "The MESSAGE environment variable is not set.";
}

app.get("/", function(req, res) {
    console.log("Route / reached.")
    res.status(200).send("Your message: " + process.env.MESSAGE);
    console.log("Response sent.");
});

app.listen(12944, function() {
    console.log("Listening on port 12944...");
});
