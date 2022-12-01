import { useState } from 'react';
import './App.css';
import Calculator from './components/Calculator';
import calculate from './logic/calculate';

const App = () => {
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
    <div className="App">
      <Calculator makeCalculation={makeCalculation} output={state} />
    </div>
  );
};

export default App;
