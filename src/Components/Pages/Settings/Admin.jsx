import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AdminAccess.css";

const permissions = [
  "All",
  "Bookings",
  "Website",
  "Database",
  "Reports",
  "Invoice",
  "Export",
  "MIS",
  "Admin & Access",
];

const users = ["User 1", "User 2", "User 3", "User 4"]; // Sample users

const CheckboxTable = () => {
  const [checkedState, setCheckedState] = useState(
    users.map(() => Array(permissions.length).fill(false))
  );

  const handleCheck = (userIndex, permIndex) => {
    const newState = checkedState.map((row, i) =>
      i === userIndex
        ? row.map((val, j) => (j === permIndex ? !val : val))
        : row
    );
    setCheckedState(newState);
  };

  return (
    <div className="container mt-4">
      <div className="table-responsive">
        <table className="table  table-hover text-center">
          <thead className="table-dark">
            {/* <tr>
              <th className="text-white">User</th>
              {permissions.map((perm, index) => (
                <th key={index} className="text-white">{perm}</th>
              ))}
            </tr> */}
          </thead>
          <tbody>
            {users.map((user, userIndex) => (
              <tr key={userIndex}>
                <td className="">{user}</td>
                {permissions.map((item, permIndex) => (
                  <td key={permIndex}>
                    <input
                      type="checkbox"
                      checked={checkedState[userIndex][permIndex]}
                      onChange={() => handleCheck(userIndex, permIndex)}
                      className="form-check-input"
                    />
                    <label htmlFor="" className="tabledata">{item}</label>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CheckboxTable;
