import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import getPlanetsDatabase from '../services/getPlanetsDatabase';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filter, setFilter] = useState({ filterByName: { name: '' } });

  useEffect(() => {
    const getAPI = async () => {
      const api = await getPlanetsDatabase();
      setPlanets(api);
    };
    getAPI();
  }, []);

  return (
    <PlanetsContext.Provider value={ { planets, setPlanets, filter, setFilter } }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
