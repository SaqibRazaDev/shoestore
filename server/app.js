
let colors = require("colors");
let jwt = require("jsonwebtoken")
let user;
// ............multer.........

const multer  = require('multer')

// ................secure...........
let Dotenv =require("dotenv");
Dotenv.config({path:"./config.env"})

// ...........Server...........

let Express = require("express");
let app = Express();
app.use(Express.json());

// const port = process.env.PORT

// ..........MongoDB...........

const mongoose = require("mongoose");
require("./DB/conn")
const User = require("./modles/users")
const AdsData = require("../server/modles/ads");
const Orders = require("./modles/orders")

// .........Multer............

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, './server/Uploadsfiles')
    },
    filename: function(req, file, cb) {
      cb(null, file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })


// ...........routes..........

app.post("/signup", async(req,res)=>{
    const user = new User(req.body);
    await user.save();
    res.send(true);
    console.log(req.body);
});

app.get("/userdata", async function(req, res) {
    const userdata = await User.find()
    res.json(userdata)
    console.log(userdata);
});
// .....................jwt verify.....
app.post("/seesion" ,function(req,res){

  jwt.verify(req.body.SomeToken, "thisismylovecountry" , async function(err,data){
    if(data){
      let user =  await User.findById(data.id);
      res.json(user)
    }
  })
})

app.post("/login",async(req,res)=>{
    console.log(req.body)
    let token;
    let Email = req.body.email
    let Password = req.body.password

    const UserMila = await User.findOne({email:Email, password:Password})
    user=UserMila
    console.log(UserMila);

    if(UserMila){
        // .....jwtoken\

        jwt.sign({id:UserMila._id},"thisismylovecountry" ,{expiresIn:"12h"} , function(err , meratoken){
          res.json({message:"User Found",UserMila , meratoken});
        });
        
        

    }else{
        res.json({message:"User not Found"});
    }
});

app.delete("/usersdel",async function (req,res){
  let usermila = await User.findByIdAndDelete(req.query.anc);
  res.json("True")
})
// ........admin Rout....

app.post("/productlist",upload.single('adimg'), async(req,res)=>{
    req.body.adimg = req.file.originalname
    let Adsdata = new AdsData (req.body);
        await Adsdata.save();
        res.end("file Uploaded");
        
})

// ........cardsdta

app.get("/adData", async function(req, res) {
 let data = await  AdsData.find()
        res.json(data);
        console.log(data);

});

app.get("/singleproduct", async function(req, resp) {
    try {
      let Admila = await AdsData.findById(req.query.anc);
      console.log(Admila);
      resp.json(Admila);
    } catch (err) {
      console.error(err);
      resp.status(500).send("Server Error");
    }
  });


app.post("/confirmorder",async function(req,res){
let Order = new Orders(req.body);
Order.units = req.body.cartproduct;
    await Order.save();
    console.log(req.body);
if(Order){
  res.json("Success");
}else{
  console.log("Order Data not Found");
}
})

app.get("/orderdata", async function(req,res){
  const Data = await Orders.find({delivered:false}).populate('userdata').exec();

  console.log(Data);
    res.json(Data);
})


app.use(Express.static("./server/uploadsfiles"));
app.listen(4000, ()=>{
    console.log("Server is running on port 4000".black.bgGreen);
});