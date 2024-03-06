const express = require("express");
const generateAQuote = require("./quote");

const app = express();

app.get("/api/quote", (req, res) => {
    const quote = generateAQuote()
    res.json({quote})
})


// Define a GET route to generate quote from a specific category
app.get("/api/quote/:category", (req, res) => {
    const quote = generateAQuote(req.params.category);
    res.json({ quote });
  });


    // Start the server
    app.listen(8000, () => {
      console.log("Server listening on port 3000");
    });