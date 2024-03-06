// quoteGenerator.js

const { getQuote } = require("node-quotegen");

function generateRandomQuote(category) {
  return category ? getQuote(category) : getQuote();
}

module.exports = generateRandomQuote;