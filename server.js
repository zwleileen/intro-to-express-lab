//configs go here
const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3000;

//middleware goes here, and intercept incoming requests
app.use(morgan("dev"));

//requests go here
app.get("/", (req, res) => {
  res.send("<h1>Hello Express!</h1>");
});

//URL is http://localhost:3000/about?name=Eileen&age=35
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
