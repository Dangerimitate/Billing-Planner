import React, { useContext } from 'react';

import { BudgetContext } from './BudgetContext';

const Step1 = () => {
  const { userInfo, setUserInfo, setCurrentStep } = useContext(BudgetContext);

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Step 1: User Information</h2>
      <label>
        Name:
        <input type="text" name="name" value={userInfo.name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" value={userInfo.email} onChange={handleChange} />
      </label>
      <br />
      <label>
        Preferred Currency:
        <select name="preferredCurrency" value={userInfo.preferredCurrency} onChange={handleChange}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="INR">INR</option>
          {/* Add more currencies as needed */}
        </select>
      </label>
      <br />
      <button onClick={() => setCurrentStep(2)}>Next</button>
    </div>
  );
};

export default Step1;
