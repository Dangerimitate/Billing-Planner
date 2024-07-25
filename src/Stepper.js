import React, { useContext } from 'react';

import { BudgetContext } from './BudgetContext';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';

const Stepper = () => {
  const { currentStep } = useContext(BudgetContext);

  switch (currentStep) {
    case 1:
      return <Step1 />;
    case 2:
      return <Step2 />;
    case 3:
      return <Step3 />;
    case 4:
      return <Step4 />;
    default:
      return <Step1 />;
  }
};

export default Stepper;
