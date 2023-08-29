const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db/db.js");
const productRouter = require("./routes/productsRouter.js");

const app = express();

// app.get('/',(req,res) => {
//     res.send("hi")
// })

// connect to database 
db();

// use the body parser to parse the response body to json format
app.use(bodyParser.json());

// use product router 
app.use("/api", productRouter);

// listen on port 3000 
app.listen(3000, () => {
  console.log("listening on port 3000");
});
