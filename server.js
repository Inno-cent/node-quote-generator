const express = require("express");
const generateAQuote = require("./quoteGenerator");

const app = express();

app.get("/api/quote", (req, res) => {
    const quote = generateAQuote()
    res.json({quote})
})

// Start the server
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
