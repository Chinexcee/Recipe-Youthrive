// const nodemailer = require("nodemailer")



// const emailUser = async( name, userEmail, subjectOfMail )=>{

    
//     try {

//         // Create Transport
//         const mailerTransport = nodemailer.createTransport({
//             service: "gmail",
//             auth: {
//                 user: `${process.env.EMAIL}`,
//                 pass: `${process.env.EMAIL_PASSWORD}`
//             }
//         })
    
//         // Create email details to send
//         const mailDetails = {
//             from: `${process.env.EMAIL}`,
//             to: userEmail,
//             subject: emailSubject,
//             html: ` 
//                 <div>
//                     <h1> Hello ${name} </h1>
//                     <h2> We are excited to have you join our Team! </h2>
    
//                     <p>gyfvtf tyftyf tyftgvgcvg</p>

                    
    
//                     <h6>Thanks.</h6>
//                 </div>
//             `
//         }

//         // Ask Transport to send email detaisl
//         const result = await mailerTransport.sendMail(mailDetails)

//         return result
        
//     } catch (error) {
//         return console.log(error)
//     }

// }










module.exports = {
    emailUser
}