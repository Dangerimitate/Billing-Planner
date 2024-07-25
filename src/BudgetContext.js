import React, {
  createContext,
  useEffect,
  useState,
} from 'react';

export const BudgetContext = createContext();

const BudgetProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    preferredCurrency: 'USD'
  });
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [exchangeRates, setExchangeRates] = useState({});
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('budgetData'));
    if (savedData) {
      setUserInfo(savedData.userInfo);
      setIncome(savedData.income);
      setExpenses(savedData.expenses);
      setCurrentStep(savedData.currentStep);
    }
  }, []);

  useEffect(() => {
    const fetchRates = async () => {
      const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
      const data = await response.json();
      setExchangeRates(data.rates);
    };
    fetchRates();
  }, []);

  useEffect(() => {
    localStorage.setItem('budgetData', JSON.stringify({ userInfo, income, expenses, currentStep }));
  }, [userInfo, income, expenses, currentStep]);

  return (
    <BudgetContext.Provider value={{ userInfo, setUserInfo, income, setIncome, expenses, setExpenses, exchangeRates, currentStep, setCurrentStep }}>
      {children}
    </BudgetContext.Provider>
  );
};

export default BudgetProvider;
