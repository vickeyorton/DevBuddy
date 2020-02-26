const express = require("express");
const mongoose = require("mongoose");

const app = express();

// DB key config
const db = require("./config/keys").mongoURI;

// Connecting MongoDb
mongoose
    .connect(db)
    .then(()=> console.log('Mongo-DB Get Connected !....'))
    .catch(err => console.log(err))

app.get('/', (req, res) => res.send("Hello"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server Running on Port :' + port + ' '));