import React, { useState } from "react";

export default function FeeType() {
  const [fees, setFees] = useState(["Tuition Fee", "Library Fee", "Transport Fee"]);
  const [fee, setFee] = useState("");

  const addFee = (e) => {
    e.preventDefault();
    if (fee.trim()) {
      setFees([...fees, fee]);
      setFee("");
    }
  };

  const deleteFee = (i) => {
    setFees(fees.filter((_, index) => index !== i));
  };

  return (
    <div>
      <h3>Fee Type</h3>
      <form onSubmit={addFee} className="d-flex gap-2 my-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Fee Type"
          value={fee}
          onChange={(e) => setFee(e.target.value)}
        />
        <button className="btn btn-primary">Add</button>
      </form>

      <table className="table bg-white table-bordered">
        <thead><tr><th>#</th><th>Fee Type</th><th>Action</th></tr></thead>
        <tbody>
          {fees.map((f, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{f}</td>
              <td>
                <button className="btn btn-danger btn-sm" onClick={() => deleteFee(i)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
