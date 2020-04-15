import React, { useState, useCallback } from 'react';
import './Header.css';
import { SignIn } from '../SignIn';
import { Modal } from '../Modal';

export const Header = () => {
  const [isSignInModalOpen, setSignInModalOpen] = useState(false);

  const toggleSignInModal = useCallback(
    () => setSignInModalOpen(prevIsOpen => !prevIsOpen),
    [setSignInModalOpen],
  );

  const closeSignInModal = useCallback(
    () => setSignInModalOpen(false),
    [setSignInModalOpen],
  );

  return (
    <header>
      <button type="button" onClick={toggleSignInModal}>
        SignIn
      </button>
  
      <Modal isOpen={isSignInModalOpen} close={closeSignInModal}>
        <SignIn />
      </Modal>
    </header>
  );
}