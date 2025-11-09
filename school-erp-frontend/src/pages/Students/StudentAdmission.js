import React, { useState } from "react";

export default function StudentAdmission() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({
    name: "",
    father: "",
    class: "",
    section: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name.trim()) {
      setStudents([...students, form]);
      setForm({ name: "", father: "", class: "", section: "" });
    }
  };

  const deleteStudent = (i) => {
    setStudents(students.filter((_, index) => index !== i));
  };

  return (
    <div>
      <h3>Student Admission</h3>
      <form onSubmit={handleSubmit} className="row g-2 mb-3">
        <div className="col-md-3">
          <input className="form-control" placeholder="Name"
            value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}/>
        </div>
        <div className="col-md-3">
          <input className="form-control" placeholder="Father Name"
            value={form.father} onChange={(e) => setForm({ ...form, father: e.target.value })}/>
        </div>
        <div className="col-md-2">
          <input className="form-control" placeholder="Class"
            value={form.class} onChange={(e) => setForm({ ...form, class: e.target.value })}/>
        </div>
        <div className="col-md-2">
          <input className="form-control" placeholder="Section"
            value={form.section} onChange={(e) => setForm({ ...form, section: e.target.value })}/>
        </div>
        <div className="col-md-2">
          <button className="btn btn-primary w-100">Add</button>
        </div>
      </form>

      <table className="table table-bordered bg-white">
        <thead><tr><th>#</th><th>Name</th><th>Father</th><th>Class</th><th>Section</th><th>Action</th></tr></thead>
        <tbody>
          {students.map((s, i) => (
            <tr key={i}>
              <td>{i + 1}</td><td>{s.name}</td><td>{s.father}</td><td>{s.class}</td><td>{s.section}</td>
              <td><button className="btn btn-danger btn-sm" onClick={() => deleteStudent(i)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
