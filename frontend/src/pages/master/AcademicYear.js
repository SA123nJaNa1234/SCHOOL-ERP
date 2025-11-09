import React, { useState } from "react";

export default function AcademicYear() {
  const [years, setYears] = useState(["2023-24", "2024-25"]);
  const [year, setYear] = useState("");

  const addYear = (e) => {
    e.preventDefault();
    if (year.trim()) {
      setYears([...years, year]);
      setYear("");
    }
  };

  const deleteYear = (i) => {
    setYears(years.filter((_, index) => index !== i));
  };

  return (
    <div>
      <h3>Academic Year</h3>
      <form onSubmit={addYear} className="d-flex gap-2 my-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Year (e.g. 2025-26)"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <button className="btn btn-primary">Add</button>
      </form>
      <table className="table bg-white table-bordered">
        <thead><tr><th>#</th><th>Year</th><th>Action</th></tr></thead>
        <tbody>
          {years.map((y, i) => (
            <tr key={i}>
              <td>{i + 1}</td><td>{y}</td>
              <td><button className="btn btn-danger btn-sm" onClick={() => deleteYear(i)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
