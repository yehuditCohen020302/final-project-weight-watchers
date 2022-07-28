const express = require('express');
const controller=require('../Controllers/accountController')
const router=express.Router();

router.post('/login',controller.login);
router.post('/', controller.addManager)

module.exports = router;