import { useDispatch } from 'react-redux';
import s from './SearchBox.module.css';
import { search } from '../../redux/filters/slice';

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(search(e.target.value));
  };

  return (
    <div>
      <label className={s.label}>
        <span>Find contact by name:</span>
        <input
          onChange={e => {
            handleChange(e);
          }}
          type="text"
          name="search"
          className={s.input}
        ></input>
      </label>
    </div>
  );
};

export default SearchBox;
