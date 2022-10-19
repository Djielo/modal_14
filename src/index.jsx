import React from "react";
import "./index.css";

const ModalEmployeeCreated = ({ image, message }) => {

  function hide() {
    e.preventDefault();
    document.querySelector(".modalContainer").remove();  
  }

  return (
    <div className="modalContainer" onClick={hide}>
      <div className="overlay"></div>
      <div className="modal">
        <button className="modalClose">X</button>
        <img className="modalImage" src={image} alt="Employee Created" />
        <p className="modalText">{message}</p>
      </div>
    </div>
  );
};

module.exports = ModalEmployeeCreated;
