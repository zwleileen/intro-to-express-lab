const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3000;

app.use(morgan("dev"));

//Exercise 1. Be Polite, Greet the User
app.get("/greetings/:name", (req, res) => {
  const name = req.params.name;
  res.send(`Hello there, ${name}!`);
});
//URL is http://localhost:3000/greetings/Christy

//Exercise 2. Rolling the Dice
app.get("/roll/:number", (req, res) => {
  const number = req.params.number; //retrieves the number from the URL as a string
  if (isNaN(number)) {
    return res.send("You must specify a number.");
  }
  const randomNum = parseInt(number); //converts string input from URL parameter into number
  const result = Math.floor(Math.random() * (randomNum + 1));
  res.send(`You rolled a ${result}`);
});
//URL is http://localhost:3000/roll/6

//Exercise 3. I Want THAT One!
app.get("/collectibles/:index", (req, res) => {
  const index = parseInt(req.params.index); //converts URL string parameter into number
  const collectibles = [
    { name: "shiny ball", price: 5.95 },
    { name: "autographed picture of a dog", price: 10 },
    { name: "vintage 1970s yogurt SOLD AS-IS", price: 0.99 },
  ];

  if (index < 0 || index >= collectibles.length) {
    return res.send("This item is not  yet in stock. Check back soon!");
  }
  return res.send(
    `So, you want the ${collectibles[index].name}? For ${collectibles[index].price}, it can be yours!`
  );
});
//URL is http://localhost:3000/collectibles/0

app.get("/about", (req, res) => {
  const name = req.query.name;
  const age = req.query.age;
  res.send(`You are ${name} and ${age}`);
});

app.get("/greet/:name", (req, res) => {
  res.send(`<h1>Hello, ${req.params.name}</h1>`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
