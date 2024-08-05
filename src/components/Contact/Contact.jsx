import { FaRegUser, FaPhone } from 'react-icons/fa';

// import { deletion } from '../../redux/contacts/actions';

import s from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deletion } from '../../redux/contacts/slice';

const Contact = ({ contact, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deletion(id));
  };

  return (
    <div className={s.wrapper}>
      <div>
        <p>
          <FaRegUser className={s.icon} />
          {contact.name}
        </p>
        <p>
          <FaPhone className={s.icon} />
          {contact.number}
        </p>
      </div>
      <button onClick={() => handleDelete()} type="button" className={s.button}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
