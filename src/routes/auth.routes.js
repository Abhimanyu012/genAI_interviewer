const { Router } = require("express")
const authController = require("../controllers/auth.controller")
const authUser = require("../middlewares/auth.middleware")

const authRouter = Router()



authRouter.post("/register", authController.registerUserController)
authRouter.post("/login", authController.loginUserController)
authRouter.post("/logout",authController.logoutController)
authRouter.get("/get-me",authUser,authController.getUserController)


module.exports = authRouter