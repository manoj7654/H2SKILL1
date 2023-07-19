// importing express 
const express=require("express")


// creating app 
const app=express()

// dotenv for accessing port no from env file
require("dotenv").config()


// importing connection
const {connection}=require("./config/db")


// importing team router 
const { teamRouter } = require("./routes/teamRoutes")


// importing cors
const cors=require("cors")
app.use(cors())

// middleware
app.use(express.json())


// basic endpoint of api
app.get("/",(req,res)=>{
    res.send("WELCOME TO THE HOME PAGE OF THIS API")
})


// making request using ream router 
app.use("/",teamRouter)


// server is listening on specific port
app.listen(process.env.port,async()=>{
    try {
        await connection;
        console.log("Connected to DB")
    } catch (error) {
        console.log(error)
        console.log("Something went wrong")
    }
    console.log(`Server is running on port no ${process.env.port}`)
})