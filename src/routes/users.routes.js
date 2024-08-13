const {Router}  = require('express')

const router  = Router()
const usersCtrl  = require ('../controllers/users.controller.js')

router.get('/:room', usersCtrl.getUsers);

router.post('/', usersCtrl.createUser);
router.get('/:id', usersCtrl.getUser);
router.put('/:id', usersCtrl.updateUser);
router.post('/clean', usersCtrl.cleanResults);
router.delete('/:id', usersCtrl.deleteUser);
module.exports =  router