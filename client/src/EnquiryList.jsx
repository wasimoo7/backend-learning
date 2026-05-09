import React from "react"
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
export default function EnquiryList({ data }) {

  return (
    <div className="pl-2">
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
            data.map((user, index) => {
              
              if (user.length === 0) {
                return (
                  <>
                    <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white"> data not founded </TableCell>
                    </TableRow>
                  </>
                )
              } else {

                return (
                  <>
                    <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{index+1}</TableCell>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.phone}</TableCell>
                      <TableCell>{user.message}</TableCell>
                      <TableCell>
                        <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500 text-blue-500">
                          Delete
                        </a>
                      </TableCell>
                      <TableCell>
                        <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500 text-blue-500">
                          Edit
                        </a>
                      </TableCell>
                    </TableRow>

                  </>
                )
              }

            })

          }

        </TableBody>
      </Table>
    </div>
  )
}