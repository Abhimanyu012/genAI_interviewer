const { default: mongoose } = require("mongoose")

const tokenBlacklistSchema = new mongoose.Schema({
    token:{
        type: String,
    required: [true, "token required"],
}
}, { timestamps: true })

const tokenBlacklistModel = mongoose.model("tokenBlacklist", tokenBlacklistSchema)
module.exports = tokenBlacklistModel