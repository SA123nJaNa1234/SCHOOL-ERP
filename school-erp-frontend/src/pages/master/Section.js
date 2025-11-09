import React, { useState } from "react";

export default function Section() {
  const [sections, setSections] = useState(["A", "B", "C"]);
  const [name, setName] = useState("");

  const addSection = (e) => {
    e.preventDefault();
    if (name.trim()) {
      setSections([...sections, name]);
      setName("");
    }
  };

  const deleteSection = (i) => {
    setSections(sections.filter((_, index) => index !== i));
  };

  return (
    <div>
      <h3>Section</h3>
      <form onSubmit={addSection} className="d-flex gap-2 my-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Section"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="btn btn-primary">Add</button>
      </form>
      <table className="table bg-white table-bordered">
        <thead><tr><th>#</th><th>Section</th><th>Action</th></tr></thead>
        <tbody>
          {sections.map((s, i) => (
            <tr key={i}>
              <td>{i + 1}</td><td>{s}</td>
              <td><button className="btn btn-danger btn-sm" onClick={() => deleteSection(i)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
