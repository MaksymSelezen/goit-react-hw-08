import PropTypes from 'prop-types';
import { BsPhone, BsPerson, BsTrash } from 'react-icons/bs';
import css from './Contact.module.css';

const Contact = ({ contact, onDelete }) => {
  return (
    <div className={css.contactContainer}>
      <ul className={css.contactDetailsList}>
        <li className={css.contactName}>
          <BsPerson className={css.contactIcon} size="18" />
          {contact.name}
        </li>
        <li className={css.contactNumber}>
          <BsPhone className={css.contactIcon} size="18" />
          {contact.number}
        </li>
      </ul>
      <button className={css.contactDeleteBtn} type="button" onClick={onDelete}>
        <BsTrash className={css.deleteBtnIcon} size="15" />
        Delete
      </button>
    </div>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contact;
