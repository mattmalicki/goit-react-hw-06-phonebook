import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

import { Header } from 'components/atoms/Header/Header';
import { Filter } from 'components/molecules/Filter/Filter';
import { ContactForm } from 'components/organisms/ContactForm/ContactForm';
import { ContactList } from 'components/organisms/ContactList/ContactList';

import styles from './App.module.css';

export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <div className={styles.appContainer}>
      <Header level={2} className={styles.appHeader}>
        Phonebook
      </Header>
      <ContactForm />
      <Header level={2} className={styles.appHeader}>
        Contacts
      </Header>
      {contacts.length > 0 && <Filter />}
      <ContactList />
    </div>
  );
};
