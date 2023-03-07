const userController = require('../controllers/user.controller');
const express = require('express');
const router = express.Router();

router.post('/registerMe', userController.registerMe);
router.post('/googleUserLogin', userController.googleUserlogin);
router.post('/loginMe', userController.loginMe);
router.get('/usersMe', userController.getAll);
router.get('/current', userController.getCurrent);
router.get('/:id', userController.getById);
router.get('/userName/:username', userController.getByUserName);
router.put('/:id', userController.update);
router.delete('/:id', userController._delete);

module.exports = router;


