const quoteContainer = document.querySelector(".quote-container");
const quoteText = document.getElementById("quote-text");
const author = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");
const twitterBtn = document.getElementById("twitter");
let quotes = [];

// Get single quote
function getSingleQuote() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteText.textContent = quote.text;
  author.textContent = quote.author;
}
// fetch to Api
async function getQuote() {
  try {
    const response = await fetch("https://type.fit/api/quotes");
    quotes = await response.json();
    getSingleQuote();
  } catch (error) {
    console.log(error);
  }
}

getQuote();
