// const mongoose = require("mongoose")
// const jwt = require("jsonwebtoken")
// const Users = require("./model/usersModel")


// const userValidation = async(req, res, next)=>{


//   // user token

//   try {
    
//     const tken = req.header("Authorization")

//     const { username, email, password } = req.body

//    const tokenArray = tken.split(" ")

//    const token = tokenArray[1]

//    const tokenVerified = jwt.verify(token, `${process.env.ACCESS_TOKEN}`)

//    if(!tokenVerified){
//     return res.status(400).json({message: "Access not granted"})
//    }

//    const user = await Users.findOne({email: tokenVerified.email})

//    if(!user){
//     return res.status(401).json({message: "This account does not exist"})
//    }


//    req.user = user

//    next()

//   } catch (error) {
//     return res.status(500).json({message: error.message})
//   }
   
// }


// module.exports = 
//   {userValidation}