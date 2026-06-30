const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        unique: [true, "username is already exists"],
        required: [true, "username is required"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "email address required"],
        unique: [true, "user already exists with this email address"],
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [true, "password field is required"],
        trim: true,

    }
}, { timestamps: true })

const userModel = mongoose.model("User", userSchema)
module.exports = userModel
