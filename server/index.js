const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev');
const Rental = require('./models/rental');
const FakeDb = require('./fake-db');
const rentalRoutes = require('./routes/rentals');

mongoose.connect(config.DB_URI).then(() => {
    const fakeDb = new FakeDb();
    fakeDb.seedDb();
});

const app = express();

app.use('/api/v1/rentals', rentalRoutes);


const PORT = process.env.PORT || 3001;

app.listen(PORT, function(){
    console.log('I am running');
});

// mongodb+srv://artur:Michura759@cluster0.dx5gu.mongodb.net/test?retryWrites=true&w=majority
//"mongodb+srv://<username>:<password>@cluster0.dx5gu.mongodb.net/<dbname>?retryWrites=true&w=majority"