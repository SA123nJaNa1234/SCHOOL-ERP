import React, { useState } from "react";

export default function ClassPage() {
  const [classes, setClasses] = useState(["Nursery", "1st Grade", "2nd Grade"]);
  const [newClass, setNewClass] = useState("");

  const addClass = (e) => {
    e.preventDefault();
    if (newClass.trim()) {
      setClasses([...classes, newClass]);
      setNewClass("");
    }
  };

  const deleteClass = (i) => {
    setClasses(classes.filter((_, index) => index !== i));
  };

  return (
    <div>
      <h3>Class</h3>
      <form onSubmit={addClass} className="d-flex gap-2 my-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Class Name"
          value={newClass}
          onChange={(e) => setNewClass(e.target.value)}
        />
        <button className="btn btn-primary">Add</button>
      </form>

      <table className="table bg-white table-bordered">
        <thead><tr><th>#</th><th>Class</th><th>Action</th></tr></thead>
        <tbody>
          {classes.map((c, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{c}</td>
              <td><button className="btn btn-danger btn-sm" onClick={() => deleteClass(i)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
