const User = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const isExist = await User.findOne({
            email: email
        })
        if (isExist) {
            return res.status(400).json({
                message: "User Already Exist"
            })
        }
        const hashedPass = await bcrypt.hash(password, 10)
        const user = await User.create({
            username: username,
            password: hashedPass,
            email: email
        })
        res.status(201).json({
            message: "User Created",
            user: {
                id: user._id,
                username: username,
                email: email,
                role: user.role
            }
        })
    } catch (error) {
        res.status(500).json({
            message: "Failed to register"
        })
    }
}
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({
            email: email
        })
        if (!user) {
            return res.status(401).json({
                message: "User not exist"
            })
        }
        const passwordMatch = await bcrypt.compare(password, user.password)
        if (!passwordMatch) {
            return res.status(401).json({
                message: "Invalid Password"
            })
        }
        const token = jwt.sign({
            id: user._id,
            role: user.role
        },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d"
            }
        )
        res.json({
            message: "Login successful",
            token: token,
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                role: user.role
            }
        })
    } catch (error) {
        res.status(500).json({
            message: "Login failed"
        })
    }
}
module.exports = {
    register,
    login
};