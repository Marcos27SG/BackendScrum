const votingSystemCtrl = {}

const votingSystemModel  = require ('../models/VotingSystem')
votingSystemCtrl.getVotingSystems  = async (req,res) => {
    const votingSystems = await votingSystemModel.find() 
    res.json (votingSystems)
 }
 votingSystemCtrl.createVotingSystem = async (req,res) => {
    const newSystem = new votingSystemModel(req.body)
    await newSystem.save()
    res.send('createUser')
 }
 votingSystemCtrl.getVotingSystem  =async (req,res) => {
    var nameOfSystem = req.params.name ;
   const VotingSystemFound = await votingSystemModel.findOne({'name' :nameOfSystem} )
   res.send(VotingSystemFound); 
 }
 
 
 
module.exports =  votingSystemCtrl;