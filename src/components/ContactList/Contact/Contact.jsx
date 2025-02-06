import { FaUserLarge } from 'react-icons/fa6';
import { BsTelephoneFill } from 'react-icons/bs';
import s from './Contact.module.css';
import { useDispatch } from 'react-redux';
import Modal from 'react-modal';

import { MdOutlineEdit } from 'react-icons/md';
import {
  deleteContact,
  editContactThunk,
} from '../../../redux/contacts/operations';
import { useState } from 'react';
Modal.setAppElement('#root');
export default function Contact({ data: { id, name, number } }) {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contactToDelete, setContactToDelete] = useState(null);
  // Функція відкриття модального вікна
  const openModal = contactId => {
    setContactToDelete(contactId);
    setIsModalOpen(true);
  };
  // Функція закриття модального вікна
  const closeModal = () => {
    setIsModalOpen(false);
    setContactToDelete(null);
  };

  // Підтвердження видалення
  const confirmDelete = () => {
    if (contactToDelete) {
      dispatch(deleteContact(contactToDelete));
    }
    closeModal();
  };
  return (
    <div className={s.item}>
      <div className={s.wrap}>
        <p className={s.name}>
          <FaUserLarge type="span" className={s.icon} />
          {name}
        </p>
        <a href="tel:+" className={s.number}>
          <BsTelephoneFill type="span" className={s.icon} />
          {number}
        </a>
      </div>
      <div className={s.btnWrap}>
        <button type="button" className={s.btn} onClick={() => openModal(id)}>
          Delete
        </button>
        <button
          className={s.editBtn}
          type="button"
          onClick={() => {
            const newName = prompt('Enter new name: ', name);
            if (newName && newName !== name) {
              dispatch(
                editContactThunk({ id, updatedFields: { name: newName } })
              );
            }
          }}
        >
          <MdOutlineEdit />
          Edit
        </button>
      </div>
      {/* Модальне вікно */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className={s.modal}
        overlayClassName={s.overlay}
      >
        <h2>Confirm Delete</h2>
        <p>Are you sure you want to delete this contact?</p>
        <div className={s.modalButtons}>
          <button onClick={confirmDelete} className={s.confirmBtn}>
            Yes, Delete
          </button>
          <button onClick={closeModal} className={s.cancelBtn}>
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
}
