const quotes = [
  { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
  { text: "Code is like humor. When you have to explain it, it’s bad.", author: "Cory House" },
  { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
  { text: "Make it work, make it right, make it fast.", author: "Kent Beck" },
  { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
  { text: "Stay hungry, stay foolish.", author: "Steve Jobs" }
];

const gradients = [
  "linear-gradient(135deg, #667eea, #764ba2)",
  "linear-gradient(135deg, #ff758c, #ff7eb3)",
  "linear-gradient(135deg, #43e97b, #38f9d7)",
  "linear-gradient(135deg, #fa709a, #fee140)",
  "linear-gradient(135deg, #30cfd0, #330867)",
  "linear-gradient(135deg, #f6d365, #fda085)"
];

const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const newBtn = document.getElementById("new-quote-btn");
const copyBtn = document.getElementById("copy-btn");

let currentIndex = 0;

function generateRandom() {
  let nextIndex;
  do {
    nextIndex = Math.floor(Math.random() * quotes.length);
  } while (nextIndex === currentIndex);

  currentIndex = nextIndex;
  const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];

  quoteEl.textContent = `"${quotes[currentIndex].text}"`;
  authorEl.textContent = `— ${quotes[currentIndex].author}`;
  document.body.style.background = randomGradient;
}

copyBtn.addEventListener("click", () => {
  const fullText = `${quoteEl.textContent} ${authorEl.textContent}`;
  navigator.clipboard.writeText(fullText);
  copyBtn.textContent = "Copied!";
  setTimeout(() => (copyBtn.textContent = "Copy"), 1500);
});

newBtn.addEventListener("click", generateRandom);
