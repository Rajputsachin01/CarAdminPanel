import React, { useState } from 'react';
import { FaArrowDown } from "react-icons/fa";
import { IoFilterSharp } from "react-icons/io5";
import { MdCurrencyRupee } from "react-icons/md";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { FaIndianRupeeSign } from "react-icons/fa6";
import axios from 'axios';
import { baseUrl } from '../../../config';
import { toast ,ToastContainer} from 'react-toastify';
import { useNavigate } from 'react-router-dom';



const Cars = () => {
  const [selectedCar, setSelectedCar] = useState(null);
const navigate = useNavigate()
  const openCarModal = (user) => {
    setSelectedCar(user);
  };

  const closeCarModal = () => {
    setSelectedCar(null);
  };

  const [bookingType, setBookingType] = useState('');
  const [carName, setCarName] = useState('');
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState('');
  const [localRate, setLocalRate] = useState('');
  const [airportRate, setAirportRate] = useState('');
  const [intercityRate, setIntercityRate] = useState('');
  const [luggage, setLuggage] = useState('');
  const [capacity, setCapacity] = useState('');
  const [status, setStatus] = useState('pending');
  // const handleImageChange = (e) => {
  //   setImage(e.target.files[0]);
  // };
  const data = [
    { name: "Corolla Altis", category: "Sedan", pricePerKm: 25, bookingType: "Local", transfer: 4000, luggage: 2, image: "Thumbnail", capacity: 3 },
    { name: "Innova Crysta", category: "SUV", pricePerKm: 27, bookingType: "Intercity", transfer: 4000, luggage: 3, image: "Thumbnail", capacity: 3 },
    { name: "Innova Hycross", category: "Premium SUV", pricePerKm: 27, bookingType: "Airport Transfer", transfer: 5000, luggage: 3, image: "Thumbnail", capacity: 3 },
    { name: "Toyota Etios", category: "Sedan", pricePerKm: 27, bookingType: "Local", transfer: 3000, luggage: 2, image: "Thumbnail", capacity: 3 },
    { name: "Toyota Glanza", category: "Hatchback", pricePerKm: 27, bookingType: "Airport Transfer", transfer: 3000, luggage: 1, image: "Thumbnail", capacity: 3 },
    { name: "BMW Gran Limousine", category: "Luxury Car", pricePerKm: 27, bookingType: "Local", transfer: 12000, luggage: 3, image: "Thumbnail", capacity: 3 },
    { name: "Volvo 52 Seater Coach", category: "Coach", pricePerKm: 27, bookingType: "Intercity", transfer: 0, luggage: 0, image: "Thumbnail", capacity: 3 },
  ];


  const [carData, setCarData] = useState({
    "title": "",
    "category": "",
    "bookingType": "Local",
    "carType": "ev",
    "image": "",
    "capacity": "",
    "luaggage": "",
    "priceHour": "",
    "pricePerKm": "",
    "flatRate": "",
  })
  //for getting input data
  const inputHandler = (e) => {
    setCarData({ ...carData, [e.target.name]: e.target.value })
  }
  //for getting input file type data
  const fileHandler = (e) => {
    setCarData({ ...carData, [e.target.name]: e.target.files[0] })
  }

  const token = localStorage.getItem("tokenData")
  //for adding book  form data
  const handleAddCar = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', carData.title);
    formData.append('category', carData.category);
    formData.append('bookingType', carData.bookingType);
    formData.append('carType', carData.carType);
    formData.append('image', carData.image);
    formData.append('capacity', carData.capacity);
    formData.append('luaggage', carData.luaggage);
    formData.append('priceHour', carData.priceHour);
    formData.append('pricePerKm', carData.pricePerKm);
    formData.append('flatRate', carData.flatRate);
    let res = await axios.post(`${baseUrl}/rentalCar/create`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    })
    if (res.data.status) {
      toast.success(res.data.message);
    }
    else {
      toast.error(res.data.message)
    }
  }


  return (
    <div >
      <div className="table-responsive mt-4">
        <ToastContainer />
        <table className="table car-list-table">
          <thead>
            <tr>
              <th>Car Name <FaArrowDown /></th>
              <th>Category <IoFilterSharp /></th>
              <th>Pricing <MdCurrencyRupee />/km</th>
              <th>Booking Type</th>
              <th>Transfer</th>
              <th>Luaggage</th>
              <th>Image</th>
              <th>Capacity</th>
              <th><button type="button " class="btn-new" data-bs-toggle="modal" data-bs-target="#car">New</button></th>
            </tr>
          </thead>
          <tbody>
            {data.map((car, index) => (
              <tr key={index} onClick={() => openCarModal(car)}>
                <td> <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                  <label class="form-check-label" for="flexSwitchCheckDefault">{car.name}</label>
                </div></td>
                <td>{car.category}</td>
                <td>{car.pricePerKm}  <FaIndianRupeeSign />
                </td>
                <td>{car.bookingType}</td>
                <td>{car.transfer}</td>
                <td>{car.luggage}</td>
                <td>{car.image}</td>
                <td>{car.capacity}</td>
                <td><button type="button" class="btn dotbtn" data-bs-toggle="modal" data-bs-target="#dotbtn"><PiDotsThreeOutlineVerticalFill /></button></td>
              </tr>
            ))}
          </tbody>
        </table>
        {selectedCar && (
          <div
            className="modal fade show"
            tabIndex="-1"
            aria-labelledby="carModalLabel"
            aria-hidden="true"
            style={{ display: "block" }}
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="carModalLabel">Car Details</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={closeCarModal}
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="row">
                      <div className="col-md-12">
                        <label htmlFor="carName" className="form-label">Car Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="carName"
                          value={selectedCar.name}
                          readOnly
                        />
                      </div>

                      <div className="col-md-6 mt-3">
                        <label htmlFor="carType" className="form-label">Car Type</label>
                        <input
                          type="text"
                          className="form-control"
                          id="carType"
                          value={selectedCar.carType}
                          readOnly
                        />
                      </div>

                      <div className="col-md-6 mt-3">
                        <label htmlFor="category" className="form-label">Category</label>
                        <input
                          type="text"
                          className="form-control"
                          id="category"
                          value={selectedCar.category}
                          readOnly
                        />
                      </div>

                      <div className="col-md-12 mt-3">
                        <label htmlFor="image" className="form-label">Image</label>
                        <input
                          type="text"
                          className="form-control"
                          id="image"
                          value={selectedCar.image || "No image available"}
                          readOnly
                        />
                      </div>

                      <div className="col-md-12 mt-3">
                        <label htmlFor="bookingType" className="form-label">Booking Type</label>
                        <select
                          className="form-select"
                          id="bookingType"
                          value={selectedCar.bookingType}
                          onChange={(e) =>
                            setSelectedCar({ ...selectedCar, bookingType: e.target.value })
                          }
                        >
                          <option value="Local">Local</option>
                          <option value="Airport Transfer">Airport Transfer</option>
                          <option value="Intercity">Intercity</option>
                        </select>
                      </div>



                      {selectedCar.bookingType === "Local" && (
                        <div className="col-md-12 mt-3">
                          <label htmlFor="localRate" className="form-label">Local ₹/hour</label>
                          <input
                            type="text"
                            className="form-control"
                            id="localRate"
                            value={selectedCar.pricePerKm}
                            readOnly
                          />
                        </div>
                      )}

                      {selectedCar.bookingType === "Airport Transfer" && (
                        <div className="col-md-12 mt-3">
                          <label htmlFor="airportRate" className="form-label">Flat Rate (Airport Transfer)</label>
                          <input
                            type="text"
                            className="form-control"
                            id="airportRate"
                            value={selectedCar.pricePerKm}
                            readOnly
                          />
                        </div>
                      )}

                      {selectedCar.bookingType === "Intercity" && (
                        <div className="col-md-12 mt-3">
                          <label htmlFor="intercityRate" className="form-label">Intercity ₹/km</label>
                          <input
                            type="text"
                            className="form-control"
                            id="intercityRate"
                            value={selectedCar.pricePerKm}
                            readOnly
                          />
                        </div>
                      )}

                      <div className="col-md-6 mt-3">
                        <label htmlFor="luggage" className="form-label">Luggage</label>
                        <input
                          type="text"
                          className="form-control"
                          id="luggage"
                          value={selectedCar.luggage}
                          readOnly
                        />
                      </div>

                      <div className="col-md-6 mt-3">
                        <label htmlFor="capacity" className="form-label">Capacity</label>
                        <input
                          type="text"
                          className="form-control"
                          id="capacity"
                          value={selectedCar.capacity}
                          readOnly
                        />
                      </div>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn cancelbtn" onClick={closeCarModal}>Cancel</button>
                  <button type="button" className="btn deletebtn">Delete</button>
                  <button type="button" className="btn btn-primary">Update</button>
                </div>
              </div>
            </div>
          </div>
        )}
        <div class="modal fade" id="car" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Car</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <form name='frm' method='post' onSubmit={handleAddCar} encType="multipart/form-data">
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
                        name='title'
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
                        name='carType'
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
                        name='category'
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
                        name='image'
                        onChange={fileHandler}
                      />
                    </div>
                    {/* Booking Type Dropdown */}
                    <div className="mt-3">
                      <label htmlFor="bookingType" className="form-label">Booking Type</label>
                      <select
                        className="form-select"
                        id="bookingType"
                        value={bookingType}
                        name='bookingType'
                        onChange={(e) => setBookingType(e.target.value)}
                      >
                        <option value="">Select Booking Type</option>
                        <option value="local">Local</option>
                        <option value="airport">Airport Transfer</option>
                        <option value="intercity">Intercity</option>
                      </select>
                    </div>

                    {bookingType === 'local' && (
                      <div className="mt-3">
                        <label htmlFor="localRate" className="form-label">Local <MdCurrencyRupee />/hour</label>
                        <input
                          type="number"
                          className="form-control"
                          id="localRate"
                          placeholder="00"
                          name='priceHour'
                          onChange={inputHandler}
                        />
                      </div>
                    )}

                    {bookingType === 'airport' && (
                      <div className="mt-3">
                        <label htmlFor="airportRate" className="form-label">Flat Rate (Airport Transfer)</label>
                        <input
                          type="number"
                          className="form-control"
                          id="airportRate"
                          placeholder="00"
                          name='flatRate'
                          onChange={inputHandler}
                        />
                      </div>
                    )}

                    {bookingType === 'intercity' && (
                      <div className="mt-3">
                        <label htmlFor="intercityRate" className="form-label">Intercity <MdCurrencyRupee />/km</label>
                        <input
                          type="number"
                          className="form-control"
                          id="intercityRate"
                          placeholder="00"
                          name='pricePerKm'
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
                        name='luaggage'
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
                        name='capacity'
                        onChange={inputHandler}
                      />
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn cancelbtn" data-bs-dismiss="modal">Cancel</button>
                  <button type="submit" class="btn btn-primary">Add Car</button>
                </div>
              </form>
            </div>
          </div>
        </div>



      </div>
    </div>
  )
}

export default Cars;
