
import userModel from "../models/userModel.js"

export const getUser = async (req, res) => {
  try {
    const { email } = req.body
    console.log(email)

    const user = await userModel.findOne({ email })
    console.log(user)

    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }

    res.status(200).json( {user: user} )

  } catch (error) {
    console.error("Get user error:", error)
    res.status(500).json({ message: "Server error" })
  }
}
