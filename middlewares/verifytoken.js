const jwt = require('jsonwebtoken')
const Users = require('../model/usersModel')


 const auth = async(req, res, next)=> {
    const token = req.header('auth-header')
    
    try {

      if (!token) return res.status(401).json({
        
        message: "Access Denied"
    })

    
        const verified = jwt.verify(token, process.env.ACCESS_TOKEN);
        req.user = verified;
        next()


    } catch (error) {
        res.status(400).json({
            message: "Invalid Token"
        })
    }

    
} 

module.exports = auth