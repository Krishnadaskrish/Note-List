const express = require('express')
const router = express.Router()
const userController = require ('../Controllers/UserController')
const varifytoken = require('../Middileware/userAUth')
const tryCatch = require('../Middileware/tryCatchMiddileware')


router.post('/regiter ', tryCatch(userController.UserRegisteration))
router.post('/login',tryCatch(userController.userLongin))
router.post('/createnote',tryCatch(userController.createNote))
router.get('/getNotes',varifytoken,tryCatch(userController.getNotes))
router.put('/updateNote/:id',varifytoken,tryCatch(userController.editNote))
router.delete('/deleteNote/:id',varifytoken,tryCatch(userController.deleteNote))


module.exports = router


