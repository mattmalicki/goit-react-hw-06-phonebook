import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

import { ContactListItem } from 'components/molecules/ContactListItem/ContactListItem';

import styles from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(getContacts);

  return (
    <ul className={styles.ContactList}>
      {contacts.map(contact => (
        <ContactListItem key={contact.id} item={contact} classes={styles} />
      ))}
    </ul>
  );
};
