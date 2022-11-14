const authUser = require('../models')
const jwt = require('jsonwebtoken')
const {User} = authUser

const tokenKEY = "woqiepskielopqnc"

module.exports = {

    loginUser: async (req, res) =>{
        const {email, password} = req.body
    
        const data = await User.findOne({
            where: {
                email: email,
                password: password
            }
        })

        const token = jwt.sign({email, password}, tokenKEY)

       if (!data) {
        res.status(402).json({
            success: false
        }) 
       }else {
        res.status(200).json({
            success: true,
            token,
        })
       }

      

    },

    regisUser: async (req, res) =>{
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,

        }).then ((regisUser)=>{
            if (regisUser) {
                res.send(regisUser)
                
            } else {
                res.status(400).send('error add data')
            }
        })
    },


}