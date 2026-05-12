import React from "react"
import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios"
import { Button, Checkbox, Label, Textarea, TextInput } from "flowbite-react";
import EnquiryList from "./EnquiryList.jsx"

import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";

export default function Enquiry() {
  let [enquiryList, setenquiryList] = useState([])

  let [FormData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    _id: ''

  })



  let saveEnquiry = (e) => {
    e.preventDefault()
      console.log(FormData)

    if (FormData._id) {
      axios.put(`http://localhost:8000/web/api/update/${FormData._id}`, FormData)
        .then((res) => {
          console.log(res.data)
          toast.success('Enquiry Save Successfully')
          setFormData({
            name: '',
            email: '',
            phone: '',
            message: '',
              _id:''
          })
          getAllenquiry()
        })

    } else {
      axios.post(`http://localhost:8000/web/api/enquire-insert`, FormData)
        .then((res) => {
          console.log(res.data)
          toast.success('Enquiry Save Successfully')

          setFormData({
            name: '',
            email: '',
            phone: '',
            message: '',
              _id:''
          })
          getAllenquiry()
        })
    }

  }

  let getAllenquiry = () => {
    axios.get(`http://localhost:8000/web/api/enquiry-List`)
      .then((res) => {
        return res.data
      }).then((finaldata) => {
        if (finaldata.status === 1) {

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

  useEffect(() => {
    getAllenquiry()
  }, [])

  return (
    <div>
      <ToastContainer />
      <h1 className="text-[20px]  py-6 font-bold ">User Enquiry</h1>

      <div className="grid grid-cols-[30%_auto] w-[900px]">
        <div className="bg-gray-200 p-4 ">
          <h2 className="text-[20px]">Enquiry form</h2>

          <form className="flex  flex-col gap-4" onSubmit={saveEnquiry}>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name">Your Name</Label>
              </div>
              <TextInput value={FormData.name} onChange={getValue} name="name" type="text" placeholder="Enter your Name" required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email">Your Email</Label>
              </div>
              <TextInput value={FormData.email} onChange={getValue} name='email' type="email" placeholder="Enter your Email" required />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="phone">Your Phone </Label>
              </div>
              <TextInput value={FormData.phone} onChange={getValue} name='phone' type="text" placeholder="Enter your phone" required />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="message">Your Message</Label>
              </div>
              <Textarea value={FormData.message} onChange={getValue} name='message' type="text" placeholder="Enter your Message" required />
            </div>

            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember" className="text-black">Remember me</Label>
            </div>
            <Button type="submit" className="bg-blue-400">
              {FormData._id ? "update" : "save"}</Button>
          </form>
        </div>
        <EnquiryList data={enquiryList} setFormData={setFormData} getAllenquiry={getAllenquiry} />


      </div>



    </div>


  )

}