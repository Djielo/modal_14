import React from "react";
import "./index.css";

/**
 * It's a modal 
 * @param {object} props component's properties
 * @param {string} props.image image url
 * @param {string} props.message message to show
 * @param {Function} props.closeFunction; the function to close the modal
 * @returns {JSX.Element} A modal component that is being returned in JSX format
 */
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
