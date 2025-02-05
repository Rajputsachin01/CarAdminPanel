import React, { useEffect, useState } from "react";
import style from "../../Pages/Website/settings.module.css";
import { FaAngleDown } from "react-icons/fa";
import { Tab, Tabs } from "react-bootstrap";
import Addons from "./Addons";
import Promocode from "./Promocode";
import Faqs from "./Faqs";
import axios from "axios";
import { baseUrl } from "../../../config";

const Settings = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [promoCode, setPromoCode] = useState({
    first_Date: "",
    second_Date: "",
    uniqueCode: "",
  });
  useEffect(() => {
    const promocode = async () => {
      try {
        const response = await axios.post(
          `${baseUrl}/promoCode/create`,
          promoCode
        );
        console.log(response.data);
      } catch (error) {}
    };
    promocode();
  }, []);
  const addPromoCode = (e) => {
    e.preventDefault();
    console.log(promoCode, "promocode data");
  };
  const handleChange = (e) => {
    setPromoCode({ ...promoCode, [e.target.name]: e.target.value });
  };
  return (
    <div className={style.settingSection}>
      {/* Top Settings Section */}
      <div className={`mb-4 mt-6 row ${style.topSettingSecton}`}>
        <div className="col-sm-6 d-flex align-items-center">
          <span className={`${style.Commoncolor} ${style.promoAddonsTxt}`}>
            Promo Code
          </span>
          <input
            type="date"
            className={style.dateinputSeting}
            name="first_Date"
            value={promoCode.first_Date}
            onChange={handleChange}
          />
          <span> &gt; </span>
          <input
            type="date"
            className={style.dateinputSeting}
            name="second_Date"
            value={promoCode.second_Date}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="   Unique Code "
            name="uniqueCode"
            value={promoCode.uniqueCode}
            className={style.settingTopInputs}
            onChange={handleChange}
          />
          <button
            className={`btn ${style.setingapplybtn}`}
            onClick={addPromoCode}
          >
            Add
          </button>
        </div>

        <div className={`col-sm-6 d-flex align-items-center ${style.adondiv}`}>
          <span
            className={`${style.promoAddonsTxt} ${style.Commoncolor} ${style.addonstxt}`}
          >
            Add Ons
          </span>
          <input
            type="text"
            placeholder="   Name"
            className={`${style.nameInputSeting} ${style.settingTopInputs}`}
          />
          <input
            type="text"
            placeholder="   Costing"
            className={style.settingTopInputs}
          />
          <button
            className={`btn ${style.setingapplybtn} ${style.settignapplybtnlast}`}
          >
            Add
          </button>
        </div>
      </div>

      {/* Inclusion, Exclusion, and T&C Section */}
      <div className="row">
        <div className="col-sm-4">
          <h6>Exclusions</h6>
          <textarea
            placeholder="Write here..."
            className={`form-control ${style.txtclass}`}
          ></textarea>
          <div className="d-flex mt-2 justify-content-end">
            <button className={style.updatesettingbtn}>Update</button>
          </div>
        </div>
        <div className="col-sm-4">
          <h6>Inclusion</h6>
          <textarea
            placeholder="Write here..."
            className={`form-control ${style.txtclass}`}
          ></textarea>
          <div className="d-flex mt-2 justify-content-end">
            <button className={style.updatesettingbtn}>Update</button>
          </div>
        </div>
        <div className="col-sm-4">
          <h6>T&C</h6>
          <textarea
            placeholder="Write here..."
            className={`form-control ${style.txtclass}`}
          ></textarea>
          <div className="d-flex mt-2 justify-content-end">
            <button className={style.updatesettingbtn}>Update</button>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className={style.faqSection}>
        <span
          className={`${style.Commoncolor} ${style.promoAddonsTxt} ${style.faqsize}`}
        >
          FAQs?
        </span>
        <div className={`row ${style.accordinclass}`}>
          <div className={`col-sm-8 mt-2 ${style.questionpart}`}>
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button
                    className={`accordion-button collapsed ${style.myclass}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    Example Text For Question?
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is
                    the first item's accordion body.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Checkbox Section */}
          <div className={`col-sm-2 ${style.faqRightpart}`}>
            <div className="d-flex flex-column">
              <strong className="mb-2">
                <input type="checkbox" className={style.faqchkbox} /> Local
              </strong>
              <strong className="mb-2">
                <input type="checkbox" className={style.faqchkbox} /> Intercity
              </strong>
              <strong>
                <input type="checkbox" className={style.faqchkbox} /> Airport
                Transfer
              </strong>
            </div>
          </div>

          {/* Update Button */}
          <div className={`col-sm-2 ${style.faqRightpart}`}>
            <button
              className={`btn  btn-sm text-white mt-3 ${style.Commoncolorbg}`}
            >
              Update
            </button>
          </div>
        </div>
      </div>

      <ul
        className={` nav nav-pills mb-3 mt-4  ${style.tabsHere}`}
        id="pills-tab"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <button
            className={` nav-link active  ${style.faqt}`}
            id="pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-home"
            type="button"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            {/* Faqs */}
            <span>Faqs</span>
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={` nav-link ${style.pcode}`}
            id="pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-profile"
            type="button"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
          >
            <span>Promo Codes</span>
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={` nav-link ${style.addon}`}
            id="pills-contact-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-contact"
            type="button"
            role="tab"
            aria-controls="pills-contact"
            aria-selected="false"
          >
            <span> Add Ons</span>
          </button>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div
          class="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <Faqs />
        </div>
        <div
          class="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          <Promocode />
        </div>
        <div
          class="tab-pane fade"
          id="pills-contact"
          role="tabpanel"
          aria-labelledby="pills-contact-tab"
        >
          <Addons />
        </div>
      </div>
    </div>
  );
};

export default Settings;
