const { request, response } = require('express')
const models = require('../models')
const {User} = models

module.exports = {
    getAllUser: async (req, res)=>{
        const users = await User.findAll()
        res.json({
            message: "succes get data",
            data: users
        })
    },

    getUserByID: async (req, res) =>{
        const {id} = req.params
        const user = await User.findByPk(id)

        res.json({
            message: "succes get data",
            data: user
        })
    },

    addUser: async(req, res) =>{
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            createdAt: req.body.createdAt,
            updatedAt : req.body.createdAt
        }).then ((addUser)=>{
            if (addUser) {
                res.send(addUser)
                
            } else {
                res.status(400).send('error add data')
            }
        })


    },
    deleteUserByID: async (req, res) =>{
        await User.destroy({
            where : {
                id: req.params.id
            }
        }).then((deleteUser) =>{
            if(deleteUser === 1){
                res.status(200).json({
                    message: "Deleted succesfully"
                })
            }else {
                res.status(404).json({
                    message: "List not found"
                })
            }
        }).catch ((error)=>{
            res.status(500).json(error)
        })
    },

    updateUserID: async(req, res, next) =>{

        const updateUser = list => list
        const {name, email, password} = req.body
        const obj = {
            task: updateUser(name),
            email: updateUser(email),
            password: updateUser(password),
            createdAt: new Date(),
            updatedAt: new Date()
        }
        await User.update(obj, {
            returning: true, 
            where:{
                id: req.params.id
            }
        })
        .then((update)=>{
            if (update) {
                res.status(200).json({
                    message: "Update successfuly"
                })
            }else{
                res.status(400).send('error update data')
            }
        })
        
        
    },

}
