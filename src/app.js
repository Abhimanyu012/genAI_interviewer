const express = require("express")
const connectDb = require("./config/database")
const authRouter = require("./routes/auth.routes")
const app = express()
app.use(express.json())

app.use("/api/auth", authRouter)

connectDb()

app.get("/", (req, res) => {
    res.send("hello")
})
module.exports = app