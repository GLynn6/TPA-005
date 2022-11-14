const { request, response } = require('express')
const models = require('../models')
const {List, User} = models

module.exports = {
    getAllList: async (req, res)=>{
        const Lists = await List.findAll()
        res.json({
            message: "succes get data",
            data: Lists
        })
    },

    getListDetail: async (req, res) =>{
        const {id} = req.params
        const list = await List.findByPk(id, {include: User})

        res.json({
            message: "succes get data",
            data: list
        })
    },

    addList: async(req, res) =>{
        await List.create({
            task: req.body.task,
            desc: req.body.desc,
            complete: req.body.complete,
            userId: req.body.userId,
            createdAt: req.body.createdAt,
            updatedAt : req.body.createdAt
        }).then ((addList)=>{
            if (addList) {
                res.send(addList)
                
            } else {
                res.status(400).send('error add data')
            }
        })


    },

    deleteListByID: async (req, res) =>{
        await List.destroy({
            where : {
                id: req.params.id
            }
        }).then((deleteList) =>{
            if(deleteList === 1){
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

    updateListByID: async(req, res, next) =>{

        const updateList = list => list
        const {task, desc, complete, userId} = req.body
        const obj = {
            task: updateList(task),
            desc: updateList(desc),
            complete: updateList(complete),
            userId: updateList(userId),
            createdAt: new Date(),
            updatedAt: new Date()
        }
        await List.update(obj, {
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

    deleteAll: async (req, res) =>{
        await List.destroy({
            truncate: true
          }).then((deleteAllList) =>{
            if (deleteAllList) {
                res.status(404).json({
                    message: "Something wrong"
                })
            }else {
                res.status(200).json({
                    message: "all rows have been deleted successfully"
                })
            }
          }).catch ((error)=>{
            res.status(500).json(error)
        })
    }


}
