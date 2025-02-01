import React from "react";
import "./BookingForm.css";
import { GrMapLocation } from "react-icons/gr";

const BookingDetails = () => {
  
  return (
    <div className=" container booking-form-container">
        <h2 className=" text-center pb-2">Booking Details</h2>
      <div className="infodiv">
        <div className="carinfo">
        <p >City/Cities</p>
        <input type="text" placeholder="Mumbai/Pune" className="myinput" />
        </div>
        <div className="carinfo">
        <p className="par1">Car</p>
        <select name="" id="" className="myinput">
          <option value="">Innova/Crysta</option>
        </select>
        </div>
        <div className="carinfo">
        <p>Duty Type</p>
        <select name="" id="" className="myinput">
          <option value="">Local</option>
          <option value="">Intercity</option>
          <option value="">Airport Transfer</option>
        </select>
        </div>
        <div className="carinfo">
        <p className="par1">Category</p>
        <select name="" id="" className="myinput">
          <option value="">SUV</option>
          
        </select>
        </div>
      </div>
      
      <div className="form-grid">
        <div>
          <label className="label-class">Pick Up Date</label>
          <input type="date" className="form-input"  value="2021-06-26" />
        </div>
        <div>
          <label className="label-class">Pick Up Time</label>
          <input type="time" className="form-input"  value="09:00" />
        </div>
        <div>
          <label className="label-class">Drop Off Date</label>
          <input type="date" className="form-input" value="2021-06-26" />
        </div>
        <div>
          <label className="label-class">Drop Off Time</label>
          <input type="time" className="form-input" value="08:00" />
        </div>
        <div className="pnrdiv">
        <label className="label-class">PNR</label>
        <input type="text" className="form-input" value="SDFGHJKTYU" />
        </div>
      </div>
      <hr className="divider" />

      <div className="info-grid">
      <div className="form-group">
        <label className="label-class">Full Name</label>
        <input type="text" className="form-input"  placeholder="Your Name" />
      </div>
      <div className="form-group">
        <label className="label-class">Mobile</label>
        <input type="text" className="form-input"  placeholder="Mobile No." />
      </div>
      <div className="form-group">
        <label className="label-class">Email</label>
        <input type="email" className="form-input" placeholder="Enter your mail" />
      </div></div>
      <div className="info-grid">
        <div>
          <label className="label-class">Pick Up Location &nbsp;<GrMapLocation /> </label>
          <textarea className="textareafield" placeholder="Pick up guests from Chaitanya Towers in Prabhadevi"></textarea>
        </div>
        <div>
          <label className="label-class">Drop Off Location &nbsp;<GrMapLocation /></label>
          <textarea className="textareafield" placeholder="Drop them to Oleander farms in Karjat"></textarea>
        </div>
        <div>
          <label className="label-class">Any Notes</label>
          <textarea className="textareafield" placeholder="OUTSTATION TRIP FROM MUMBAI TO KARJAT"></textarea>
        </div>
      </div>
      <div className="form-grid">
        <input type="text" placeholder="AddOns" className="form-input"/>
        <input type="text" placeholder="Flight No." className="form-input"/>
        <input type="text" placeholder="Payment ID" className="form-input"/>
        <label htmlFor="" className="paymentlabel">Payment Status</label>
        <select className="form-input">
          <option>Successfull</option>
          <option>Pending</option>
        </select>
      </div>
      <div className="car-grid">
           <div className="driverinfo">       
          <label className="driverlabel">Drive Name</label>
          <input type="text" className="car-input" disabled value="Suhas" />
          <button className="uploadbtn">Upload</button>
        </div>
        <div >
        <div className="driverinfo">
          <label className="driverlabel">Driver Mobile</label>
          <input type="text" className="car-input" placeholder="Drivers Mobile no." />
        </div></div>
        <div className="cardiv">
        <div className="driverinfo">
          <label className="driverlabel">Car No.</label>
          <input type="text" className="car-input carno"  placeholder="MH01DR9881" />
          <button className="uploadbtn">Upload</button>
        </div>
        <div className="driverinfo">
          <label className="driverlabel cartype">Car</label>
          <input type="text" className="car-input cartype" placeholder="Crysta" />
        </div>
      </div></div>
      <div className="button-group">
        <button type="button" className="cancel-button">Cancel</button>
        <button type="button" className="delete-button">Delete</button>
        <button type="button" className="update-button">Update</button>
      </div>
    </div>
  );
};

export default BookingDetails;