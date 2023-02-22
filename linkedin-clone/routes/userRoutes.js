const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersControllers')
const verifyJWT = require('../middleware/verifyJWT')

// router.use(verifyJWT)


router.route('/')
    .get(userController.getAllUsers)
    .post(userController.createNewUser)
    .patch(userController.updateUser)

router.route('/:id')
    .get(userController.getUserById)

module.exports = router