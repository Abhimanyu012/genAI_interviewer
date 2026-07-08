const express = require("express")
const connectDb = require("./config/database")
const authRouter = require("./routes/auth.routes")
const cookieParser = require("cookie-parser")
const cors = require('cors')
const app = express()
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(cookieParser())
app.use(express.json())

app.use("/api/auth", authRouter)

connectDb()

app.get("/", (req, res) => {
    res.send("hello")
})
module.exports = app