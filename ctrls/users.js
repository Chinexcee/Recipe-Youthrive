const Users = require("../model/usersModel")
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const { sendEmail } = require("../utils")




const usersRegister = async(req, res)=>{
  // Fetching user details
  const {username, email, password, role, phoneNumber} = req.body

  // Validation to ensure details are supplied
try {


  // if(!userName){
  //   return res.status(400).json({message: "Choose a username"})
  // }
  // const usernameExist = await Users.findOne({userName})
  // if(usernameExist){
  //   return res.status(400).json({message: "This username has been taken"})
  // }

  if(!email){
    return res.status(400).json({message: "Enter your email"})
  }
  
  // Already registered email
  const existingUser = await Users.findOne({email})

  if(existingUser){
    return res.status(400).json({message: "This User already exist!"})
  }
  // Hashing password with bcrypt
  const cryptedPassword = await bcrypt.hash(password, 12)

  const newUser = new Users({ username, email, password: cryptedPassword, role, phoneNumber})
 
  await newUser.save()

  // const response = await sendEmail(username, email, subjectOfMail)

  const subjectOfMail = {
    from: `${process.env.EMAIL}`,
    to: userEmail,
    subject: subjectOfMail,
    html: ` 
        <div>
            <h1> Hello ${username} </h1>
            <h2> We are excited to have you join our Recipe creators! </h2>

            <p>gyfvtf tyftyf tyftgvgcvg</p>

            

            <h6>Thanks You!</h6>
        </div>
    `
}

  return res.status(200).json(`Your account has been created ${username}`)

  // return res.status(200).json({
  //     message: "Successful"
  // })

 
} 
catch (error) {
  res.status(400).json(error.message)
}
 
}


// Login

const userLogin = async(req, res)=>{
  //  Accept user details

  const { email, password, username} = req.body


  // // Running a check if user exist in database

  const user = await Users.findOne({email})

  
  //   // Generating token to grant access to the user

  const userLoad = {
    id: user._id,
    email: user.email,
    username: user.username
  }


  return res.status(200).json({
    message: `Welcome back ${username}`,
    userLoad
  })
  }
 

// Forgot password

const forgotPassword = async(req, res)=>{

  const { email, username, 

  subjectOfMail } = req.body

  // const mailSample = "info@silverblue.com"

  const user = await Users.findOne({email})
  
  if(!user){

    return res.status(404).json({message: "User doesn't exist"})

  }

  const userPayLoad = {
    id: user._id,
    email: user.email
  }

  const token = process.env.ACCESS_TOKEN

  const accessToken = jwt.sign(userPayLoad, token, {expiresIn: "10m"})

  const _URL = `www.bluesilver.com/${token}`


  // Sending email for verification link

  const response = await sendEmail(username, email, subjectOfMail)



  return res.status(200).json({
      message: "Successful"
  })


}

const resetPassword = async (req, res)=>{


  try {

      //Should be coming with the access Token generated

      const { password, email } = req.body

      const user = await Users.findOne({ email })

      if(!user){
          return res.status(404).json({message: "User not found"})
      }
      console.log(hashedPassword)

      const hashedPassword = await bcrypt.hash(password, 12)

      user.password = hashedPassword

      await user.save()



      return res.status(200).json({
          message: "Successful"
      })

    
      

      } catch (error) {
          return res.status(500).json({message: error.message})
      }
      


}



//  Fetching all users
  
const getAllUsers = async(req, res)=>{
  const users = await Users.find()

  return res.status(200).json({message: "Users Inventory",
    count: users.length,
    users
    
  })
}

// To get one user

const onlyOneUser = async(req, res)=>{

  
  const { _id } = req.params

  const user = await Users.findOne(_id)

  return res.status(200).json({
    message: "User Details",
    user
  })
}


  const updateUserPassword = async(req, res)=>{

    const { _id } = req.params
    
    const { password } = req.body

    const userUpdated = await Users.findOneAndUpdate(
       _id,
      { password},
      {new: true}
  )

    return res.status(200).json({
      message: "Update successful",
      user: userUpdated,
      
    })
}

// Deleting a user or part of a user info

const deleteUser = async(req, res)=>{

  const { _id } = req.params

  const deletedUser = await Users.findOneAndDelete(_id)

  return res.status(200).json({
      message: "Deleted Successfully",
  })
}


module.exports = {
  usersRegister,
  userLogin,
  forgotPassword,
  resetPassword,
  getAllUsers,
  onlyOneUser,
  updateUserPassword,
  deleteUser
  
  
}

