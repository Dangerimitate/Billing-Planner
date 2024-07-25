import React, { useContext } from 'react';

import { BudgetContext } from './BudgetContext';

const Step4 = () => {
  const { userInfo, income, expenses, setCurrentStep } = useContext(BudgetContext);

  const saveData = () => {
    localStorage.setItem('budgetData', JSON.stringify({ userInfo, income, expenses }));
    alert('Budget data saved successfully!');
  };

  return (
    <div>
      <h2>Step 4: Review and Save</h2>
      <h3>User Information</h3>
      <p>Name: {userInfo.name}</p>
      <p>Email: {userInfo.email}</p>
      <p>Preferred Currency: {userInfo.preferredCurrency}</p>
      <h3>Income and Expenses</h3>
      <p>Monthly Income: {income}</p>
      <h4>Expenses:</h4>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>{expense.name}: {expense.amount}</li>
        ))}
      </ul>
      <button onClick={() => setCurrentStep(3)}>Back</button>
      <button onClick={saveData}>Save</button>
    </div>
  );
};

export default Step4;
