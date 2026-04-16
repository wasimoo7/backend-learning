const enquireModel = require("../../models/equirey.model.js")

let enquiryInsert = (req, res) => {
  let { sName, sEmail, sPhone, sMessage } = req.body;
  let enquiry = new enquireModel({
    name: sName,
    email: sEmail,
    phone: sPhone,
    message: sMessage
  });
  enquiry.save().then(() => {
    res.send({ status: 1, message: 'enquiry saved successfully' })

  }).catch((error) => {
    res.send({ status: 0, message: 'error while saving enquiry', error })
  })
}


 /*
app.post("/api/enquire-insert", async (req, res) => {
  try {
    let { sName, sEmail, sPhone, sMessage } = req.body;

    let enquire = new enquireModel({
      name: sName,
      email: sEmail,
      phone: sPhone,
      message: sMessage
    });

    await enquire.save();

    res.send({ status: 1, message: 'enquiry saved successfully' });

  } catch (error) {

    if (error.code === 11000) {
      res.send({ status: 0, message: 'Email already exists' });
    } else {
      res.send({
        status: 0,
        message: 'error while saving enquiry',
        error: error
      });
    }

  }
});
*/


let enquiryList = async (req, res) => {
  let enquiryList = await enquireModel.find();
  res.send({
    status: 1,
    message: 'enquire list',
    data: enquiryList
  })
}

let deletedEnquiry = async (req, res) => {
  let enquiryId = req.params.id;
  let deletedEnquiry = await enquireModel.deleteOne({ _id: enquiryId });
  res.send({ status: 1, message: "enquiry deleted successfullly", id: enquiryId, delRes: deletedEnquiry })

}

let enquiryUpdate = async (req, res) => {
  try {
    let enquiryId = req.params.id;
    let { sName, sEmail, sPhone, sMessage } = req.body;

    let updateObj = {}
    if (sName) {
      updateObj.name = sName
    }
    if (sEmail) {
      updateObj.email = sEmail
    }
    if (sPhone) {
      updateObj.phone = sPhone
    }
    if (sMessage) {
      updateObj.message = sMessage
    }

    let updateRes = await enquireModel.updateOne({ _id: enquiryId }, updateObj)
    res.send({ status: 1, message: "enquiry updated succesfully", updateRes })
  } catch (error) {
    res.send({
      status: 0,
      message: "error updating enquiry",
      error: error
    });

  }

}


/*
  app.put("/api/enquiry-update/id:",async (req,res)=>{
    let enquiryId =req.params.id;
    let{sName,sEmail,sPhone,sMessage}=req.body;
    
    let updateObj={
      name:sName,
      email:sEmail,
      phone:sPhone,
      message:sMessage
    };

    let updateRes=await enquireModel.updateOne({_id:enquiryId},updateObj)
    res.send({status:1,message:"enquiry updated succesfully",updateRes})
  })
*/

module.exports = { enquiryInsert, enquiryList, deletedEnquiry, enquiryUpdate }



