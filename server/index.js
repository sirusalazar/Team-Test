const express = require("express");
const app = express();
const fs = require("fs");
const products = require(`${__dirname}/assets/products.json`);

const port = 5001;
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/products", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  // if (req.query.page) {
  //   page = req.query.page;
  // }
  // const response = {
  //   nextPage: page * 1 + 1,
  //   data: products.slice(
  //     parseInt(page) * pageSize,
  //     parseInt(page) * pageSize + pageSize
  //   ),
  //   totalPages: Math.ceil(products.length / 10)
  // };
  res.json(products);
  //fs.createReadStream(`${__dirname}/assets/products.json`).pipe(res);
});

app.post("/contact", (req, res) => {
  res.send("got a POST request");
});

app.listen(port, () => console.log(`server runing on port ${port}`));
