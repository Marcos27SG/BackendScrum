const {Schema, model }= require('mongoose') ;

const userSchema = new Schema({
    name: {type: String , required: true} , 
    room: {type: String , required: true} , 
    votation: {type: Boolean , required: true} , 
    score: {type: Number , required: true} 
} , {
    timestamps: true ,
    versionKey : false 
});



module.exports = model ("userModel" , userSchema)