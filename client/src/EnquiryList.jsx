import React from "react"
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import axios from "axios"
import Swal from 'sweetalert2'
import { toast, ToastContainer } from "react-toastify";
export default function EnquiryList({ data, setFormData, getAllenquiry }) {

  let deleteRow = (id) => {

    Swal.fire({
      title: "Do you want to delete?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Delete",

    }).then((result) => {

      if (result.isConfirmed) {

        axios.delete(`http://localhost:8000/web/api/delete/${id}`)
          .then((res) => {
            getAllenquiry()

            toast.success('Enquiry deleted successfully')


            Swal.fire("Deleted!", "", "success");
          })

      } else if (result.isDenied) {

        Swal.fire("Changes are not deleted", "", "info");

      }

    })
  }

  let editRow = (id) => {
    axios.get(`http://localhost:8000/web/api/single/${id}`)
      .then((res) => {
        let data = res.data.enquiry
        setFormData({
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
          _id: data._id
        })
        console.log(data)

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
                      <button onClick={() => { editRow(user._id) }} className="font-medium text-white hover:underline dark:text-primary-500 bg-blue-500 px-3 py-1 rounded-md">
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