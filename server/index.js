let express =require('express')
const cors = require("cors")
let mongoose= require('mongoose')
const enquiryRoutes=require("./App/routes/web/enquiryRoutes.js")
require('dotenv').config()

let app =express();
app.use(cors())
app.use(express.json());

app.use("/web",enquiryRoutes)
//connect to mongodb
app.use("/view",enquiryRoutes)
mongoose.connect(process.env.DBURI).then(()=>{
  app.listen(process.env.PORT)
})





