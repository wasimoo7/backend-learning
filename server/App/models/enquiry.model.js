let mongoose=require('mongoose');


let enquirySchema=mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  phone:{
    type:String,
    required:true
  },
  message:{
    type:String,
    required:true
  }
});

let enquireModel=mongoose.model("enquiry", enquirySchema)

module.exports=enquireModel