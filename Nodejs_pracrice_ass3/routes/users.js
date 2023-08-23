const express = require("express");

const userRoutes = express.Router();

const path = require('path');

const usersList = require('./addUsers');

userRoutes.get('/', (req, res, next) => {
    const userss = usersList.UList;
//   res.sendFile(path.join(__dirname,'../','views','users.html'));
    res.render('users',{myuser:userss});
});


module.exports = userRoutes;
