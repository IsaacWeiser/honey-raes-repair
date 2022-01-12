import React from "react"
import { Route } from "react-router-dom"
import { EmployeeList } from "./employees/employeeList.js"
import { CustomerList } from "./customers/CustomerList.js"
import { TicketList } from "./ticketList/ticketList.js"

export const ApplicationViews = () => {
    return (
        <>
            <Route path="/customers">
                <CustomerList />
            </Route>

            <Route path="/employees">
                <EmployeeList />
            </Route>
            
            <Route path="/tickets">
                <TicketList />
            </Route>
        </>
    )
}