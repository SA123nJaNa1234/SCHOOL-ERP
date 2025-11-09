import React from "react";

export default function PaymentReport() {
  const data = [
    { id: 1, name: "Muskaan", class: "1/B", fee: 17000, paid: 17000 },
    { id: 2, name: "Pranitha", class: "7/B", fee: 16000, paid: 10500 },
  ];

  return (
    <div>
      <h3>Payment Report</h3>
      <table className="table bg-white table-bordered mt-3">
        <thead>
          <tr>
            <th>#</th><th>Student</th><th>Class</th><th>Fee</th><th>Paid</th>
          </tr>
        </thead>
        <tbody>
          {data.map((s) => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{s.class}</td>
              <td>{s.fee}</td>
              <td>{s.paid}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
