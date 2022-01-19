import React from "react"
import { Route } from "react-router-dom"
import { EmployeeList } from "./employees/employeeList.js"
import { CustomerList } from "./customers/CustomerList.js"
import { TicketList } from "./ticketList/ticketList.js"
import { TicketForm } from "./serviceForm/TicketForm.js"
import { NewEmployeeForm } from "./employees/newEmployeeForm.js"

export const ApplicationViews = () => {
    return (
        <>
            <Route path="/customers">
                <CustomerList />
            </Route>

            <Route exact path="/employees">
                <EmployeeList />
            </Route>
            
            <Route exact path="/tickets">
                <TicketList />
            </Route>

            <Route path="/tickets/create">
                <TicketForm />
            </Route>

            <Route path="/employees/create">
                <NewEmployeeForm />
            </Route>
        </>
    )
}