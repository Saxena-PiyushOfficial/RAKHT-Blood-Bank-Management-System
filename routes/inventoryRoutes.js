const express = require('express')
const authMiddleware = require('../middlewares/authMiddleware')
const { createInventoryController, getInventoryController } = require('../controllers/inventoryController')
const router = express.Router()



router.post('/create-inventory',authMiddleware,createInventoryController);
router.get('/get-inventory',authMiddleware,getInventoryController);
module.exports = router
