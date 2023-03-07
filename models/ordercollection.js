const mongoose = require("mongoose")
 
const orderSchema = new mongoose.Schema({
    Delivery : {
        type:String,
         required: [true, "Please Enter Your delivery address"],
    
    

    },
    Phone : {
        type:String,
         required: [true, "Please Enter Your phone number"],
         
         
        },
        numberofearbud:{
            type:String,
            required:[true,"please select the number"]
        },
        total:{
            type:String,
            
        },
        userEmail:{
            type:String,
            required:true,
        }
})
module.exports =  mongoose.model("orders",orderSchema)
