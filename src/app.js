const express = require("express")
const connectDb = require("./config/database")
const app = express()
app.use(express.json())

connectDb()

app.get("/", (req, res) => {
    res.send("hello")
})
module.exports = app