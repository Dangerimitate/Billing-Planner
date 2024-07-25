import React, { useContext } from 'react';

import { BudgetContext } from './BudgetContext';

const Step3 = () => {
  const { userInfo, income, expenses, exchangeRates, setCurrentStep } = useContext(BudgetContext);
  
  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
  const remainingBudget = income - totalExpenses;
  const convertedBudget = remainingBudget * (exchangeRates[userInfo.preferredCurrency] || 1);

  return (
    <div>
      <h2>Step 3: Budget Summary</h2>
      <p>Total Income: {income}</p>
      <p>Total Expenses: {totalExpenses}</p>
      <p>Remaining Budget: {remainingBudget}</p>
      <p>Converted Budget ({userInfo.preferredCurrency}): {convertedBudget.toFixed(2)}</p>
      <br />
      <button onClick={() => setCurrentStep(2)}>Back</button>
      <button onClick={() => setCurrentStep(4)}>Next</button>
    </div>
  );
};

export default Step3;
