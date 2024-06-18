const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const Users = require("../model/usersModel")


const userValidation = async(req, res, next)=>{


  // user token

  try {

    
    const { email, password} = req.body

  if(!email || !password){
    return res.status(400).json({message: "All fields required"})
  }

  // Running a check if user exist in database

  const user = await Users.findOne({email})

  if(!user){
    res.status(400).json({message: "User does not exist"}) 
  }

  const matchingPassword = bcrypt.compare(password, user.password)

  if(!matchingPassword){
    return res.status(402).json({message:"Password or email not correct"})
  
  }

  // password match with the hashed
  
    // Generating token to grant access to the user

  const userLoad = {
    id: user._id,
    email: user.email,
    
  }

   
    const accessToken = jwt.sign(userLoad, process.env.ACCESS_TOKEN, {expiresIn: "5m"})

  // res.send({accessToken})
    // console.log(accessToken);

    next()

   }
   catch (error) {
    return res.status(500).json({message: error.message})
  }
 
}


module.exports = 
  {userValidation}