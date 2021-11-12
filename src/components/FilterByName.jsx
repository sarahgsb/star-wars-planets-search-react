import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function FilterByName() {
  const { filter, setFilter } = useContext(PlanetsContext);
  const { filterByName: { name } } = filter;

  const handleChange = ({ target: { value } }) => {
    setFilter({ ...filter, filterByName: { name: value } });
  };

  return (
    <div className="form-center">
      <label htmlFor="name-filter">
        Search planet:
        <input
          type="text"
          value={ name }
          data-testid="name-filter"
          placeholder="search here"
          onChange={ handleChange }
        />
      </label>
    </div>
  );
}
export default FilterByName;
