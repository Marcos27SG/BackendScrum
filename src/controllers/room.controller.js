const roomCtrl = {}

const roomModel  = require ('../models/Room')
roomCtrl.getRooms  = async (req,res) => {
    const rooms = await roomModel.find() 
    res.json (rooms)
 }
 roomCtrl.getRoomsOcuppied  = async (req,res) => {
  const rooms = await roomModel.find() 
  const roomsOcuppied = [] ;  
  rooms.forEach(Element => {
    roomsOcuppied.push(Element.codeRoom)
  });
  res.send(roomsOcuppied)
}
 roomCtrl.createRoom  =async (req,res) => {
    const newRoom = new roomModel(req.body)
    await newRoom.save()
    res.send(newRoom)
 }
 roomCtrl.getRoom  =async (req,res) => {
   const roomFound = await roomModel.find({codeRoom : req.params.name})
   res.send(roomFound[0]); 
 }
 
 roomCtrl.deleteRoom  =async (req,res) => {
   const roomDeleted = await roomModel.findByIdAndDelete(req.params.id)

 }
 
module.exports =  roomCtrl;