import React from "react";

function EmployeeTable({
  employees,
  search,
  setSearch,
  department,
  setDepartment,
  onDelete,
  onEdit
}) {

  const filteredEmployees = employees.filter((employee) => {

    const matchesSearch =
      employee.name.toLowerCase().includes(search.toLowerCase()) ||
      employee.email.toLowerCase().includes(search.toLowerCase());

    const matchesDepartment =
      department === "All Departments" ||
      employee.department === department;

    return matchesSearch && matchesDepartment;
  });

  return (
    <div className="employee-section">

      {/* Search + Department */}
      <div className="filters">

        <input
          type="text"
          placeholder="Search employees..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        >
          <option>All Departments</option>
          <option>Development</option>
          <option>HR</option>
          <option>Marketing</option>
          <option>Sales</option>
        </select>

      </div>

      {/* Employee Table */}
      <div className="employee-table">

        <div className="table-heading">
          <div>
            <h2>Employees</h2>
            <p>Employee directory</p>
          </div>

          <span>
            {filteredEmployees.length} Employees
          </span>
        </div>

        <table>

          <thead>
            <tr>
              <th>ID</th>
              <th>EMPLOYEE</th>
              <th>DEPARTMENT</th>
              <th>SALARY</th>
              <th>STATUS</th>
              <th>ACTIONS</th>
            </tr>
          </thead>

          <tbody>

            {filteredEmployees.length === 0 ? (
              <tr>
                <td colSpan="6" className="no-data">
                  No employees found
                </td>
              </tr>
            ) : (

              filteredEmployees.map((employee) => (

                <tr key={employee.id}>

                  <td>#{employee.id}</td>

                  <td>
                    <strong>{employee.name}</strong>
                    <br />
                    <small>{employee.email}</small>
                  </td>

                  <td>{employee.department}</td>

                  <td>₹{employee.salary}</td>

                  <td>
                    <span
                      className={
                        employee.status === "Active"
                          ? "active"
                          : "leave"
                      }
                    >
                      {employee.status}
                    </span>
                  </td>

                 <td> <button
    className="edit-btn"
    onClick={() => onEdit(employee)}
  >
    Edit
  </button>

                   <button
                            className="delete-btn"
                     onClick={() => onDelete(employee.id)}>

                                Delete
</button>
                  </td>

                </tr>

              ))
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default EmployeeTable;