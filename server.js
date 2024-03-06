const express = require("express");
const generateAQuote = require("./quoteGenerator");

const app = express();

app.get("/api/quote", (req, res) => {
    const quote = generateAQuote()
    res.json({quote})
})


// Define a GET route to generate quote from a specific category
app.get("/api/quote/:category", (req, res) => {
    const quote = generateRandomQuote(req.params.category);
    res.json({ quote });
  });

  
    // Start the server
    app.listen(3000, () => {
      console.log("Server listening on port 3000");
    });