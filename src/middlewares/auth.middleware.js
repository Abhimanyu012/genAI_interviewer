const jwt = require("jsonwebtoken")
const tokenBlacklistModel = require("../models/tokenBlacklist")

const authUser = async(req,res,next)=>{
    const token = req.cookies.token
    if(!token){
        return res.status(401).json({message:"Token not provided"
        })
    }
   try {
    const blacklistedToken = await tokenBlacklistModel.findOne({ token })
    if (blacklistedToken) {
        return res.status(401).json({ message: "Token has been revoked" })
    }

    const decoded =  jwt.verify(token, process.env.JWT_SECRET || "fallback_secret_key")
    req.user = decoded
    next()
   } catch (error) {
        return res.status(400).json({message:"Invalid token"})
   }
}

module.exports = authUser