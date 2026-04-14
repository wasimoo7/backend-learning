let  express=require("express");
const { enquiryInsert, enquiryList, deletedEnquiry, enquiryUpdate } = require('../../controllers/web/userEnquiryController.js')

let enquiryRoutes = express.Router();

enquiryRoutes.post('/api/enquire-insert', enquiryInsert)

enquiryRoutes.get("/api/enquiry-list", enquiryList)

enquiryRoutes.delete("/api/enquiry-delete/:id", deletedEnquiry)

enquiryRoutes.put("/api/enquiry-update/:id", enquiryUpdate)

module.exports=enquiryRoutes