import React from 'react';
import styled from 'styled-components';

const Modal = ({ popupImage, children, onClose, image_id, handleDelete }) => {
  if (!popupImage) {
    return null;
  }

  return (
    <ModalStyles>
      <div>{children}</div>
      <BottomButtons>
        <Button color={'#82C91F'}>
          <Icon className="far fa-edit"></Icon>
        </Button>
        <Button color={'red'}>
          <Icon
            onClick={() => handleDelete(image_id)}
            className="far fa-trash-alt"
          ></Icon>
        </Button>
        <Button onClick={onClose} color={'#fff'}>
          X
        </Button>
      </BottomButtons>
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

const BottomButtons = styled.div`
  margin: -3.5rem 1rem 0 0;
  align-self: flex-end;
`;

const Button = styled.button`
  margin: 0 0.5rem;
  padding: 1;
  background-color: ${props => props.color};
  cursor: pointer;
  border-radius: 50%;
  border: none;
  width: 3rem;
  height: 3rem;
  font-weight: bold;
  align-self: flex-end;
`;

const Icon = styled.i`
  color: #fff;
  font-weight: bold;
`;
