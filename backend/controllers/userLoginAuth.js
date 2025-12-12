
import userModel from "../models/userModel.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const login = async (req, res) => {
  try {
    const { email, password } = req.body

    //  validate credintials 
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" })
    }

    // check if user exists
    const user = await userModel.findOne({ email })
    if (!user) {
        console.log('user not found')
        return res.status(404).json({ message: "User not found" })
    }


    //  compare password (bcrypt hashed)
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
        console.log('incorrect password')
        return res.status(401).json({ message: "Incorrect password" })
    }

    // create JWT token -> token expires in 30 minutes
    const token = jwt.sign( { id: user._id, email: user.email }, process.env.JWT_SECRET,{ expiresIn: "30m" } )
    console.log('JWT Token: ', token)

    // Send response
    return res.status(200).json({ message: "Login successful", token, user: { id: user._id, name: user.name, email: user.email } })

  } catch (error) {
    console.log("Login Error:", error);
    res.status(500).json({ message: "Server error" })
  }
}
