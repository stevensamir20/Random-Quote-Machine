const quoteText = document.querySelector("#text")
const quoteAuthor = document.querySelector("#author")
quoteBtn = document.querySelector("#new-quote")

function randomQuote() {
  // Fetching random quotes/data
  fetch("https://api.quotable.io/random")
  .then(res => res.json())
  .then(result => {
    quoteText.innerText = result.content;
    quoteAuthor.innerText = result.author;
  })
}

quoteBtn.addEventListener("click", randomQuote);