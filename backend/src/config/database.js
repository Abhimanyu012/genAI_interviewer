const mongoose = require("mongoose")

const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log("server is connected successfully")
    } catch (error) {
        console.log("connection error in database: ", error)
    }
}
module.exports = connectDb