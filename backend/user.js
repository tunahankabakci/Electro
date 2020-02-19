var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
    userNumber: {
        type: String,
        auto:true,
        unique:true
    },
    userName: {
        type: String,
        required: [true, "Name must be provided"],
        max: 30
    },
    userLastname: {
        type: String,
        required: [true, "Surname must be provided"],
        max: 30
    },
    userEmail: {
        type: String,
        required: [true, "Email address cannot be left blank."],
        unique: true,
        max: 30,
        validate: [validateEmail, "Please fill a valid email address"],
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please fill a valid email address"
        ]
    },
    userPassword: {
        type: String,
        required: [true, "Password cannot be left blank"],
        max: 30
    },
    userPhoneNumber: {
        type: String,
        required: [true, "Phone number cannot be left blank"],
        unique: true,
        max: 30
    },
    created: { type: Date, default: Date.now }
});

var User = mongoose.model("User", userSchema);
module.exports = User;
