const express = require('express')
const router = express.Router()
const {sendmessage,getmessage} = require("../controller/message.controller")
const checkToken=require("../middleware/checkToken")

router.post("/send/:id",checkToken,sendmessage);
router.get("/:id",checkToken,getmessage);

module.exports = router;