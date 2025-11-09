import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h5 className="px-3 mb-4 text-warning">ERP MENU</h5>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <div className="mt-3 px-3 text-warning small">Master</div>
      <NavLink to="/master/academic-year">Academic Year</NavLink>
      <NavLink to="/master/category">Category</NavLink>
      <NavLink to="/master/class">Class</NavLink>
      <NavLink to="/master/section">Section</NavLink>
      <NavLink to="/master/fee-type">Fee Type</NavLink>
      <div className="mt-3 px-3 text-warning small">Students</div>
      <NavLink to="/students/admission">Admission</NavLink>
      <div className="mt-3 px-3 text-warning small">Reports</div>
      <NavLink to="/reports/payments">Payment Report</NavLink>
      <NavLink to="/reports/concession">Concession Report</NavLink>
    </div>
  );
}
