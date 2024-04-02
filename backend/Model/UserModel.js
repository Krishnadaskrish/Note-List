const mongoose = require('mongoose')
const joi = require ('joi')

const UserSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true 
    } ,
    password : {
        type : String,
        required : true
    }
})


function validation (){

}

module.exports = mongoose.model ('user' ,UserSchema)