import PropTypes from 'prop-types';
import { ContactListItem } from 'components/molecules/ContactListItem/ContactListItem';
import styles from './ContactList.module.css';

export const ContactList = ({ contacts, onClick }) => {
  return (
    <ul className={styles.ContactList} onClick={onClick}>
      {contacts.map(contact => (
        <ContactListItem key={contact.id} item={contact} classes={styles} />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  onClick: PropTypes.func,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      phone: PropTypes.string,
    })
  ),
};
