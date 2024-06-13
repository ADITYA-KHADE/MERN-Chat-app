const express = require('express')
const router = express.Router()
const checkToken=require("../middleware/checkToken")
const getUserBySidebar=require("../controller/user.controller")

router.get('/all',checkToken,getUserBySidebar);
module.exports = router