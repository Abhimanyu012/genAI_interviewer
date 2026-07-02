const { Router } = require("express")
const authController = require("../controllers/auth.controller")

const authRouter = Router()



authRouter.post("/register", authController.registerUserController)
authRouter.post("/login", authController.loginUserController)


module.exports = authRouter