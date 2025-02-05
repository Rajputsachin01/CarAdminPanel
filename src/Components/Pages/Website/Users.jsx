import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { baseUrl } from "../../../config";
import { getAuthHeader } from "../../../utils/authHelper";
import { toast, ToastContainer } from "react-toastify";

const Users = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [usersData, setUsersData] = useState([]);

  const openUserModal = (user) => {
    setSelectedUser(user);
  };

  const closeUserModal = () => {
    setSelectedUser(null);
  };

  useEffect(() => {
    fetchUsers()
  }, [])
  const fetchUsers = async () => {
    try {
      const res = await axios.get(`${baseUrl}/user/search-user`, {}, {
        headers: getAuthHeader(),
      })
      console.log(res.data);
      if (res.data.status) {
        toast.success(res.data.message)
        setUsersData(res.data.data)
      }
      else {
        toast.error(res.data.message)
      }
    } catch (error) {
      console.log(error);
    }
  }

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    if (usersData?.fullName) {
      const nameParts = userData.fullName.split(" ");
      setFirstName(nameParts[0]); // First name
      setLastName(nameParts.slice(1).join(" ")); // Last name (middle + last)
    }
  }, [usersData]);

  return (
    <div>
      <ToastContainer />
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
          {usersData?.map((user, index) => {
            return (
              <tr key={index} onClick={() => openUserModal(user)}>
                <td data-label="S.No">{index + 1}</td>
                <td data-label="mobile">{user?.number}</td>
                <td data-label="Email" className="emaildata">{user?.email}</td>
                <td data-label="First Name">{user.fullName ? user.fullName.split(" ")[0] : "-"}</td>
                <td data-label="Last Name">{user.fullName ? user.fullName.split(" ")[1] : "-"}</td>
                <td data-label="Paid">{user?.paid ? "Yes" : "No"}</td>
                <td data-label="Icon">
                  <BsThreeDotsVertical />
                </td>
              </tr>
            )
          })}
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
                  <div className="col-md-12 ">
                      <label htmlFor="firstName" className="form-label">Full Name</label>
                      <input type="text" className="form-control" id="firstName" value={selectedUser.fullName} readOnly />
                    </div>
                    <div className="col-md-12 mt-3">
                      <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                      <input type="text" className="form-control" id="phoneNumber" value={selectedUser.number} readOnly />
                    </div>
                    <div className="col-md-12 mt-3">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input type="text" className="form-control" id="email" value={selectedUser.email} readOnly />
                    </div>
                    {/* <div className="col-md-6 mt-3">
                      <label htmlFor="lastName" className="form-label">Last Name</label>
                      <input type="text" className="form-control" id="lastName" value={selectedUser.lastName} readOnly />
                    </div> */}
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
  )
}

export default Users;
