import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

export const Modal = ({ children, isOpen, close }) => {
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="wrapper" onClick={close}>
      <div className="modal" onClick={event => event.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.querySelector('#modals'),
  );
}