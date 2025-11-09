import React from "react";

export default function ConcessionReport() {
  const data = [
    { name: "Ravi", reason: "Sibling Discount", amount: 1000 },
    { name: "Pooja", reason: "Scholarship", amount: 2000 },
  ];

  return (
    <div>
      <h3>Concession Report</h3>
      <table className="table table-bordered bg-white">
        <thead><tr><th>#</th><th>Name</th><th>Reason</th><th>Amount</th></tr></thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}><td>{i + 1}</td><td>{d.name}</td><td>{d.reason}</td><td>₹{d.amount}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
