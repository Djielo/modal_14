import React from "react";
import "./index.css";

const ModalEmployeeCreated = ({ image, message, closeFunction }) => {
  return (
    <div className="modalContainer" onClick={closeFunction}>
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
