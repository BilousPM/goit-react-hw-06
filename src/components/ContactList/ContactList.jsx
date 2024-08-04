import Contact from '../Contact/Contact';
import s from './ContactList.module.css';

import { useSelector } from 'react-redux';

// const ContactList = ({ data, handleDelete }) => {

const ContactList = () => {
  const data = useSelector(state => state.contact.contact);

  console.log(data);

  return (
    <div className={s.wrapper}>
      {data.map(contact => (
        <Contact key={contact.id} contact={contact} id={contact.id} />
      ))}
    </div>
  );
};

export default ContactList;
