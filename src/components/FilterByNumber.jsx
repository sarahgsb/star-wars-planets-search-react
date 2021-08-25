import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function FilterByNumber() {
  const { comparison, setComparison } = useContext(PlanetsContext);
  return (
    <div>
      <label htmlFor="column-filter">
        Filter by column:
        <select data-testid="column-filter">
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>

      <label htmlFor="comparison-filter">
        Filter by number:
        <select data-testid="comparison-filter">
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <input type="number" data-testid="value-filter" />
      <button
        type="button"
        data-testid="button-filter"
        // onClick={ handleClick }
      >
        Filter
      </button>
    </div>
  );
}

export default FilterByNumber;
