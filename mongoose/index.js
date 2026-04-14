let express= require('express')
var mongoose = require('mongoose');
let enquireModel =require('./models/equirey.model');
require('dotenv').config();
let app=express();

app.use(express.json());

app.post('/api/enquire-insert',(req,res)=>{
  let {sName,sEmail,sPhone,sMessage}=req.body;
  let enquiry= new enquireModel({
    name:sName,
    email:sEmail,
    phone:sPhone,
    message:sMessage
  });
  enquiry.save().then(()=>{
    res.send({status:1,message:'enquiry saved successfully'})
    
  }).catch((err)=>{
    res.send({status:0,message:'error while saving enquiry'},err)
  })
})

mongoose.connect(process.env.DBURL).then(()=>{
  app.listen(process.env.PORT)

})