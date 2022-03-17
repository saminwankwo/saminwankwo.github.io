const express = require('express');
const app = express();

const path = require('path');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
// const request = require('request');

dotenv.config({path : './config.env'});


//Requiring user route
const routes = require('./routes/routes');

app.use(bodyParser.urlencoded({extended:true}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(routes);

app.listen(process.env.PORT, ()=> {
	console.log('Server is started');
});