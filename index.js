const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv").config()
const connectToDB = require("./dbase/datafile")
const routes = require("./routes/userRoutes")
const routeres = require("./routes/recipesRoute")
const routee = require("./routes/favoritesRoute")
const auth = require('./middlewares/verifytoken')






const app = express()

// Indroducing Middlewares
app.use(express.json())

app.use(cors())


const PORT = process.env.PORT || 8080

// Invoking DB function
connectToDB()

app.listen(PORT, ()=>{
  console.log(`Server is running on ${PORT}`)
})

app.get("/", (req, res)=>{
  res.status(200).json({message: "Welcome to Our Recipe Server"})
})

app.use("/api", routes)

app.use("/api", routeres)

app.use("/api", routee)

app.use('/api', auth)


app.use((req, res)=>{
  res.status(404).json({message:"Sorry, this path doesn't exist!"})
})