const { response } = require("express");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const router = require("../routes/userRoutes");

const registerUser = asyncHandler(async (req, res) => {
    const { useremail, fullname, address, usercontact, age } = req.body;

    const userExists = await User.findOne({ fullname });

    if (userExists) {
        res,status(400);
        throw new Error("That name is already registered");
    }

    const useradd = await User.create({
        useremail,
        fullname,
        address,
        usercontact,
        age,
    });

    if (useradd) {
        res.status(201).json({
            _id: useradd._id,
            useremail: useradd.useremail,
            fullname: useradd.fullname,
            address: useradd.address,
            usercontact: useradd.usercontact,
            age: useradd.age,
        });
    } else {
        res.status(400);
        throw new Error("Error Occured");
    }
});

const authUser = asyncHandler(async (req,res) => {
    const {useremail} = req.body;

    const user = await User.findOne({useremail});

    if (user) {
        res.json({
            _id: user._id,
            useremail: user.useremail,
            fullname: user.fullname,
            address: user.address,
            usercontact: user.usercontact,
            age: user.age,
        });
    } else {
        res.status(400);
        throw new Error("User email is invalid!");
    }
});

module.exports = {registerUser, authUser}, router;