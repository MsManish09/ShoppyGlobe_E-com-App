
import mongoose from 'mongoose'

const cartSchema = new mongoose.Schema({
    product : { type: Object, required: true},
    quantity :{ type: Number, default: 1 }
},
{ _id: false }   //  to prevent auto id
)

const previousOrdersSchema = new mongoose.Schema({
    product: {
      type: Object,
      required: true
    },
    quantity: { 
      type: Number, 
      default: 1 
    },
    datePurchased: { 
      type: Date, 
      default: Date.now 
    }
},
{ _id: false }   //  to prevent auto id
)

const userSchema = new mongoose.Schema({
    name: {type:String, required: true },
    email: {type:String, required: true, unique: true },
    password: {type:String, required: true },
    address: {type:String, required: true },
    cartItems :{type: [cartSchema], default: []},  // cart default should be empty
    previousOrders: {type: [previousOrdersSchema], default: []} , // defualt should be emtpy array.
},
{ timestamps: true }
)

const userModel = mongoose.model('User', userSchema)

export default userModel