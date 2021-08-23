import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import getPlanetsDatabase from '../services/getPlanetsDatabase';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const getAPI = async () => {
      const api = await getPlanetsDatabase();
      setPlanets(api);
    };
    getAPI();
  }, []);

  return (
    <PlanetsContext.Provider value={ { planets } }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
