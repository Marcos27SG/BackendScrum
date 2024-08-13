const {Router}  = require('express')

const router  = Router()
const votingSystemCtrl  = require ('../controllers/votingSystem.controller')

router.get('/', votingSystemCtrl.getVotingSystems);

router.post('/', votingSystemCtrl.createVotingSystem);

router.get('/:name', votingSystemCtrl.getVotingSystem);
module.exports =  router