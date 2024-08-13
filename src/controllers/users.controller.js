const userCtrl = {}

const userModel  = require ('../models/User')
userCtrl.getUsers  = async (req,res) => {
    const users = await userModel.find( {'room' : req.params.room}) ;
    res.json (users)
 }
 userCtrl.createUser  =async (req,res) => {
    const newUser = new userModel(req.body)
    const test = await newUser.save()
    res.send(test)
 }
 userCtrl.getUser  =async (req,res) => {
   const userFound = await userModel.find({ '_id' : req.params.id})
   console.log(userFound);
   res.send(userFound); 
 }
 userCtrl.updateUser  =async (req,res) => {
   const userUpdated  = await userModel.findByIdAndUpdate(req.params.id , req.body)
   res.send(userUpdated)
 }
 userCtrl.deleteUser  =async (req,res) => {
    await userModel.findByIdAndDelete(req.params.id)
   res.json({ status: "Employee Deleted" });
 }

 userCtrl.cleanResults = async (req,res) => {
 // const blable = await userModel.find( {'room' : "1234"}) ;
  let blable = await userModel.find({'room' :req.body.room}) ;
  console.log(blable);
  blable.forEach(element => {
    element.score = 0 ; 
    element.votation = false ;
    element.save()
  });
  

 
  res.json(blable)
}
 
module.exports =  userCtrl;