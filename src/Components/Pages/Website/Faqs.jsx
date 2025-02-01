import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import style from "../Website/faqs.module.css"
function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleAccordion = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  const accordionItems = [
    { title: "Question 1", answer: "This is the answer to Question 1." },
    { title: "Question 2", answer: "This is the answer to Question 2." },
    { title: "Question 3", answer: "This is the answer to Question 3." }
  ];
  return (
    <div className="container mt-5">
      {accordionItems.map((item, index) => (
        <div key={index} className={style.questiontxt}>
          <span
            className={`d-flex justify-content-between align-items-center w-100 text-start p-3`}
            onClick={() => toggleAccordion(index)}
          >
            <span>{item.title}</span>
            {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
          </span>
          {openIndex === index && (
            <div className="p-3" >
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Faqs;
