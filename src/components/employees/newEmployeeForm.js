import react, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const NewEmployeeForm = () => {
    
    const [employees, updateEmp] = useState([]);

    const history = useHistory();

    const saveEmp = (event) => {
        event.preventDefault()
        const newEmp = 
        {
            name: employees.name,
            specialty: employees.specialty
        }

        const postOps = 
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEmp)
        }
        console.log("newEmp "+ JSON.stringify(newEmp))
       return fetch(`http://localhost:8088/employees`, postOps).then(()=>history.push("/employees"))
    }


    return (
        <form className="newEmployeeForm">
            <h2 className="newEmployeeForm--title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name: </label>
                    <input
                    required autoFocus
                    type="text"
                    className="form-control"
                    placeholder="Name of new employee"
                    onChange=
                    {(event)=>
                        {
                        let copy  = {...employees};
                        copy.name = event.target.value
                        updateEmp(copy)
                        }
                    }
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="specialty">Specialty: </label>
                    <input
                    required autoFocus
                    type="text"
                    className="form-control"
                    placeholder="Enter your specialty"
                    onChange=
                    {
                        (event)=>
                        {
                            let copy = {...employees};
                            copy.specialty = event.target.value;
                            updateEmp(copy)
                        }
                    }
                    />
                </div>
            </fieldset>
            <button className="newEmp--btn" onClick={saveEmp}>submit employee</button>
        </form>
    )
}