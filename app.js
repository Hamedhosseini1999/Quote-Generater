const quoteContainer = document.querySelector(".quote-container");
const quoteText = document.getElementById("quote-text");
const author = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");
const twitterBtn = document.getElementById("twitter");
const loader = document.querySelector(".loader");
let quotes = [];

// Loading
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}
// Compeleted
function compelet() {
  loader.hidden = true;
  quoteContainer.hidden = false;
}
loading();
// Get single quote
function getSingleQuote() {
  loading();
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
  compelet();
}

// fetch to Api
async function getQuote() {
  try {
    const api = "https://type.fit/api/quotes";
    const response = await fetch(api);
    quotes = await response.json();
    getSingleQuote();
  } catch (error) {
    console.log(error);
  }
}

async function tweet() {
  const apiTweet = `https://twitter.com/intent/tweet?text = ${quoteText.textContent} - ${author.textContent}`;
  window.open(apiTweet, "_blank");
}

// Add Event Listener
newQuoteBtn.addEventListener("click", getQuote);
twitterBtn.addEventListener("click", tweet);

getQuote();

// Compelete
