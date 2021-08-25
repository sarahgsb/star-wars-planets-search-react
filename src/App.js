import React from 'react';
import './App.css';
import PlanetsProvider from './context/PlanetsProvider';
import Datatable from './components/Datatable';

function App() {
  return (
    <PlanetsProvider>
      <Datatable />
    </PlanetsProvider>
  );
}

export default App;
