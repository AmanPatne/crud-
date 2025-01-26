

const express = require('express');
const router = express.Router();
const userController = require('../Controller/data.js');


router.post('/addnewuser',userController.addUsers);


module.exports = router;


