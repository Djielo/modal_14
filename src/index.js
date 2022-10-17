import React from "react";
import styled from "style-components";

const modalContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
`;

const overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(49, 49, 49, 0.631);
`;

const modal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  max-width: 300px;
  height: max-content;
  min-height: 6rem;
  font-weight: bold;
  padding: 0 2rem;
  border: #ccc solid 1px;
  border-radius: 5px;
  background-image: linear-gradient(-25deg, $primary75 0%, #ffffff 100%);
  box-shadow: 0 0 5px 2px rgb(218, 201, 14);
`;

const modalClose = styled.button`
  padding: 0.3rem 0.5rem;
  border: none;
  border-radius: 5px;
  position: absolute;
  top: -0.8rem;
  right: -0.8rem;
  background-color: $primary;
  color: #fff;
  box-shadow: 0 0 5px 5px $primary50;
  cursor: pointer;
`;

const modalImage = styled.img`
  text-align: center;
  width: 2rem;
  height: 2rem;
  padding: 0.5rem;
`;

const modalText = styled.p`
  text-align: center;
`;

export const ModalEmployeeCreated = ({image, message}) => {

  let msg = message

  function hide() {
    msg = ""
  }

  return (
    <>
      <div className={modalContainer} onClick={hide}>
        <div className={overlay}></div>
        <div className={modal}>
          <button className={modalClose}>X</button>
          <img className={modalImage} src={image} alt="Employee Created" />
          <p className={modalText}>{msg}</p>
        </div>
      </div>
    </>
  );
};

module.exports = ModalEmployeeCreated;
