import React, { useState } from "react";

function EmployeeForm({
  employees = [],
  setEmployees,
  editingEmployee,
  onClose
}) {

  const [name, setName] = useState(
    editingEmployee?.name || ""
  );

  const [email, setEmail] = useState(
    editingEmployee?.email || ""
  );

  const [department, setDepartment] = useState(
    editingEmployee?.department || ""
  );

  const [salary, setSalary] = useState(
    editingEmployee?.salary || ""
  );

  const [status, setStatus] = useState(
    editingEmployee?.status || "Active"
  );


  const handleSubmit = (e) => {
    e.preventDefault();

    // EDIT EMPLOYEE
    if (editingEmployee) {

      setEmployees((prevEmployees) =>
        prevEmployees.map((employee) =>
          employee.id === editingEmployee.id
            ? {
                ...employee,
                name,
                email,
                department,
                salary,
                status
              }
            : employee
        )
      );

    } 
    
    // ADD EMPLOYEE
    else {

      const newEmployee = {
        id: employees.length + 101,
        name,
        email,
        department,
        salary,
        status
      };

      setEmployees((prevEmployees) => [
        ...prevEmployees,
        newEmployee
      ]);
    }

    onClose();
  };


  return (
    <div className="form-container">

      <div className="form-header">

        <h2>
          {editingEmployee
            ? "Edit Employee"
            : "Add Employee"}
        </h2>

        <button
          type="button"
          className="close-btn"
          onClick={onClose}>
      
        </button>

      </div>


      <form onSubmit={handleSubmit}>

        {/* Employee Name */}

        <input
          type="text"
          placeholder="Employee Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />


        {/* Email */}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />


        {/* Department */}

        <select
          value={department}
          onChange={(e) =>
            setDepartment(e.target.value)
          }
          required
        >

          <option value="">
            Select Department
          </option>

          <option value="Development">
            Development
          </option>

          <option value="HR">
            HR
          </option>

          <option value="Marketing">
            Marketing
          </option>

          <option value="Sales">
            Sales
          </option>

        </select>


        {/* Salary */}

        <input
          type="number"
          placeholder="Salary"
          value={salary}
          onChange={(e) =>
            setSalary(e.target.value)
          }
          required
        />


        {/* Status */}

        <select
          value={status}
          onChange={(e) =>
            setStatus(e.target.value)
          }
        >

          <option value="Active">
            Active
          </option>

          <option value="On Leave">
            On Leave
          </option>

        </select>


        {/* Buttons */}

        <div className="form-buttons">

          <button
            type="button"
            onClick={onClose}
          >
            Cancel
          </button>

          <button type="submit">
            {editingEmployee
              ? "Update Employee"
              : "Add Employee"}
          </button>

        </div>

      </form>

    </div>
  );
}

export default EmployeeForm;