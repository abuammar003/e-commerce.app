
require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT;

const app = express();
   
app.use(express.json());
app.set("view engine", "ejs");    //To configure ejs in the File.

app.use(express.static('./public'));



// Connection to mongoDB and getting URI From .env
mongoose.connect(process.env.BAZAAR_PRODUCTS_URI)
.then(()=> {
    console.log("Database Connected Successfully."); 
})
.catch(()=> {
    console.log("Failed to Connect Database.");
});



app.get("/", (req, res) => {
    res.send("Go to '/api.products' Path");
});


app.use("/api/products", require("./Routes/Products"));



app.listen(PORT, ()=> {
    console.log(`Server for Bazaar Backend is Running on Port: ${PORT}...`)
})