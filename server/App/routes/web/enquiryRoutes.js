let express= require("express");
const {enquiryInsert,enquiryList}=require("../../controller/web/enquiryController.js")
let enquiryRoutes = express.Router();

enquiryRoutes.post('/api/enquire-insert', enquiryInsert);
enquiryRoutes.get('/api/enquiry-List',enquiryList)
module.exports = enquiryRoutes;