let express = require("express");

const {
  enquiryInsert,
  enquiryList,
  enquirydelete,
  enquirySingleRow,
  enquiryUpdate
} = require("../../controller/web/enquiryController.js")

let enquiryRoutes = express.Router();

enquiryRoutes.post('/api/enquire-insert', enquiryInsert)

enquiryRoutes.get('/api/enquiry-List', enquiryList)

enquiryRoutes.delete('/api/delete/:id', enquirydelete)

enquiryRoutes.get('/api/single/:id', enquirySingleRow)
enquiryRoutes.put('/api/update/:id', enquiryUpdate)

module.exports = enquiryRoutes