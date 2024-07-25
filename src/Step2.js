import React, {
  useContext,
  useState,
} from 'react';

import { BudgetContext } from './BudgetContext';

const Step2 = () => {
  const { income, setIncome, expenses, setExpenses, setCurrentStep } = useContext(BudgetContext);
  const [expense, setExpense] = useState({ name: '', amount: '' });

  const handleChange = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const addExpense = () => {
    setExpenses([...expenses, { ...expense, amount: parseFloat(expense.amount) }]);
    setExpense({ name: '', amount: '' });
  };

  const removeExpense = (index) => {
    setExpenses(expenses.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Step 2: Income and Expenses</h2>
      <label>
        Monthly Income:
        <input type="number" value={income} onChange={(e) => setIncome(parseFloat(e.target.value))} />
      </label>
      <h3>Expenses</h3>
      <div>
        {expenses.map((expense, index) => (
          <div key={index}>
            {expense.name}: {expense.amount}
            <button onClick={() => removeExpense(index)}>Remove</button>
          </div>
        ))}
      </div>
      <label>
        Expense Name:
        <input type="text" name="name" value={expense.name} onChange={handleChange} />
      </label>
      <label>
        Expense Amount:
        <input type="number" name="amount" value={expense.amount} onChange={handleChange} />
      </label>
      <button onClick={addExpense}>Add Expense</button>
      <br />
      <button onClick={() => setCurrentStep(1)}>Back</button>
      <button onClick={() => setCurrentStep(3)}>Next</button>
    </div>
  );
};

export default Step2;
