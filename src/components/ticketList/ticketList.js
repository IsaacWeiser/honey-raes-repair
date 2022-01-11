import React, { useEffect, useState } from "react"

export const TicketList = () => {
    const [ticketList, setTickets] = useState([])

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
                return <p key={`ticket--${ticket.id}`}>{ticket.description} submitted by  
                {` ${ticket.customer.name}`} and worked on by {ticket.employee.name}</p>
            })
        }
        </>
    )
}