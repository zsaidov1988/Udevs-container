const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("<h1>Hello World!</h1><p>DockerFile</p>"));
app.get("/products", (req, res) => {
  res.send([
    {
      productId: "101",
      price: 100,
    },
    {
      productId: "102",
      price: 200,
    },
    {
      productId: "103",
      price: 500,
    },
  ]);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
