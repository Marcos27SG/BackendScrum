const {Schema, model }= require('mongoose') ;

const votingSystemSchema = new Schema({
    name: {type: String , required: true} , 
    numbers: {type: [Number] , required: true} , 
    
} , {
    timestamps: true ,
    versionKey : false 
});



module.exports = model ("votingSystemModel" , votingSystemSchema)