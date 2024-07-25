import './App.css';

import React from 'react';

import BudgetProvider from './BudgetContext';
import Stepper from './Stepper';

const App = () => {
  return (
    <BudgetProvider>
      <div className="app">
        <h1>Multi-Step Budget Planner</h1>
        <Stepper />
      </div>
    </BudgetProvider>
  );
};

export default App;
