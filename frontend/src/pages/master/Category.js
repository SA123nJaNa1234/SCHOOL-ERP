import React, { useState } from "react";

export default function Category() {
  const [categories, setCategories] = useState(["Primary", "High School"]);
  const [name, setName] = useState("");

  const addCategory = (e) => {
    e.preventDefault();
    if (name.trim()) {
      setCategories([...categories, name]);
      setName("");
    }
  };

  const deleteCategory = (i) => {
    setCategories(categories.filter((_, index) => index !== i));
  };

  return (
    <div>
      <h3>Category</h3>
      <form onSubmit={addCategory} className="d-flex gap-2 my-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Category"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="btn btn-primary">Add</button>
      </form>

      <table className="table bg-white table-bordered">
        <thead>
          <tr><th>#</th><th>Category</th><th>Action</th></tr>
        </thead>
        <tbody>
          {categories.map((cat, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{cat}</td>
              <td>
                <button className="btn btn-danger btn-sm" onClick={() => deleteCategory(i)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
