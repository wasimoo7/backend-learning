let express = require("express")
const { ObjectId } = require('mongodb');
const { dbConnection } = require('./dbConnection')
let app = express();
app.use(express.json())

let checkEmail = async (req, res, next) => {
  let myDB = await dbConnection();
  let studentCollection = myDB.collection("students")
  let existingUser = await studentCollection.findOne({
    sEmail: req.body.sEmail
  })
  if (existingUser) {
    return res.send({
      status: 0,
      msg: "email already exists"
    });
  }
  if (!req.body.sEmail) {
    return res.send({
      status: 0,
      msg: "Email is required"
    });
  }
  if (!req.body.sName) {
    return res.send({
      status: 0,
      msg: "Name is required"
    });
  }

  next()
}


app.get("/student-read", async (req, res) => {
  let myDB = await dbConnection();
  let studentCollection = myDB.collection("students")
  let data = await studentCollection.find().toArray();
  let resObj = {
    status: 1,
    msg: 'student list',
    data
  }
  res.send(resObj)
})

app.post("/student-insert",checkEmail, async (req, res) => {
  let myDB = await dbConnection();
  let studentCollection = myDB.collection("students")
  let obj = {
    sName: req.body.sName,
    sEmail: req.body.sEmail
  }
  let insertRes = await studentCollection.insertOne(obj)
  let resObj = {
    status: 1,
    msg: 'data insert',
    insertRes
  }
  console.log(resObj)

  res.send(resObj)
})

app.delete("/student-delete/:id",async (req,res)=>{
  let{id}=req.params;
  let myDB = await dbConnection();
  let studentCollection = myDB.collection("students")
  let delRes=await studentCollection.deleteOne({_id:new ObjectId(id)})
  let resObj = {
    status: 1,
    msg: 'data deleted',
    delRes
  }
  res.send(resObj)
})

app.put("/student-update/:id", async(req,res)=>{
  let{id}=req.params;
  let{sName,sEmail}=req.body;
  let obj={}
  if(sName!=="" && sName!==undefined && sName!==null){
    obj.sName=sName
  }
 /*
  if(sName){
    obj.sName=sName
  }
  if(sEmail){
    obj.sEmail=sEmail
  }
 */
  if(sEmail!=="" && sEmail!==undefined && sEmail!==null){
    obj.sEmail=sEmail
  }
  let myDB = await dbConnection();
  let studentCollection = myDB.collection("students")
  let updateRes=await studentCollection.updateOne({_id:new ObjectId(id)},{$set:obj})
  let resObj = {
    status: 1,
    msg: 'data update',
    updateRes
  }
  res.send(resObj)

})

app.listen("8000")