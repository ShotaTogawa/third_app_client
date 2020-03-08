import React from 'react';
import styled from 'styled-components';

const Modal = ({ popupImage, children, onClose }) => {
  if (!popupImage) {
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
  margin: 0 auto;
  position: fixed;
  box-shadow: 10px 10px 10px #eee;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  margin: -3.5rem 1rem 0 0;
  padding: 1;
  cursor: pointer;
  border-radius: 50%;
  border: none;
  width: 3rem;
  height: 3rem;
  font-weight: bold;
  align-self: flex-end;
`;
