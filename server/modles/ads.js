const mongodb = require("mongoose");

const adsschema = new mongodb.Schema({
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
});

const AdsData = mongodb.model('adsData',adsschema)
module.exports = AdsData;