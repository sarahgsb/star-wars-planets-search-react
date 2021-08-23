import React from 'react';
import './App.css';
import Datatable from './components/Datatable';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <Datatable />
    </PlanetsProvider>
  );
}

export default App;
