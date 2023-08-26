const mongodb = require("mongoose");
const bcrypt = require("bcryptjs");
let jwt = require("jsonwebtoken");


const userSchema = new mongodb.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    },
    type:{
        type:String
    }
    // token:{
    //         type:String,
    //         required:true
    //     },
});

// .........hash password....

userSchema.pre('save', async function(next){
    if(this.isModified('password')){
        this.password = bcrypt.hash(this.password,12)
        this.cpassword = bcrypt.hash(this.cpassword,12)
    }
    next();
});

const User = mongodb.model('user',userSchema)
module.exports = User;