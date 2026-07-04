const bcrypt = require("bcryptjs");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

/**
 * @name registerUserController
 * @description Register a new user, issue JWT cookie, and return safe data.
 * @access Public
 */
const registerUserController = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const isUserAlreadyExists = await userModel.findOne({
            $or: [{ username }, { email }]
        });

        if (isUserAlreadyExists) {
            return res.status(400).json({ message: "Account already exists" });
        }

        // Force password to string to prevent numerical input crashes
        const hashPassword = await bcrypt.hash(String(password), 10);

        const createUser = await userModel.create({
            username,
            email,
            password: hashPassword
        });

        // Sign token using an environment fallback secret keys
        const token = jwt.sign(
            { id: createUser._id },
            process.env.JWT_SECRET || "fallback_secret_key",
            { expiresIn: "1d" }
        );

        // Secure your session tokens against client-side script hijacking
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 24 * 60 * 60 * 1000 // 1 day
        });

        return res.status(201).json({
            message: "User created successfully",
            user: {
                id: createUser._id,
                username: createUser.username,
                email: createUser.email
            },
            token
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

/**
 * @name loginUserController
 * @description Log in existing user, issue JWT cookie, and validate input safely.
 * @access Public
 */
const loginUserController = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Compare string values directly
        const isPasswordValid = await bcrypt.compare(String(password), user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET || "fallback_secret_key",
            { expiresIn: "1d" }
        );

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 24 * 60 * 60 * 1000
        });

        // Use standard 200 HTTP status code for successful resource retrieval
        return res.status(200).json({
            message: "User logged in successfully",
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            },
            token
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = { registerUserController, loginUserController };
