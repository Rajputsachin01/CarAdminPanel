import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiRefreshCcw } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const userData = [
  { pnr: 2, firstName: "John", lastName: "Ajinh", type: "Intercity", city: "Luxury", amount: "Unavailable", pickUpDate: "20-02-2025", pickUpTime: "03:00" },
  { pnr: 7, firstName: "Hnsjf", lastName: "Jij", type: "Local", city: "Luxury", amount: "Unavailable", pickUpDate: "20-02-2025", pickUpTime: "03:00" },
  { pnr: 3, firstName: "Hnsjf", lastName: "Tesla Model 3", type: "Local", city: "Premium", amount: "Maintenance", pickUpDate: "20-02-2025", pickUpTime: "03:00" }
];

const Bookings = () => {
  const navigate = useNavigate();
  const [selectedUser, setSelectedUser] = useState(null);
  const openUserModal = (user) => {
    setSelectedUser(user);
  };

  const closeUserModal = () => {
    setSelectedUser(null);
  };

  const bookingDetail = ()=>{
    navigate('/bookingDetails')
  }

  return (
    <div>
      <table className="table table-responsive car-list-table">
        <thead>
          <tr>
            <th>PNR</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Type</th>
            <th>City</th>
            <th>Amount</th>
            <th>PNR</th>
            <th>Pick Up Date</th>
            <th>Pick Up Time</th>
            <th><FiRefreshCcw /></th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <tr key={index} onClick={() => openUserModal(user)}>
              <td>{user.pnr}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.type}</td>
              <td>{user.city}</td>
              <td className={user.amount === "Unavailable" ? "text-danger" : user.amount === "Maintenance" ? "maintenance" : ""}>{user.amount}</td>
              <td>{user.pnr}</td>
              <td>{user.pickUpDate}</td>
              <td>{user.pickUpTime}</td>
              <td><BsThreeDotsVertical  onClick={bookingDetail}/></td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedUser && (
        <div className="modal fade show" tabIndex="-1" aria-labelledby="userModalLabel" aria-hidden="true" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="userModalLabel">Booking Details</h5>
                <button type="button" className="btn-close" onClick={closeUserModal} aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="row">
                    <div className="col-md-12">
                      <label htmlFor="pnr" className="form-label">PNR</label>
                      <input type="text" className="form-control" id="pnr" value={selectedUser.pnr} readOnly />
                    </div>
                    <div className="col-md-12 mt-3">
                      <label htmlFor="firstName" className="form-label">First Name</label>
                      <input type="text" className="form-control" id="firstName" value={selectedUser.firstName} readOnly />
                    </div>
                    <div className="col-md-12 mt-3">
                      <label htmlFor="lastName" className="form-label">Last Name</label>
                      <input type="text" className="form-control" id="lastName" value={selectedUser.lastName} readOnly />
                    </div>
                    <div className="col-md-12 mt-3">
                      <label htmlFor="type" className="form-label">Type</label>
                      <input type="text" className="form-control" id="type" value={selectedUser.type} readOnly />
                    </div>
                    <div className="col-md-12 mt-3">
                      <label htmlFor="city" className="form-label">City</label>
                      <input type="text" className="form-control" id="city" value={selectedUser.city} readOnly />
                    </div>
                    <div className="col-md-12 mt-3">
                      <label htmlFor="amount" className="form-label">Amount</label>
                      <input type="text" className="form-control" id="amount" value={selectedUser.amount} readOnly />
                    </div>
                    <div className="col-md-12 mt-3">
                      <label htmlFor="pickUpDate" className="form-label">Pick Up Date</label>
                      <input type="text" className="form-control" id="pickUpDate" value={selectedUser.pickUpDate} readOnly />
                    </div>
                    <div className="col-md-12 mt-3">
                      <label htmlFor="pickUpTime" className="form-label">Pick Up Time</label>
                      <input type="text" className="form-control" id="pickUpTime" value={selectedUser.pickUpTime} readOnly />
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
        </div>
      )}
    </div>
  );
};

export default Bookings;

