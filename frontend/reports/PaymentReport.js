import React from "react";

export default function PaymentReport() {
  const data = [
    { name: "Amit", amount: 5000, date: "2024-06-10" },
    { name: "Sneha", amount: 7000, date: "2024-06-12" },
  ];

  return (
    <div>
      <h3>Payment Report</h3>
      <table className="table table-bordered bg-white">
        <thead><tr><th>#</th><th>Name</th><th>Amount</th><th>Date</th></tr></thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}><td>{i + 1}</td><td>{d.name}</td><td>₹{d.amount}</td><td>{d.date}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
