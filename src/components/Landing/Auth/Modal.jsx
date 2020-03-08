import React from 'react';
import styled from 'styled-components';

const Modal = ({ isOpen, children, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <ModalStyles>
      <div>{children}</div>
      <Button onClick={onClose}>X</Button>
    </ModalStyles>
  );
};

export default Modal;

const ModalStyles = styled.div`
  width: 500px;
  maxwidth: 100%;
  margin: 0 auto;
  position: fixed;
  left: 50%;
  top: 50%;
  filter: blur(0.05rem);
  transform: translate(-50%, -50%);
  box-shadow: 0 20px 50px rgba(28, 32, 34, 0.8);
  background: linear-gradient(
    rgba(41, 128, 185, 0.6),
    rgba(109, 213, 250, 0.9)
  );
  z-index: 999;
  padding: 1rem 2rem 4rem;
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  margin-top: 3rem;
  padding: 0.3rem 0.8rem;
  cursor: pointer;
  border-radius: 50%;
  border: none;
  width: 3rem;
  height: 3rem;
  font-weight: bold;
  align-self: flex-end;
`;
