const enquireModel = require("../../models/enquiry.model.js")

let enquiryInsert = (req, res) => {
  let { sName, sEmail, sPhone, sMessage } = req.body;
  let enquiry = new enquireModel({
    name: sName,
    email: sEmail,
    phone: sPhone,
    message: sMessage
  })

  enquiry.save()
    .then(() => {
      res.send({
        status: 1,
        message: "enquiry save successfully"
      });
    })
    .catch((error) => {
      res.send({
        status: 0,
        message: "error while saving enquiry",
        error
      });
    });

}

let enquiryList=async(req, res)=>{
  let enquiry=await enquireModel.find()
  res.send({status:1,enquiryList:enquiry})

}

let enquirydelete=async(req,res)=>{
  let enId=req.params.id;
  let enquiry=await enquireModel.deleteOne({_id:enId});
  res.send({status:1,enquiry})

}
module.exports = { enquiryInsert,enquiryList,enquirydelete } 