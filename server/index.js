const express = require("express");
const app = express();
const fs = require("fs");
const bodyParser = require("body-parser");
const products = require(`${__dirname}/assets/products.json`);

const port = 5001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/products", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.json(products);
  //fs.createReadStream(`${__dirname}/assets/products.json`).pipe(res);
});

app.post("/contact", (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

app.listen(port, () => console.log(`server runing on port ${port}`));
