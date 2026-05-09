import React from "react"
import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios"
import { Button, Checkbox, Label, Textarea, TextInput } from "flowbite-react";
import EnquiryList from "./EnquiryList.jsx"

import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";

export default function Enquiry() {
  let[enquiryList,setenquiryList]=useState([])
  let [FormData, setFormData] = useState({
    sName: '',
    sEmail: '',
    sPhone: '',
    sMessage: '',


  })

  let saveEnquiry = (e) => {
    e.preventDefault()

    axios.post(`http://localhost:8000/web/api/enquire-insert`, FormData)
      .then((res) => {
        console.log(res.data)
        toast.success('Enquiry Save Successfully')

        setFormData({
          sName: '',
          sEmail: '',
          sPhone: '',
          sMessage: '',

        })
      })
  }

  let getAllenquiry = () => {
    axios.get(`http://localhost:8000/view/api/enquiry-List`)
     .then((res)=>{
      return res.data
     }).then((finaldata)=>{
      if(finaldata.status===1){
        console.log(finaldata.enquiryList)
        setenquiryList(finaldata.enquiryList)

      }
     })
  }

  let getValue = (e) => {
    let inputName = e.target.name
    let inputValue = e.target.value
    let oldData = { ...FormData }
    oldData[inputName] = inputValue
    setFormData(oldData)


  }
  
  useEffect(()=>{
    getAllenquiry()
  },[saveEnquiry])

  return (
    <div>
      <ToastContainer />
      <h1 className="text-[20px]  py-6 font-bold ">User Enquiry</h1>

      <div className="grid grid-cols-[30%_auto] ">
        <div className="bg-gray-200 p-4 ">
          <h2 className="text-[20px]">Enquiry form</h2>

          <form className="flex  flex-col gap-4" onSubmit={saveEnquiry}>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name">Your Name</Label>
              </div>
              <TextInput  value={FormData.sName} onChange={getValue} name="sName" type="text" placeholder="Enter your Name" required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email">Your Email</Label>
              </div>
              <TextInput  value={FormData.sEmail} onChange={getValue} name='sEmail' type="email" placeholder="Enter your Email" required />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="phone">Your Phone </Label>
              </div>
              <TextInput  value={FormData.sPhone} onChange={getValue} name='sPhone' type="text" placeholder="Enter your phone" required />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="message">Your Message</Label>
              </div>
              <Textarea  value={FormData.sMessage} onChange={getValue} name='sMessage' type="text" placeholder="Enter your Message" required />
            </div>

            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember" className="text-black">Remember me</Label>
            </div>
            <Button type="submit" className="bg-blue-400">Save</Button>
          </form>
        </div>
        <EnquiryList data={enquiryList}/>


      </div>



    </div>


  )

}