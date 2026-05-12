const enquireModel = require("../../models/enquiry.model.js")

let enquiryInsert = (req, res) => {

  let { name, email, phone, message } = req.body;

  let enquiry = new enquireModel({
    name,
    email,
    phone,
    message
  })

  enquiry.save()
    .then(() => {
      res.send({
        status: 1,
        message: "enquiry save successfully"
      })
    })
    .catch((error) => {
      console.log(error)
      res.send({
        status: 0,
        message: "error while saving enquiry",
        error
      })
    })

}

let enquiryList = async (req, res) => {

  let enquiry = await enquireModel.find();

  res.send({
    status: 1,
    enquiryList: enquiry
  })

}

let enquirydelete = async (req, res) => {

  let enId = req.params.id;

  let enquiry = await enquireModel.deleteOne({
    _id: enId
  })

  res.send({ status: 1, enquiry })

}

let enquirySingleRow = async (req, res) => {
  let enId = req.params.id;

  let enquiry = await enquireModel.findOne({ _id: enId })

  res.send({ status: 1, enquiry })

}

let enquiryUpdate = async (req, res) => {
  let enId = req.params.id;
  let { name, email, phone, message } = req.body;

  let updateObj = {
    name,
    email,
    phone,
    message
  };
  let updateRes = await enquireModel.updateOne({ _id: enId }, updateObj)

  
  res.send({ status: 1,message:"enquiry update successfully", updateRes })

}

module.exports = {
  enquiryInsert,
  enquiryList,
  enquirydelete,
  enquirySingleRow,
  enquiryUpdate
}