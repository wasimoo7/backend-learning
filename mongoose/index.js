let express = require('express')
var mongoose = require('mongoose');

const enquiryRoutes=require("./App/route/web/enquiryRoutes")

require('dotenv').config();

let app = express();

app.use(express.json());

app.use("/web",enquiryRoutes)

mongoose.connect(process.env.DBURL).then(() => {
  app.listen(process.env.PORT)

})