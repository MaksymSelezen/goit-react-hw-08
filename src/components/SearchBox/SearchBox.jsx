import PropTypes from 'prop-types';
import css from './SearchBox.module.css';

const SearchBox = ({ value, onChange }) => {
  return (
    <div className={css.searchBoxContainer}>
      <label className={css.searchBoxLabel}>
        Find contacts by name
        <input
          className={css.searchBoxInput}
          type="text"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBox;
