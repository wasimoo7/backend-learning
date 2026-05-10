import React from "react"
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import axios from "axios"
import { toast, ToastContainer } from "react-toastify";
export default function EnquiryList({ data }) {
  let deleteRow = (id) => {
    axios.delete(`http://localhost:8000/web/api/delete/${id}`)
     .then((res)=>{
      toast.success('enquiry deleted succesfully')
     })

  }
  return (


    <div className="pl-2">
      <ToastContainer />
      <h1 className=" font-bold ">Enquiry List</h1>
      <Table>
        <TableHead>
          <TableRow>

            <TableHeadCell>SR</TableHeadCell>
            <TableHeadCell>NAME</TableHeadCell>
            <TableHeadCell>EMAIL</TableHeadCell>
            <TableHeadCell>PHONE</TableHeadCell>
            <TableHeadCell>MESSAGE</TableHeadCell>
            <TableHeadCell>DELETE</TableHeadCell>
            <TableHeadCell>EDIT</TableHeadCell>

          </TableRow>
        </TableHead>
        <TableBody className="divide-y">

          {
            data.length >= 1 ?
              data.map((user, index) => {
                return (

                  <TableRow key={user._id} className="bg-white max-w-md  dark:border-gray-700 dark:bg-gray-800">
                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{index + 1}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.phone}</TableCell>
                    <TableCell>{user.message}</TableCell>
                    <TableCell>
                      <button onClick={() => { deleteRow(user._id) }} className="font-medium bg-red-500 text-primary-600 hover:underline dark:text-primary-500 text-white px-2 py-1 rounded-md  ">
                        Delete
                      </button>
                    </TableCell>
                    <TableCell>
                      <button className="font-medium text-white hover:underline dark:text-primary-500 bg-blue-500 px-3 py-1 rounded-md">
                        Edit
                      </button>
                    </TableCell>
                  </TableRow>
                )
              })

              :

              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white"> data not founded </TableCell>
              </TableRow>

          }

        </TableBody>
      </Table>
    </div>
  )
}