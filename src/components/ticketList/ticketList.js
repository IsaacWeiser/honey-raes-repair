import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import './Tickets.css'

export const TicketList = () => {
    const [ticketList, setTickets] = useState([])

    const history= useHistory();


    useEffect(
        () => {
            fetch("http://localhost:8088/serviceTickets?_expand=employee&_expand=customer").then((tix)=> {
                return tix.json()
            }).then((tix)=> {
                return setTickets(tix);
            })
        },
        []
    )

    return (
        <>
        
        <h1>Ticket List</h1>

        {
            ticketList.map((ticket)=> {
                return <p className={ticket.emergency === true? "emergency": "notAnEmergency"} key={`ticket--${ticket.id}`}>{ticket.emergency ? "🚑" : ""} {ticket.description} submitted by {ticket.customer.name} and worked on by {ticket.employee.name}</p>
            })
        }
        </>
    )
}