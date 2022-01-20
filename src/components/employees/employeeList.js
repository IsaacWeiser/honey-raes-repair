import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom"

export const EmployeeList = () => {
    const [employees, changeEmployee] = useState([])
    const [specialties, employeeSpecialty] =  useState([])

    const history = useHistory()

    useEffect(
        () => {
            fetch("http://localhost:8088/employees")
                .then(res => res.json())
                .then((data) => {
                    changeEmployee(data)
                })
        },
        []
    )

    useEffect(() => {
        /*
            1. Use .map() to get the specialty of each employee
            2. Then update a state variable to be a comma-separated string
                (e.g. "iPhone, Printers, ...")
        */
       let spec = [];
       employees.map((empObj)=> {
           spec.push(empObj.specialty)
       })
       spec = spec.join(", ")
       employeeSpecialty(spec);
    }, [employees])

    return (
        <>
        <button onClick={()=>history.push("/employees/create")} >Add employee</button>
            <div>
                Specialties: {specialties}
            </div>
            {
                employees.map(
                    (employee) => {
                        return <p key={`employee--${employee.id}`}><Link to={`employees/${employee.id}`}>{employee.name}</Link></p>
                    }
                )
            }
        </>
    )
}