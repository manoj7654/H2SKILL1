//  importing express for creating team router
const express = require("express")
const teamRouter = express.Router()


// requiring mergeData for making requres
const {mergeData}  = require("../controller/team.controller")


// request making here 
teamRouter.get("/allData",mergeData)


// exporting team routee
module.exports = { teamRouter }