import React, { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { IoFilterSharp } from "react-icons/io5";
import { MdCurrencyRupee } from "react-icons/md";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";

import axios from "axios";
import { baseUrl } from "../../../config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Cars = () => {
  const [editCar, setEditCar] = useState(null);
  const [carDetails, setCarDetails] = useState([]);
  const [bookingType, setBookingType] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    fetchCarDetails();
  }, []);
  const fetchCarDetails = async () => {
    try {
      const response = await axios.get(`${baseUrl}/rentalCar/findAll`);
      if (response.data.status) {
        setCarDetails(response.data);
      }
    } catch (error) {
      console.error("Error fetching cars:", error);
    }
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(
        `${baseUrl}/rentalCar/update/${editCar._id}`,
        editCar
      );
      if (response.data.status) {
        alert("Car updated successfully");
        setCarDetails((prev) => ({
          ...prev,
          data: prev.data.map((car) =>
            car._id === editCar._id ? response.data.data : car
          ),
        }));
        setEditCar(null);
      }
    } catch (error) {
      console.error("Error updating car:", error);
      alert("Failed to update car");
    }
  };

  const handleDelete = async (carId) => {
    try {
      const response = await axios.delete(
        `${baseUrl}/rentalCar/remove/${carId}`
      );
      if (response.data.status) {
        alert("Car deleted successfully");
        setCarDetails((prev) => ({
          ...prev,
          data: prev.data.filter((car) => car._id !== carId),
        }));
        setEditCar(null);
      }
    } catch (error) {
      console.error("Error deleting car:", error);
      alert("Failed to delete car");
    }
  };

  const [carData, setCarData] = useState({
    title: "",
    category: "",
    bookingType: "",
    carType: "ev",
    image: "",
    capacity: "",
    luaggage: "",
    priceHour: "",
    pricePerKm: "",
    flatRate: "",
  });
  //for getting input data
  const inputHandler = (e) => {
    setCarData({ ...carData, [e.target.name]: e.target.value });
  };
  //for getting input file type data
  const fileHandler = (e) => {
    setCarData({ ...carData, [e.target.name]: e.target.files[0] });
  };

  const token = localStorage.getItem("tokenData");
  //for adding book  form data
  const handleAddCar = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", carData.title);
    formData.append("category", carData.category);
    formData.append("bookingType", bookingType);
    formData.append("carType", carData.carType);
    formData.append("image", carData.image);
    formData.append("capacity", carData.capacity);
    formData.append("luaggage", carData.luaggage);
    formData.append("priceHour", carData.priceHour);
    formData.append("pricePerKm", carData.pricePerKm);
    formData.append("flatRate", carData.flatRate);
    let res = await axios.post(`${baseUrl}/rentalCar/create`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    if (res.data.status) {
      alert(res.data.message);
      fetchCarDetails();
      navigate("/MainWebite");
    } else {
      alert(res.data.message);
    }
  };

  return (
    <div className="table-responsive mt-4">
      <table className="table car-list-table">
        <thead>
          <tr>
            <th>
              Car Name <FaArrowDown />
            </th>
            <th>
              Category <IoFilterSharp />
            </th>
            <th>
              Pricing <MdCurrencyRupee /> /km
            </th>
            <th>Booking Type</th>
            <th>Luggage</th>
            <th>Image</th>
            <th>Capacity</th>
            <th>
              <button
                type="button"
                className="btn-new"
                data-bs-target="#car"
                data-bs-toggle="modal"
              >
                New
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {carDetails.data?.map((car, index) => (
            <tr key={index}>
              <td>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                  />
                  <label className="form-check-label">{car.title}</label>
                </div>
              </td>
              <td>{car.categoryName || "-"}</td>
              <td>
                {car.pricePerKm}
                {/* <FaIndianRupeeSign /> */}
              </td>
              <td>{car.bookingType}</td>
              <td>{car.luaggage}</td>
              <td>{car.image || "No image"}</td>
              <td>{car.capacity}</td>
              <td>
                <button
                  type="button"
                  className="btn dotbtn"
                  onClick={() => setEditCar({ ...car })}
                >
                  <PiDotsThreeOutlineVerticalFill />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* add */}
      <div
        class="modal fade"
        id="car"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Car
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form
              name="frm"
              method="post"
              onSubmit={handleAddCar}
              encType="multipart/form-data"
            >
              <div class="modal-body">
                <div className="row ">
                  <div className="">
                    <label htmlFor="car" className="form-label">
                      Car Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="car"
                      placeholder="Car Name"
                      name="title"
                      onChange={inputHandler}
                    />
                  </div>
                  <div className="col-md-6 mt-3 ">
                    <label htmlFor="car" className="form-label">
                      Car Type
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="car"
                      placeholder="Car Type"
                      name="carType"
                      onChange={inputHandler}
                    />
                  </div>
                  <div className="col-md-6  mt-3">
                    <label htmlFor="car" className="form-label">
                      Category
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="car"
                      placeholder="Category"
                      name="category"
                      onChange={inputHandler}
                    />
                  </div>

                  <div className="mt-3 ">
                    <label htmlFor="image" className="form-label">
                      Image
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      id="image"
                      placeholder="Choose an Image"
                      name="image"
                      onChange={fileHandler}
                    />
                  </div>
                  <div className="mt-3">
                    <label htmlFor="bookingType" className="form-label">
                      Booking Type
                    </label>
                    <select
                      className="form-select"
                      id="bookingType"
                      value={bookingType}
                      name="bookingType"
                      onChange={(e) => setBookingType(e.target.value)}
                    >
                      <option value="">Select Booking Type</option>
                      <option value="Local">Local</option>
                      <option value="Airport Transfer">Airport Transfer</option>
                      <option value="Intercity">Intercity</option>
                    </select>
                  </div>

                  {bookingType === "Local" && (
                    <div className="mt-3">
                      <label htmlFor="localRate" className="form-label">
                        Local <MdCurrencyRupee />
                        /hour
                      </label>
                      <input
                        type="number"
                        className="form-control"

                        id="localRate"
                        placeholder="00"
                        name="priceHour"

                        onChange={inputHandler}
                      />
                    </div>
                  )}

                  {bookingType === "Airport Transfer" && (
                    <div className="mt-3">
                      <label htmlFor="airportRate" className="form-label">
                        Flat Rate (Airport Transfer)
                      </label>
                      <input
                        type="number"
                        className="form-control"

                        id="airportRate"
                        placeholder="00"
                        name="flatRate"

                        onChange={inputHandler}
                      />
                    </div>
                  )}

                  {bookingType === "Intercity" && (
                    <div className="mt-3">
                      <label htmlFor="intercityRate" className="form-label">
                        Intercity <MdCurrencyRupee />
                        /km
                      </label>
                      <input
                        type="number"
                        className="form-control"

                        id="intercityRate"
                        placeholder="00"
                        name="pricePerKm"

                        onChange={inputHandler}
                      />
                    </div>
                  )}

                  <div className="col-md-6 mt-3">
                    <label htmlFor="flaterate" className="form-label">
                      Luaggage
                    </label>
                    <input
                      type="Number"
                      className="form-control"
                      id="flaterate"
                      placeholder="00"
                      name="luaggage"
                      onChange={inputHandler}
                    />
                  </div>
                  <div className="col-md-6 mt-3">
                    <label htmlFor="flaterate" className="form-label">
                      Capacity
                    </label>
                    <input
                      type="Number"
                      className="form-control"
                      id="flaterate"
                      placeholder="00"
                      name="capacity"
                      onChange={inputHandler}
                    />
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn cancelbtn"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="submit" class="btn btn-primary">
                  Add Car
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Edit Car Modal */}
      {editCar && (
        <div
          className="modal show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Car</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setEditCar(null)}
                />
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-12 mb-3">
                    <label>Car Name</label>
                    <input
                      className="form-control"
                      value={editCar.title}
                      onChange={(e) =>
                        setEditCar((prev) => ({
                          ...prev,
                          title: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label>Car Type</label>
                    <input
                      className="form-control"
                      value={editCar.carType}
                      onChange={(e) =>
                        setEditCar((prev) => ({
                          ...prev,
                          carType: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label>Category</label>
                    <input
                      className="form-control"
                      value={editCar.categoryName}
                      onChange={(e) =>
                        setEditCar((prev) => ({
                          ...prev,
                          categoryName: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <label>Image URL</label>
                    <input
                      className="form-control"
                      value={editCar.image}
                      onChange={(e) =>
                        setEditCar((prev) => ({
                          ...prev,
                          image: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <label>Booking Type</label>
                    <select
                      className="form-select"
                      value={editCar.bookingType}
                      onChange={(e) =>
                        setEditCar((prev) => ({
                          ...prev,
                          bookingType: e.target.value,
                        }))
                      }
                    >
                      <option value="Local">Local</option>
                      <option value="Airport Transfer">Airport Transfer</option>
                      <option value="Intercity">Intercity</option>
                    </select>
                  </div>
                  {editCar.bookingType === "Local" && (
                    <div className="col-12 mb-3">
                      <label>Price per Hour (₹)</label>
                      <input
                        className="form-control"

                        value={editCar.priceHour}
                        onChange={(e) =>
                          setEditCar((prev) => ({
                            ...prev,
                            priceHour: e.target.value,
                          }))
                        }
                      />
                    </div>
                  )}
                  {editCar.bookingType === "Airport Transfer" && (
                    <div className="col-12 mb-3">
                      <label>Flat Rate (₹)</label>

                      <input
                        className="form-control"

                        value={editCar.flatRate}
                        onChange={(e) =>
                          setEditCar((prev) => ({
                            ...prev,
                            flatRate: e.target.value,
                          }))
                        }
                      />
                    </div>
                  )}
                  {editCar.bookingType === "Intercity" && (
                    <div className="col-12 mb-3">
                      <label>Price per KM (₹)</label>
                      <input
                        className="form-control"
                        value={editCar.pricePerKm}
                        onChange={(e) =>
                          setEditCar((prev) => ({
                            ...prev,
                            pricePerKm: e.target.value,
                          }))
                        }

                      />
                    </div>
                  )}
                  <div className="col-md-6 mb-3">
                    <label>Luggage</label>
                    <input
                      className="form-control"
                      value={editCar.luaggage}
                      onChange={(e) =>
                        setEditCar((prev) => ({
                          ...prev,
                          luaggage: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label>Capacity</label>
                    <input
                      className="form-control"
                      value={editCar.capacity}
                      onChange={(e) =>
                        setEditCar((prev) => ({
                          ...prev,
                          capacity: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setEditCar(null)}
                >
                  Cancel
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(editCar._id)}
                >
                  Delete
                </button>
                <button className="btn btn-primary" onClick={handleUpdate}>
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Cars;
