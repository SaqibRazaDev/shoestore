const mongoose = require("mongoose");
const DB = 'mongodb://127.0.0.1:27017/RUser'

mongoose.connect(DB).then((err,success)=>{
    console.log(err || success);
})