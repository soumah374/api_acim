'use strict';

var User = require('../models/userModel')

exports.me = function (req, res) {

    res.status(200).send(req.userId);
    
    // User.findById(req.userId, { password: 0 }, function (err, user) {
    //     if (err) return res.status(500).send("There was a problem finding the user.");
    //     if (!user) return res.status(404).send("No user found.");
        
    //     res.status(200).send(user);
    // });

}

exports.logout = function (req, res) {
    res.status(200).send({auth: false, token: null});
}