
const quotes = [
  {
    writer: "Arnold Schwarzenegger",
    proverb: "When you go through hardships and decide not to surrender, that is strength."
  },
  {
    writer: "Walt Disney",
    proverb: "It is kind of fun to do the impossible."
  },
  {
    writer: "Robert H.Schuller",
    proverb: "Tough times never last, but tough people do."
  },
  {
    writer: "Angelina Jolie",
    proverb: "If you don’t get out of the box you’ve been raised in, you won’t understand how much bigger the world is."
  },
  {
    writer: "Estée Lauder",
    proverb: "I didn't get there by wishing for it or hoping for it, but by working for it."
  },
  {
    writer: "Nelson Mandela",
    proverb: "The greatest glory in living lies not in never falling, but in rising every time we fall."
  },
  {
    writer: "Abraham Lincoln",
    proverb: "In the end, it's not the years in your life that count. It's the life in your years."
  },
  {
    writer: "Lilly Pulitzer",
    proverb: "Being happy never goes out of style."
  },
  {
    writer: "Naval Ravikant",
    proverb: "Three things in life – your health, your mission, and the people you love.That’s it."
  },
  {
    writer: "Kamal Ravikant",
    proverb: "Life is from the inside out.When you shift on the inside, life shifts on the outside."
  }
];

const quote = document.querySelector(".quote span:first-child");
const writer = document.querySelector(".quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.proverb;
writer.innerText = todaysQuote.writer;