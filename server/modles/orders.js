const { default: mongoose } = require("mongoose");
const mongodb = require("mongoose");

const orderschema = new mongodb.Schema({
    cartproduct:[{
    title:{
        type:String,
        required:true
    },
    adimg:{
        type:String,
        required:true
    },
    adprice:{
        type:String,
        required:true
    },
    
}],
delivered:{
    type:Boolean,
    delivered:false
},
Amount:{
    type:String,
    required:true
},
items:{
    type:String,
    required:true
},
userdata:{
    type:mongoose.SchemaTypes.ObjectId,
    ref:"user"
 }
});

const OrderDetails = mongodb.model('orders',orderschema)
module.exports = OrderDetails;