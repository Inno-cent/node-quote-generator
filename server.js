const express = require("express");
const generateAQuote = require("./quote");
require('dotenv').config();

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
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});