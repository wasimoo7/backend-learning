let express= require("express");
const {enquiryInsert}=require("../../controller/web/enquiryController.js")
let enquiryRoutes = express.Router();

enquiryRoutes.post('/api/enquire-insert', enquiryInsert);

module.exports = enquiryRoutes;