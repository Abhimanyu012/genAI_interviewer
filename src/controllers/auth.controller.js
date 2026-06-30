const { default: bcrypt } = require("bcryptjs")
const userModel = require("../models/user.model")
/**
 * @name registerUserController
 * @description register new user ,expect username,email,password
 * @access public
 */

const registerUserController = async (req, res) => {
    const { username, email, password } = req.body
    if (!username || !email || !password ) {
        return res.status(400).json({ message: "All fields are required" })
    }

    const isUserAlreadyExists = await userModel.findOne({
        $or:[{username},{email}]
    })
    if(isUserAlreadyExists){
        return res.status(400).json({message:"Account already exists"})
    }
    const hashPassword = await bcrypt.hash(password,10)

    const createUser = await userModel.create({
        userName,
        email,
        password:hashPassword
    })

    console.log(createUser)
 


}
module.exports = { registerUserController }