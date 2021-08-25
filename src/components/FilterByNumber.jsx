import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function FilterByNumber() {
  const { comparison, setComparison } = useContext(PlanetsContext);
  const [state, setState] = useState({
    column: '',
    comparison: '',
    value: '',
  });

  const handleClick = () => {
    setComparison({
      ...comparison,
      filterByNumericValues: [
        ...comparison.filterByNumericValues,
        state,
      ],
    });
  };

  const handleChange = ({ target }) => {
    setState({
      ...state,
      [target.name]: target.value,
    });
  };

  return (
    <div>
      <label htmlFor="column-filter">
        Filter by column:
        <select
          data-testid="column-filter"
          name="column"
          onChange={ handleChange }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>

      <label htmlFor="comparison-filter">
        Filter by number:
        <select
          data-testid="comparison-filter"
          name="comparison"
          onChange={ handleChange }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <input
        type="number"
        data-testid="value-filter"
        name="value"
        onChange={ handleChange }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filter
      </button>
    </div>
  );
}

export default FilterByNumber;
