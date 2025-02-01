import React, { useState } from "react";
import { Card, Tab, Tabs } from "react-bootstrap";
import Bookings from "./Bookings";
import Cars from "./Cars";
import Users from "./Users";
import Settings from "./Settings";
import { FaRegUser } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { GoArrowDownLeft } from "react-icons/go";
import { MdCurrencyRupee } from "react-icons/md";
import { HiArrowUturnRight } from "react-icons/hi2";
import { IoCall } from "react-icons/io5";

const MainWebsite = () => {
  // const [activeTab, setActiveTab] = useState("Cars");
  return (
    <div className="container">
      <div className="p-4">
        {/* Statistics Cards */}
        {/* <div className="row mb-4">
        {[
          {
            title: "Total users",
            value: "89,935",
            change: "+10.2% this week",
            color: "text-success",
            icon: "fa-user"
          },
          {
            title: "Total phone numbers",
            value: "283",
            change: "-0.49% this week",
            color: "text-danger",
            icon: "fa-phone"
          },
          {
            title: "Revenue this week",
            value: "46,827",
            change: "-0.91% this week",
            color: "text-danger",
            icon: "fa-dollar-sign"
          },
          {
            title: "Average order value",
            value: "4500",
            change: "+1.51% this week",
            color: "text-success",
            icon: "fa-shopping-cart"
          }
        ].map((stat, index) => (
          <div className="col-md-3" key={index}>
            <Card className="border-0 shadow">
              <Card.Body>
                <h3 className="text-xl font-bolder">
                  {stat.value}{" "}
                  <span className="float-end fs-6 text-warning">
                    <i className={`fa ${stat.icon} `}></i>
                  </span>
                </h3>
                <p>{stat.title}</p>
                <p className={stat.color}>{stat.change}</p>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div> */}

        <div className="row border rounded p-3 heading-card  ">
          <div className="col-md-6 col-lg-3 my-3 border-end">
            <div className="dash-details">
              <p className="mb-0">12,000</p>
              <div className="me-4 shadow-sm dashicon-user">
                <button>
                  <FaRegUser className="usericons" />
                </button>
              </div>
            </div>
            <p className="dash-user">Total Users</p>
            <div className="d-flex  gap-2 align-items-center">
              <p>
                <GoArrowUpRight className="rat-icon" />{" "}
              </p>
              <p className="rat-heading">
                {" "}
                <span>10.2 </span> +1.01% this week
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 my-3 border-end  ">
            <div className="dash-details">
              <p className="mb-0">12,000</p>
              <div className="me-4 shadow-sm dashicon-user">
                <button>
                  <IoCall className="usercallicon" />
                </button>
              </div>
            </div>
            <p className="dash-user">Total phone numbers</p>
            <div className="d-flex gap-2 align-items-center">
              <p>
                <GoArrowUpRight className="rat-icon" />{" "}
              </p>
              <p className="rat-heading">
                {" "}
                <span>10.2 </span> +1.01% this week
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 my-3 border-end  ">
            <div className="dash-details">
              <p className="mb-0">12,000</p>
              <div className="me-4 shadow-sm dashicon-user">
                <button>
                  <MdCurrencyRupee class="usericons-r" />
                </button>
              </div>
            </div>
            <p className="dash-user">Revenue this week</p>
            <div className="d-flex gap-2 align-items-center">
              <p>
                {" "}
                <GoArrowDownLeft className="ratdown-icon" />
              </p>
              <p className="rat-heading">
                {" "}
                <span>10.2 </span> +1.01% this week
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 my-3">
            <div className="dash-details">
              <div>
                <p className="mb-0">12,000</p>
              </div>
              <div className="me-4 shadow-sm dashicon-user">
                <button>
                  {" "}
                  <HiArrowUturnRight className="usericons-r" />
                </button>
              </div>
            </div>
            <p className="dash-user">Refunded</p>

            <div className="d-flex gap-2 align-items-center">
              <p>
                <GoArrowUpRight className="rat-icon" />{" "}
              </p>
              <p className="rat-heading">
                {" "}
                <span>10.2 </span> +1.01% this week
              </p>
            </div>
          </div>
        </div>

        <ul
          className="nav nav-pills mb-3 mt-4 tabsHereone"
          id="pills-tab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active bookingtab"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-book"
              type="button"
              role="tab"
              aria-controls="pills-book"
              aria-selected="true"
            >
              {/* Faqs */}
              <span>Bookings</span>
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link carstab"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-car"
              type="button"
              role="tab"
              aria-controls="pills-car"
              aria-selected="true"
            >
              {/* Faqs */}
              <span>Cars</span>
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link userstab"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-user"
              type="button"
              role="tab"
              aria-controls="pills-user"
              aria-selected="false"
            >
              <span>Users</span>
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link settingTab"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-seting"
              type="button"
              role="tab"
              aria-controls="pills-seting"
              aria-selected="false"
            >
              <span>Settings</span>
            </button>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-book"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <Bookings />
          </div>
          <div
            className="tab-pane fade"
            id="pills-car"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <Cars />
          </div>
          <div
            className="tab-pane fade"
            id="pills-user"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
          >
            <Users />
          </div>
          <div
            className="tab-pane fade"
            id="pills-seting"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
          >
            <Settings />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainWebsite;
