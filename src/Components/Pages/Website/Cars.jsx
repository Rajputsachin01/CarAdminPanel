import React, { useState } from 'react';
import { FaArrowDown } from "react-icons/fa";
import { IoFilterSharp } from "react-icons/io5";
import { MdCurrencyRupee } from "react-icons/md";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { FaIndianRupeeSign } from "react-icons/fa6";



const Cars = () => {
  const [bookingType, setBookingType] = useState('');
  // const [bookingType, setBookingType] = useState('');
  const [carName, setCarName] = useState('');
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState('');
  const [localRate, setLocalRate] = useState('');
  const [airportRate, setAirportRate] = useState('');
  const [intercityRate, setIntercityRate] = useState('');
  const [luggage, setLuggage] = useState('');
  const [capacity, setCapacity] = useState('');
  const [status, setStatus] = useState('pending');
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };
  const data = [
    { name: "Corolla Altis", category: "Sedan", pricePerKm: 25, local: 700, transfer: 4000, luggage: 2, image: "Thumbnail", capacity: 3 },
    { name: "Innova Crysta", category: "SUV", pricePerKm: 27, local: 700, transfer: 4000, luggage: 3, image: "Thumbnail", capacity: 3 },
    { name: "Innova Hycross", category: "Premium SUV", pricePerKm: 27, local: 800, transfer: 5000, luggage: 3, image: "Thumbnail", capacity: 3 },
    { name: "Toyota Etios", category: "Sedan", pricePerKm: 27, local: 500, transfer: 3000, luggage: 2, image: "Thumbnail", capacity: 3 },
    { name: "Toyota Glanza", category: "Hatchback", pricePerKm: 27, local: 450, transfer: 3000, luggage: 1, image: "Thumbnail", capacity: 3 },
    { name: "BMW Gran Limousine", category: "Luxury Car", pricePerKm: 27, local: 1200, transfer: 12000, luggage: 3, image: "Thumbnail", capacity: 3 },
    { name: "Volvo 52 Seater Coach", category: "Coach", pricePerKm: 27, local: 0, transfer: 0, luggage: 0, image: "Thumbnail", capacity: 3 },
  ];
  return (
    <div >
      <div className="table-responsive mt-4">
        <table className="table car-list-table">
          <thead>
            <tr>
              <th>Car Name <FaArrowDown /></th>
              <th>Category <IoFilterSharp /></th>
              <th>Pricing <MdCurrencyRupee />/km</th>
              <th>Local</th>
              <th>Transfer</th>
              <th>Luaggage</th>
              <th>Image</th>
              <th>Capacity</th>
              <th><button type="button" class="btn btn-new" data-bs-toggle="modal" data-bs-target="#car">New</button></th>
            </tr>
          </thead>
          <tbody>
            {data.map((car, index) => (
              <tr key={index}>
                <td> <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                  <label class="form-check-label" for="flexSwitchCheckDefault">{car.name}</label>
                </div></td>
                <td>{car.category}</td>
                <td>{car.pricePerKm}  <FaIndianRupeeSign />
                </td>
                <td>{car.local}</td>
                <td>{car.transfer}</td>
                <td>{car.luggage}</td>
                <td>{car.image}</td>
                <td>{car.capacity}</td>
                <td><button type="button" class="btn dotbtn" data-bs-toggle="modal" data-bs-target="#dotbtn"><PiDotsThreeOutlineVerticalFill /></button></td>
              </tr>
            ))}
          </tbody>
        </table>
        <div class="modal fade" id="car" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Car</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form>
                  <div className="row ">
                    <div className="">
                      <label htmlFor="car" className="form-label">
                        Car Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="car"
                        placeholder="Car Number"
                      />
                    </div>

                    <div className="mt-5 ">
                      <label htmlFor="image" className="form-label">
                        Image
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        id="image"
                        placeholder="Choose an Image"
                      />
                    </div>
                    {/* Category */}
                    <div className=" mt-3">
                      <label htmlFor="category" className="form-label">
                        Category
                      </label>
                      <select className="form-select" id="category">
                        <option selected="">Selected</option>
                        <option selected="">1</option>
                        <option selected="">2</option>
                        <option selected="">3</option>
                      </select>

                    </div>
                    {/* Local rate */}

                    <div className="col-md-6 mt-3 ">
                      <label htmlFor="localrate" className="form-label">
                        Local <MdCurrencyRupee />/hour
                      </label>
                      <input
                        type="Number"
                        className="form-control"
                        id="localrate"
                        placeholder="500"
                      />
                    </div>

                    {/* flate rate */}
                    <div className="col-md-6 mt-3">
                      <label htmlFor="flaterate" className="form-label">
                        Flate Rate (Airport Transfer)
                      </label>
                      <input
                        type="Number"
                        className="form-control"
                        id="flaterate"
                        placeholder="5000"
                      />
                    </div>
                    <div className="col-md-6 mt-3">
                      <label htmlFor="flaterate" className="form-label">
                        Intercity <MdCurrencyRupee />/km
                      </label>
                      <input
                        type="Number"
                        className="form-control"
                        id="flaterate"
                        placeholder="50"
                      />
                    </div>
                    <div className="col-md-3 mt-3">
                      <label htmlFor="flaterate" className="form-label">
                        Luaggage
                      </label>
                      <input
                        type="Number"
                        className="form-control"
                        id="flaterate"
                        placeholder="5"
                      />
                    </div>
                    <div className="col-md-3 mt-3">
                      <label htmlFor="flaterate" className="form-label">
                        Capacity
                      </label>
                      <input
                        type="Number"
                        className="form-control"
                        id="flaterate"
                        placeholder="5"
                      />
                    </div>
                  </div>
                </form>

              </div>
              <div class="modal-footer">
                <button type="button" class="btn cancelbtn" data-bs-dismiss="modal">Cancel</button>
                <button type="button" class="btn deletebtn ">Delete</button>
                <button type="button" class="btn btn-primary">Update</button>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="dotbtn" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Car</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form>
              {/* Car Name */}
              <div className="mb-3">
                <label htmlFor="car" className="form-label">Car Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="car"
                  placeholder="Car Name"
                  value={carName}
                  onChange={(e) => setCarName(e.target.value)}
                />
              </div>

              {/* Image */}
              <div className="mb-3">
                <label htmlFor="image" className="form-label">Image</label>
                <input
                  type="file"
                  className="form-control"
                  id="image"
                  onChange={handleImageChange}
                />
              </div>

              {/* Category */}
              <div className="mb-3">
                <label htmlFor="category" className="form-label">Category</label>
                <select
                  className="form-select"
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">Select Category</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>

              {/* Booking Type Dropdown */}
              <div className="mb-3">
                <label htmlFor="bookingType" className="form-label">Booking Type</label>
                <select
                  className="form-select"
                  id="bookingType"
                  value={bookingType}
                  onChange={(e) => setBookingType(e.target.value)}
                >
                  <option value="">Select Booking Type</option>
                  <option value="local">Local</option>
                  <option value="airport">Airport Transfer</option>
                  <option value="intercity">Intercity</option>
                </select>
              </div>

              {/* Conditional Inputs Based on Booking Type */}
              {bookingType === 'local' && (
                <div className="mb-3">
                  <label htmlFor="localRate" className="form-label">Local <MdCurrencyRupee />/hour</label>
                  <input
                    type="number"
                    className="form-control"
                    id="localRate"
                    placeholder="500"
                    value={localRate}
                    onChange={(e) => setLocalRate(e.target.value)}
                  />
                </div>
              )}

              {bookingType === 'airport' && (
                <div className="mb-3">
                  <label htmlFor="airportRate" className="form-label">Flat Rate (Airport Transfer)</label>
                  <input
                    type="number"
                    className="form-control"
                    id="airportRate"
                    placeholder="5000"
                    value={airportRate}
                    onChange={(e) => setAirportRate(e.target.value)}
                  />
                </div>
              )}

              {bookingType === 'intercity' && (
                <div className="mb-3">
                  <label htmlFor="intercityRate" className="form-label">Intercity <MdCurrencyRupee />/km</label>
                  <input
                    type="number"
                    className="form-control"
                    id="intercityRate"
                    placeholder="50"
                    value={intercityRate}
                    onChange={(e) => setIntercityRate(e.target.value)}
                  />
                </div>
              )}

              {/* Luggage */}
              <div className="mb-3">
                <label htmlFor="luggage" className="form-label">Luggage</label>
                <input
                  type="number"
                  className="form-control"
                  id="luggage"
                  placeholder="5"
                  value={luggage}
                  onChange={(e) => setLuggage(e.target.value)}
                />
              </div>

              {/* Capacity */}
              <div className="mb-3">
                <label htmlFor="capacity" className="form-label">Capacity</label>
                <input
                  type="number"
                  className="form-control"
                  id="capacity"
                  placeholder="5"
                  value={capacity}
                  onChange={(e) => setCapacity(e.target.value)}
                />
              </div>
              <div className="mb-3">
          <label htmlFor="status" className="form-label">Status</label>
          <select
            className="form-select"
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">Select Status</option>
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
          </select>
        </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn cancelbtn" data-bs-dismiss="modal">Cancel</button>
            <button type="button" className="btn deletebtn">Delete</button>
            <button type="button" className="btn btn-primary">Update</button>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
  )
}

export default Cars;
