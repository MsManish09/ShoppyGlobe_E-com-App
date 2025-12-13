
// import usermodel -> cart is a property in the user document
import userModel from '../models/userModel.js'

export const addToCart = async (req, res)=>{

    try {
        
        // get userId / user email, proudct object and quantity from body
        const { email, product, quantity } = req.body

        // extract user from DB using user e-mail
        const user = await userModel.findOne({email})

        if(!user){
            console.log('user dont exist')
            return res.status(404).json({message: 'User not found'})
        }


        // else update the user cart details
        const newCartItem = {
            product,
            quantity
        }

        // push new item into cart
        user.cartItems.push(newCartItem)

        // save the update
        await user.save()

        // send response
        console.log("Cart item updated successfully, User: ", user)
        res.status(200).json({message: "Cart item updated successfully", user: user})

    } catch (error) {
        console.error("Error while adding item to cart:", error)
        res.status(500).json({ message: "Server error" })
    }
}
