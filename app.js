const express = require('express');
const app = express();
const path = require('path');

const home = require('./routes/home');
const about = require('./routes/about');
const contact = require('./routes/contact');
const product = require('./routes/product');


app.use('/about', about);
app.use('/contact', contact);
app.use('/products', product);
app.use('/', home);

// const ejs = require('ejs');

app.use(express.static(path.join(__dirname, "public")))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')



app.listen(8008);