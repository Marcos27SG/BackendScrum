const {Schema, model }= require('mongoose') ;

const roomSchema = new Schema({
    codeRoom: {type: Number , required: true} , 
    userAdmin: {type: String , required: true} , 
    typeOfRoom: {type:String , required: true } , 
    active: {type: Boolean , required: true} 
} , {
    timestamps: true ,
    versionKey : false 
});



module.exports = model ("roomModel" ,roomSchema)