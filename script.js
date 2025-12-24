
const quotes = [
  {
    text: "La vie est ce que nous en faisons, toujours a été, toujours sera.",
    author: "Grandma Moses"
  },
  {
    text: "Le succès n'est pas final, l'échec n'est pas fatal: c'est le courage de continuer qui compte.",
    author: "Winston Churchill"
  },
  {
    text: "Croyez en vous-même. Vous êtes plus braver que vous ne le pensez.",
    author: "Roy T. Bennett"
  },
  {
    text: "L'avenir appartient à ceux qui croient à la beauté de leurs rêves.",
    author: "Eleanor Roosevelt"
  },
  {
    text: "C'est à partir de nos expériences les plus sombres que naissent nos plus grandes force.",
    author: "J.K. Rowling"
  },
  {
    text: "Ne laissez pas hier prendre trop de place aujourd'hui.",
    author: "Will Rogers"
  },
  {
    text: "La seule façon de faire du bon travail est d'aimer ce que vous faites.",
    author: "Steve Jobs"
  },
  {
    text: "Vous êtes plus fort que vous ne le pensez.",
    author: "A.A. Milne"
  },
  {
    text: "Chaque journée est une nouvelle chance de changer votre vie.",
    author: "Ralph Marston"
  },
  {
    text: "Ne désistez pas. Le moment où vous êtes le plus fatigué est souvent le moment juste avant que vous n'éclatiez.",
    author: "Unknown"
  }
];

// Get DOM elements
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newBtn = document.getElementById('newBtn');
const copyBtn = document.getElementById('copyBtn');

// Function to get a random quote
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

// Function to display a new quote
function displayNewQuote() {
  const quote = getRandomQuote();
  quoteText.textContent = `"${quote.text}"`;
  authorText.textContent = `— ${quote.author}`;
}

// Function to copy quote to clipboard
function copyQuote() {
  const text = `${quoteText.textContent}\n${authorText.textContent}`;
  navigator.clipboard.writeText(text).then(() => {
    copyBtn.textContent = 'Copié!';
    setTimeout(() => {
      copyBtn.textContent = 'Copier';
    }, 2000);
  });
}

// Event listeners
newBtn.addEventListener('click', displayNewQuote);
copyBtn.addEventListener('click', copyQuote);

// Display a quote on page load
displayNewQuote();
