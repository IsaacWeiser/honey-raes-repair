import React from "react"
import { Route } from "react-router-dom"
import { EmployeeList } from "./employees/employeeList.js"
import { CustomerList } from "./customers/CustomerList.js"
import { TicketList } from "./ticketList/ticketList.js"
import { TicketForm } from "./serviceForm/TicketForm.js"
import { NewEmployeeForm } from "./employees/newEmployeeForm.js"
import { Ticket } from "./ticketList/ticket.js"
import { Employee } from "./employees/employee.js"

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

            <Route exact path="/tickets/:ticketId(\d+)">
                <Ticket />
            </Route>

            <Route path="/tickets/create">
                <TicketForm />
            </Route>

            <Route path="/employees/create">
                <NewEmployeeForm />
            </Route>
            
            <Route path="/employees/:empId(\d+)">
                <Employee />
            </Route>
        </>
    )
}