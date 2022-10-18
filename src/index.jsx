import React from "react";

const ModalEmployeeCreated = ({ image, message }) => {
  let msg = message;

  function hide() {
    msg = "";
  }

  return (
    <div className="jielo_modalContainer" onClick={hide}>
      <div className="jielo_overlay"></div>
      <div className="jielo_modal">
        <button className="jielo_modalClose">X</button>
        <img className="jielo_modalImage" src={image} alt="Employee Created" />
        <p className="jielo_modalText">{msg}</p>
      </div>
    </div>
  );
};

export default ModalEmployeeCreated;
