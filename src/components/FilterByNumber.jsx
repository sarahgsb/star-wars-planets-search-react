import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function FilterByNumber() {
  const [select, setSelect] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const { filter, setFilter } = useContext(PlanetsContext);
  const [comparison, handleComparison] = useState('maior que');
  const [column, handleColumn] = useState('population');
  const [value, handleValue] = useState('');

  const handleClick = () => {
    setFilter(
      { ...filter,
        filterByNumericValues: [{
          column,
          comparison,
          value,
        }] },
    );
    const columns = select.filter((item) => item !== column);
    setSelect([...columns]);
  };

  return (
    <div className="form">
      <label htmlFor="column-filter">
        Filter by column:
        <select
          data-testid="column-filter"
          onChange={ (event) => handleColumn(event.target.value) }
        >
          {select.map((option, index) => (
            <option key={ index } value={ option }>{ option }</option>
          ))}
        </select>
      </label>
      <label htmlFor="comparison-filter">
        Filter by number:
        <select
          data-testid="comparison-filter"
          onChange={ (event) => handleComparison(event.target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <input
        type="number"
        data-testid="value-filter"
        onChange={ (event) => handleValue(event.target.value) }
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
