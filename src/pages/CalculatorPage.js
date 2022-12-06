import { useState } from 'react';
import calculate from '../logic/calculate';
import Calculator from '../components/Calculator';

const CalculatorPage = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    oparation: null,
  });

  const makeCalculation = (e) => {
    const obj = state;
    const output = calculate(obj, e.target.innerText);
    setState(output);
  };

  return (
    <div className="calContainer">
      <div className="calTitle">
        <h2>Let&apos;s do some Math</h2>
      </div>
      <div className="calCalculate">
        <Calculator makeCalculation={makeCalculation} output={state} />
      </div>
    </div>
  );
};

export default CalculatorPage;
