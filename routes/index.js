const express = require('express')
const router = express.Router()

const userRouter = require('./user.router')
const listRouter = require('./list.router')
const authRouter = require('./auth.router')

router.use("/user", userRouter)
router.use("/list", listRouter)
router.use("/auth", authRouter)


module.exports = router