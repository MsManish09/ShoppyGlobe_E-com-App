
// import usermodel -> cart is a property in the user document
import userModel from '../models/userModel.js'

export const deleteFromCart = async (req, res) => {
    try {

        // get user e-mail and product id to remove form the cart
        const { email, productId } = req.body

        // extract user from DB using user e-mail
        const user = await userModel.findOne({ email })

        // if user dont exist in the DB
        if (!user) {
            console.log('user dont exist')
            return res.status(404).json({ message: 'User not found' })
        }

        // else remove product form the cart -> filter only those id != productId
        user.cartItems = user.cartItems.filter(
            (item) => item.product.id !== Number(productId)
        )

        // save cart update
        await user.save()

        // return response
        console.log("Cart updated successfully, User cart: ", user.cartItems)
        res.status(200).json({ message: "Cart item deleted successfully. ", cartItems: user.cartItems })


    } catch (error) {
        console.error("Error while deleting item from cart:", error)
        res.status(500).json({ message: "Server error" })
    }
}