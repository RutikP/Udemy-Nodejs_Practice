const http = require('http');
const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'pug');
app.set('views','views');

const userRoutes = require('./routes/users');

app.use(userRoutes);

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

const addUserRoutes = require('./routes/addUsers');

app.use(addUserRoutes.userRoutes);

app.use(express.static(path.join(__dirname,'public')));


app.listen(4000);
