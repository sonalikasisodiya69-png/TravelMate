function SummaryCards({ employees }) {

  const totalEmployees = employees.length;

  const activeEmployees = employees.filter(
    (employee) => employee.status === "Active"
  ).length;

  const employeesOnLeave = employees.filter(
    (employee) => employee.status === "On Leave"
  ).length;

  return (
    <div className="summary-cards">

      <div className="summary-card">
        <p>Total Employees</p>
        <h2>{totalEmployees}</h2>
        <span>All employees</span>
      </div>

      <div className="summary-card">
        <p>Active Employees</p>
        <h2>{activeEmployees}</h2>
        <span>Currently working</span>
      </div>

      <div className="summary-card">
        <p>On Leave</p>
        <h2>{employeesOnLeave}</h2>
        <span>Currently on leave</span>
      </div>

    </div>
  );
}

export default SummaryCards;