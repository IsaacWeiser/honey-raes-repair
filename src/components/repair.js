// this import 1st import allows us to use react library
import React, { useEffect, useState } from "react"
import { CustomerList } from "./customers/CustomerList.js"
import { EmployeeList } from "./employees/employeeList.js"
import { TicketList } from "./ticketList/ticketList.js"


//react component (inside is jsx not js)
//fisrt need return and ()
export const Repairs = () => {
     return (
        <>
        <h1>Honey Rae's Repair Shop</h1>
        <CustomerList />
        <EmployeeList />
        <TicketList />
        </>
    )
}