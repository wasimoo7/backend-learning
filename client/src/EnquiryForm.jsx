import React from "react"
import { Button, Checkbox, Label, Textarea, TextInput } from "flowbite-react";
import EnquiryList from "./EnquiryList.jsx"

import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";

export default function Enquiry() {
  return (
    <div>
      <h1 className="text-[20px]  py-6 font-bold ">User Enquiry</h1>

      <div className="grid grid-cols-[30%_auto] ">
        <div className="bg-gray-200 p-4">
          <h2 className="text-[20px]">Enquiry form</h2>

          <form className="flex  flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name">Your Name</Label>
              </div>
              <TextInput className="[&>div>input]:bg-white" name="name" type="text" placeholder="Enter your Name" required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email">Your Email</Label>
              </div>
              <TextInput className="[&>div>input]:bg-white" name='email' type="email" placeholder="Enter your Email" required />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="phone">Your Phone </Label>
              </div>
              <TextInput className="[&>div>input]:bg-white" name='phone' type="text" placeholder="Enter your phone" required />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="message">Your Message</Label>
              </div>
              <Textarea className="[&>div>input]:bg-white" name='message' type="text" placeholder="Enter your Message" required />
            </div>

            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            <Button type="submit" className="bg-blue-400">Save</Button>
          </form>
        </div>
        <EnquiryList/>
        

      </div>



    </div>


  )

}