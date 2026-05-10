let express= require("express");
const {enquiryInsert,enquiryList,enquirydelete}=require("../../controller/web/enquiryController.js")
let enquiryRoutes = express.Router();

enquiryRoutes.post('/api/enquire-insert', enquiryInsert);
enquiryRoutes.get('/api/enquiry-List',enquiryList)
enquiryRoutes.delete('/api/delete/:id',enquirydelete)
module.exports = enquiryRoutes;