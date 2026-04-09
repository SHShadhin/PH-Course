import React, { use } from 'react';
import { MoneyContext } from './FamilyTree';

const Sister = () => {
  const [money, setMoney] = use(MoneyContext)
  const handleAddMoney = () => {
    setMoney(money + 500)
  }
  return (
    <div>
      <h3>Sister</h3>
      <button onClick={handleAddMoney}>Add Money 500+</button>
    </div>
  );
};

export default Sister;