// let Express = require("express");
// let router = Express();

// router.post("/",async(req,res)=>{
//     res.send("wellcome to server route")
//     // const user = new User(req.body);
//     // await user.save();
//     // if(req.body.password == req.body.cpassword){
//     //     res.send(true);
//     // }else{
//     //     res.send(false);
//     // }
//     // console.log(req.body);
// })

// router.post("/login",async(req,res)=>{
//     let Email = req.body.email
//     let Password = req.body.password

//     const UserMila = await User.findOne({email:Email, password:Password})

//     if(UserMila){
//         res.json(UserMila);
//     }else{
//         res.json(null);
//     }
// });

// module.exports = router;