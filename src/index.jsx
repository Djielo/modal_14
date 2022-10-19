import React from "react";
import "./index.css";

const ModalEmployeeCreated = ({ image, message }) => {

  const refModal = React.useRef();

  function hide(e) {
    e.preventDefault();
    refModal.current.remove();  
  }

  return (
    <div ref={refModal} className="modalContainer" onClick={hide}>
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
