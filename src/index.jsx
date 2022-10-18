import React from "react";
import "index.css";

const ModalEmployeeCreated = ({ image, message }) => {
  let msg = message;

  function hide() {
    msg = "";
  }

  return (
    <div className="jlo_modalContainer" onClick={hide}>
      <div className="jlo_overlay"></div>
      <div className="jlo_modal">
        <button className="jlo_modalClose">X</button>
        <img className="jlo_modalImage" src={image} alt="Employee Created" />
        <p className="jlo_modalText">{msg}</p>
      </div>
    </div>
  );
};

export { ModalEmployeeCreated };
