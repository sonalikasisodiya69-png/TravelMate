import React from "react";

function Header({ onAddEmployee }) {
  return (
    <header className="header">
      <div>
        <h1>Employee Management</h1>
        <p>Manage your organization’s employee records</p>
      </div>

      <button
        type="button"
        className="add-btn"
        onClick={onAddEmployee}
      >
        + Add Employee
      </button>
    </header>
  );
}

export default Header;