import mongoose, { Schema } from "mongoose";



const bookingSchema =new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    category:{
        type:String,
        enum:["dj","marriage","dinner","ceremony","conference","festival","brithday"]
    },

    time:{
      type:String,
      required:true
    },
    AMPM:{
       type:String,
        enum:["AM","PM"]
    },
    date:{
        type:Date,
        default:Date.now,
        required:true
    },
    guests:{
        type:Number,
        required:true
    }

})

export const bookingModel= mongoose.model('booking',bookingSchema)
