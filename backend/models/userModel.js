const mongoose = require('mongoose');
const router = require('../routes/userRoutes');

const userSchema = mongoose.Schema(

    {
        useremail: {
            type: String,
            required: true,
            unique: true,
        },
        fullname: {
            type: String,
            required: true,
            unique: true,
        },  
        address: {
            type: String,
            required: true,
            unique: true,
        },
        usercontact: {
            type: String,
            required: true,
            unique: true,
        },
        age: {
            type: String,
            required: true,
            unique: true,
        },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("User", userSchema);

module.exports = User, router;
