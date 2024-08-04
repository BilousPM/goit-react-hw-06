import Contact from '../Contact/Contact';
import s from './ContactList.module.css';

import { useSelector } from 'react-redux';

const ContactList = () => {
  const data = useSelector(state => state.contact.contact);
  const filterName = useSelector(state => state.filter.searchName);

  const filtredContact = data.filter(contact =>
    contact.name.toLowerCase().includes(filterName.toLowerCase()),
  );

  return (
    <div className={s.wrapper}>
      {filtredContact.map(contact => (
        <Contact key={contact.id} contact={contact} id={contact.id} />
      ))}
    </div>
  );
};

export default ContactList;
