
import bcrypt from 'bcrypt'
import userModel from '../models/userModel.js'

// add new users to mongodb. 
export const signup = async (req, res) => {
  try {
    const { name, email, password, address } = req.body

    //  Validate required fields
    if (!name || !email || !password ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    //  Check if user already exists -> show message and return
    const existingUser = await userModel.findOne({ email })
    if (existingUser) {
      return res.status(409).json({ message: "Email already registered" })
    }

    //  encode password for better security
    const encodePassword = await bcrypt.hash(password, 10)

    // Create new user
    const newUser = new userModel({
      name,
      email,
      password: encodePassword,
      address,
      cartItems: [],          // defualt
      previousOrders: []      // defualt
    })

    // save new user
    await newUser.save()

    //  Send response -> new user details
    res.status(201).json({
      message: "User registered successfully",
      user: { id: newUser._id, name: newUser.name, email: newUser.email }
    })

  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ message: "Server error" })
  }
}
