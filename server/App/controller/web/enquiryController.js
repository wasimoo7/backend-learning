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


module.exports = { enquiryInsert }