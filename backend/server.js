const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const MovieRouter = require('./routes/movie');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

//mongoDB Connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', ()=> {
    console.log("MongoDB database connection established.");
});


app.use('/movie', MovieRouter);

app.listen(port, ()=> {
    console.log(`Server is running in port : ${port}`);

})