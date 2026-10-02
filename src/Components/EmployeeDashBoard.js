import React, { useState } from "react";

import Header from "./Header";
import SummaryCards from "./SummaryCards";
import EmployeeForm from "./EmployeeForm";
import EmployeeTable from "./EmployeeTable";

function EmployeeDashBoard() {
  const [employees, setEmployees] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);

  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All Departments");

  // Delete Employee
  const handleDelete = (id) => {
    setEmployees((prevEmployees) =>
      prevEmployees.filter((employee) => employee.id !== id)
    );
  };
   // Edit
  const handleEdit = (employee) => {
    setEditingEmployee(employee);
    setShowForm(true);
  };

  return (
    <div className="app">

      <Header
  onAddEmployee={() => {
    setEditingEmployee(null);
    setShowForm(true);
  }}
/>

      <SummaryCards
        employees={employees}
      />

      <EmployeeTable
        employees={employees}
        search={search}
        setSearch={setSearch}
        department={department}
        setDepartment={setDepartment}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />

      {showForm && (
  <EmployeeForm
    employees={employees}
    setEmployees={setEmployees}
    editingEmployee={editingEmployee}
    onClose={() => {
      setShowForm(false);
      setEditingEmployee(null);
    }}
  />
)}
    </div>
  );
}

export default EmployeeDashBoard;