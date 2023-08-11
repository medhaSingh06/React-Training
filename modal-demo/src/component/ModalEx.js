import React, { useState } from 'react'
import Modal, { setAppElement } from 'react-modal'
// only component for modal


Modal.setAppElement('#root');
export const ModalEx = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('');


  const openModal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false);
  }
  return (
  
    <div>
      <h1>My App</h1>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen = {modalIsOpen}
        onRequestClose = {closeModal}
        contentLabel="Example Modal"
        portalClassName='modal-portal'
        overlayClassName='modal-overlay'
        className="modal-content"
      >

      <form>
        <label>Modal component</label>
      </form>

      </Modal>
    </div>
  )


}
