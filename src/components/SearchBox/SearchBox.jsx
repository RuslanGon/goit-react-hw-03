import css from './SearchBox.module.css';
import { useId } from 'react';

const SearchBox = ({ value, OnFilterChange }) => {
  const searchFieldId = useId();

  return (
    <div className={css.searchForm}>
      <label htmlFor={searchFieldId}>Find contacts by name</label>
      <input
        type="text"
        name="searchField"
        id={searchFieldId}
        value={value}
        onChange={e => OnFilterChange(e.target.value)}
      ></input>
    </div>
  );
};
export default SearchBox;