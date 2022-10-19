import React from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(49, 49, 49, 0.631);
`;

const Modal = styled.div`
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
  background-image: linear-gradient(-25deg, #768e12 0%, #ffffff 100%);
  box-shadow: 0 0 5px 2px rgb(218, 201, 14);
`;

const ModalClose = styled.button`
  padding: 0.3rem 0.5rem;
  border: none;
  border-radius: 5px;
  position: absolute;
  top: -0.8rem;
  right: -0.8rem;
  background-color: #556611;
  color: #fff;
  box-shadow: 0 0 5px 5px #a2b165;
  cursor: pointer;
`;

const ModalImage = styled.img`
  text-align: center;
  width: 2rem;
  height: 2rem;
  padding: 0.5rem;
`;

const ModalText = styled.p`
  text-align: center;
`;

const ModalEmployeeCreated = ({ image, message, setMessage }) => {

  function hide() {
    setMessage("");
  }

  return (
    <ModalContainer onClick={hide}>
      <Overlay />
      <Modal>
        <ModalClose>X</ModalClose>
        <ModalImage src={image} alt="Employee Created" />
        <ModalText>{message}</ModalText>
      </Modal>
    </ModalContainer>
  );
};

module.exports = ModalEmployeeCreated;
