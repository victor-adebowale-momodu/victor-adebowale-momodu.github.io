import quotes from "./quotes.json";

export function generateRandomQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const textEl = document.getElementById("quote-text");
    const authorEl = document.getElementById("quote-author");

    if (textEl && authorEl) {
        textEl.innerText = `"${randomQuote.text}"`;
        authorEl.innerText = randomQuote.author;
    }
}
