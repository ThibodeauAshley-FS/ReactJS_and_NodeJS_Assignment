const mongoose = require("mongoose");
const User = require("../models/user");
const {messages, not_saved, new_add, run_complete} = require("../messages/messages");
const errorMessage = require("../messages/errorMessage");
const successMessage = require("../messages/successMessage");//const errorMessage = require("../messages/errorMessage");

// Finds Users
exports.getUser = async (req, res ) => {
    console.log("Getting Users");
    User.find()
    .exec()
    .then(result => {
         return successMessage(res, result,run_complete,201);
    })
    .catch(err => {
        return errorMessage(res,err,not_saved,500);
    });
};

// Creates Users
exports.createUser = async (req, res ) => {
    console.log("Saving User");
    const fName = req.body.fName;
    const lName = req.body.lName;
    const email = req.body.email;

    const newUser = new User({
        _id: new mongoose.Types.ObjectId(),
        fName: fName,
        lName: lName,
        email: email
    });

    newUser.save()
    .then(result => {
        return successMessage(res, result,new_add,201);
    })
    .catch(err => {
        return errorMessage(res,err,not_saved,500);
    });
};



