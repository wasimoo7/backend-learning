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
module.exports = { enquiryInsert, enquiryList, deletedEnquiry, enquiryUpdate }