import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const userData = [
  { phoneNumber: "6985968958", email: "physioamnish@gmail.com", firstName: "Amnish", lastName: "Birla", paid: true },
  { phoneNumber: "7854123698", email: "johndoe@example.com", firstName: "John", lastName: "Doe", paid: false },
  { phoneNumber: "6987452365", email: "janesmith@example.com", firstName: "Jane", lastName: "Smith", paid: true },
  { phoneNumber: "6598741236", email: "michaelbrown@example.com", firstName: "Michael", lastName: "Brown", paid: false },
  { phoneNumber: "6985231478", email: "emilydavis@example.com", firstName: "Emily", lastName: "Davis", paid: true }
];

const Users = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const openUserModal = (user) => {
    setSelectedUser(user);
  };

  const closeUserModal = () => {
    setSelectedUser(null);
  };

  return (
    <div>
      <table className="table car-list-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Paid</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <tr key={index} onClick={() => openUserModal(user)}>
              <td data-label="S.No">{index + 1}</td>
              <td data-label="mobile">{user.phoneNumber}</td>
              <td data-label="Email" className="emaildata">{user.email}</td>
              <td data-label="First Name">{user.firstName}</td>
              <td data-label="Last Name">{user.lastName}</td>
              <td data-label="Paid">{user.paid ? "Yes" : "No"}</td>
              <td data-label="Icon">
                <BsThreeDotsVertical />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedUser && (
        <div className="modal fade show" tabIndex="-1" aria-labelledby="userModalLabel" aria-hidden="true" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="userModalLabel">User Details</h5>
                <button type="button" className="btn-close" onClick={closeUserModal} aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="row">
                    <div className="col-md-12">
                      <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                      <input type="text" className="form-control" id="phoneNumber" value={selectedUser.phoneNumber} readOnly />
                    </div>
                    <div className="col-md-12 mt-3">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input type="text" className="form-control" id="email" value={selectedUser.email} readOnly />
                    </div>
                    <div className="col-md-6 mt-3">
                      <label htmlFor="firstName" className="form-label">First Name</label>
                      <input type="text" className="form-control" id="firstName" value={selectedUser.firstName} readOnly />
                    </div>
                    <div className="col-md-6 mt-3">
                      <label htmlFor="lastName" className="form-label">Last Name</label>
                      <input type="text" className="form-control" id="lastName" value={selectedUser.lastName} readOnly />
                    </div>
                    <div className="col-md-12 mt-3">
                      <label htmlFor="paid" className="form-label">Paid</label>
                      <input type="text" className="form-control" id="paid" value={selectedUser.paid ? "Yes" : "No"} readOnly />
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn cancelbtn" onClick={closeUserModal}>Cancel</button>
                <button type="button" className="btn deletebtn">Delete</button>
                <button type="button" className="btn btn-primary">Update</button>
              </div>
            </div>
          </div>
        </div>)}
        </div>
      )}

export default Users;
