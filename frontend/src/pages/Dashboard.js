import React from "react";

export default function Dashboard() {
  const stats = {
    totalStudents: 120,
    paidStudents: 90,
    unpaidStudents: 30,
    totalFees: 250000,
    nursery: 10,
    primary: 50,
    highschool: 60
  };

  return (
    <div>
      <h3 className="mb-4">Dashboard</h3>
      <div className="row g-3">
        <div className="col-md-4">
          <div className="card p-3">
            <h6>Total Students</h6>
            <h2>{stats.totalStudents}</h2>
            <p>Nursery: {stats.nursery}</p>
            <p>Primary: {stats.primary}</p>
            <p>High School: {stats.highschool}</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3">
            <h6>Fee Collected</h6>
            <h2>₹{stats.totalFees}</h2>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3">
            <h6>Payment Status</h6>
            <p>Paid: {stats.paidStudents}</p>
            <p>Unpaid: {stats.unpaidStudents}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
