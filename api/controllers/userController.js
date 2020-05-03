'use strict';

var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../../config.js');

var User =  require('../models/userModel'); 

exports.get_index = function(req, res) {
    User.findAll().then(users => {
      res.json(users);
    }).catch(err =>{
      res.send(err);
    }) 
};

exports.register = function(req, res) {
  var hashedPassword = bcrypt.hashSync('12345678', 8);
  User.sync({force: true}).then(function () {
    console.log("name: ",req.body.name); 

    return User.create({
      name: req.body.name,
      email: req.body.email,
      password:hashedPassword
    }).then((user) => {
      // create a token
      var token = jwt.sign({ id: user._id }, config.secret, {
        expiresIn: 86400 // expires in 24 hours
      });
      res.status(200).send({ auth: true, token: token });
    }).catch((err)=>{
      console.log(err);
      if (err) return res.status(500).send("There was a problem registering the user.")
    })

  }); 
};