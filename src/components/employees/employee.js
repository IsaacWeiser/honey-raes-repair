import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const Employee =()=>{

    const [employee, setEmp] = useState([]);

    const {empId} = useParams();

    useEffect(()=>{
        fetch(`http://localhost:8088/employees/${empId}`)
        .then(res=>res.json())
        .then(data=>setEmp(data))
    }, [empId])

    return (
        <>
        <h2>employee data</h2>
        <section className="employeeInfo">
            {
                console.log(empId)
            }
            <h3>{employee.name}</h3>
            <p>{`specialty: ${employee.specialty}`}</p>
        </section>
        
        </>
    )

}