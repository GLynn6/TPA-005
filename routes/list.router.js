const express = require('express')
const router = express.Router()

const {
    getAllList,
    getListDetail,
    addList,
    deleteListByID,
    updateListByID,
    deleteAll,
} = require('../controllers/list.controller')

router.get("/", getAllList)
router.get("/:id", getListDetail)
router.post("/", addList)
router.delete("/:id", deleteListByID)
router.put("/:id", updateListByID)
router.delete("/", deleteAll)

module.exports = router