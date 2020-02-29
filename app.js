const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const rootDir = require('./util/path');
const userRoutes = require('./routes/user');
// const mongoConnect = require('./util/database');
const mongoose = require('mongoose');

const app = express();


app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));
app.use(userRoutes);

mongoose.connect('mongodb+srv://yasin:Shariq2230@cluster0-kthvn.mongodb.net/client?retryWrites=true&w=majority').then(result => {
    app.listen(3000);
}).catch(err => {
    console.log(err);
});

