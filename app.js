const quoteContainer = document.querySelector(".quote-container");
const quoteText = document.getElementById("quote-text");
const author = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");
const twitterBtn = document.getElementById("twitter");
let quotes = [];

// Get single quote
function getSingleQuote() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  if (!quote.author) {
    author.textContent = "Unknown";
  } else {
    author.textContent = quote.author;
  }
  if (quote.length > 150) {
    quoteText.classList.add("small-font ");
  } else {
    quoteText.classList.remove("small-font");
  }
  quoteText.textContent = quote.text;
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

// Add Event Listener
newQuoteBtn.addEventListener("click", getQuote);
