const express = require('express')
const router = express.Router()


const {
    loginUser,
    regisUser,
    
    

} = require('../controllers/auth.controller')

router.post("/login", loginUser)
router.post("/register", regisUser)


module.exports = router