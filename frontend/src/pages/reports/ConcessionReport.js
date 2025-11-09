import React from "react";

export default function ConcessionReport() {
  const data = [
    { id: 1, name: "Student A", class: "8/A", concession: 500 },
    { id: 2, name: "Student B", class: "9/B", concession: 0 },
  ];

  return (
    <div>
      <h3>Concession Report</h3>
      <table className="table bg-white table-bordered mt-3">
        <thead>
          <tr>
            <th>#</th><th>Name</th><th>Class</th><th>Concession</th>
          </tr>
        </thead>
        <tbody>
          {data.map((s) => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{s.class}</td>
              <td>{s.concession}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
