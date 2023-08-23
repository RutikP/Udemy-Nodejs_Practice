const express = require("express");

const userRoutes = express.Router();

const path = require('path');

const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended:false}));

userRoutes.get('/add-user', (req, res, next) => {
//   console.log("In add users ");
//   res.sendFile(path.join(__dirname,'../','views','addUsers.html'));
    res.render('addUsers');
});

const usersLis = [];

userRoutes.post('/add-user', (req, res, next) => {
    // console.log("In users");
    // console.log(req.body.users);
    usersLis.push({user: req.body.users});
    res.redirect('/');
  });

exports.userRoutes = userRoutes;
exports.UList = usersLis;
