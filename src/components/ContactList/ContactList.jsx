import { selectContact } from '../../redux/contacts/selectors';
import { selectSearchValue } from '../../redux/filters/selectors';
import Contact from '../Contact/Contact';
import s from './ContactList.module.css';

import { useSelector } from 'react-redux';

const ContactList = () => {
  const data = useSelector(selectContact);
  const filterName = useSelector(selectSearchValue);

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
