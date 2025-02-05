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
  const randomNum = parseInt(number); //converts string input from URL parameter into integer
  const result = Math.floor(Math.random() * (randomNum + 1));
  res.send(`You rolled a ${result}`);
});
//URL is http://localhost:3000/roll/6

app.get("/", (req, res) => {
  res.send();
});

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
