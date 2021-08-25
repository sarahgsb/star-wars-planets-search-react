import React, { useContext, useEffect, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import FilterByName from './FilterByName';
import FilterByNumber from './FilterByNumber';

function Datatable() {
  const { planets, filter } = useContext(PlanetsContext);
  const [filterPlanets, setFilterPlanets] = useState([]);
  const { filter: { filterByNumericValues } } = useContext(PlanetsContext);
  const { name } = filter.filterByName;

  useEffect(() => {
    const searchPlanets = () => {
      if (filterByNumericValues[0]) {
        const { column, comparison, value } = filterByNumericValues[0];
        switch (comparison) {
        case 'menor que':
          return planets.filter((planet) => planet.name.toLowerCase()
            .includes(name)
            && parseInt(planet[column], 0) < parseInt(value, 0));
        case 'maior que':
          return planets.filter((planet) => planet.name.toLowerCase()
            .includes(name)
            && parseInt(planet[column], 0) > parseInt(value, 0));

        case 'igual a':
          return planets.filter(
            (planet) => planet.name.toLowerCase()
              .includes(name)
            && parseInt(planet[column], 0) === parseInt(value, 0),
          );
        default:
        }
      }
      return planets.filter(
        (planet) => planet.name.toLowerCase().includes(name),
      );
    };
    setFilterPlanets(searchPlanets());
  }, [planets, filterByNumericValues, name]);

  return (
    <>
      <h1>Star Wars Planets Database</h1>
      <FilterByName />
      <FilterByNumber />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          {filterPlanets.map((planet, index) => (
            <tr key={ index }>
              <td>{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Datatable;
