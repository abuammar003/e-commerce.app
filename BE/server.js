
require('dotenv').config();

const express = require("express");
const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.set("view engine", "ejs");    //To configure ejs in the File.

app.use(express.static('./public'));


app.get("/", (req, res) => {
    res.send("Go to '/api.products' Path");
});


app.use("/api/products", require("./Routes/Products"));



app.listen(PORT, ()=> {
    console.log(`Server for Bazaar Backend is Running on Port: ${PORT}...`)
})