import { selectFiter, setFilterValue } from 'redux/filter';
import { FilterBox } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';

function Filter() {
  const filter = useSelector(selectFiter);
  const dispatch = useDispatch();

  const handleFilterChange = ({ target: { value } }) => {
    dispatch(setFilterValue(value.trim()));
  };

  return (
    <FilterBox>
      <input
        onChange={handleFilterChange}
        className="styled-input"
        value={filter}
        name={filter}
        placeholder="Find contacts by name"
      />
    </FilterBox>
  );
}

export default Filter;
