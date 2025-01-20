import { useDispatch, useSelector } from 'react-redux';
import s from './SearchBox.module.css';
import { changeFilter, selectFilters } from '../../redux/filtersSlice';
export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilters);

  const handleInputChange = e => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <>
      <label className={s.label}>
        <span>Find contacts by name</span>
        <input
          type="text"
          className={s.input}
          value={filter}
          onChange={handleInputChange}
        />
      </label>
    </>
  );
}
