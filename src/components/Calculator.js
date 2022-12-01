/* eslint-disable react/prop-types */
/* eslint-disable no-plusplus */
/* eslint-disable no-loop-func */
/* eslint-disable spaced-comment */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/button-has-type */
import { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  createDigits = () => {
    // eslint-disable-next-line react/prop-types
    const { makeCalculation } = this.props;
    const digits = [];
    for (let i = 9; i > 0; i--) {
      digits.push(
        <button key={i} onClick={() => makeCalculation(`${i}`)}>
          {i}
        </button>,
      );
    }
    return digits;
  };

  createOutput = () => {
    const { output } = this.props;
    let expression = output.total || 0;
    if (!output.total && output.next) expression = '';
    const expression3 = output.next || '';
    const expression2 = output.operation || '';
    return expression + expression2 + expression3;
  }

  render() {
    const oparations = ['÷', 'x', '-', '+', '='];
    const { makeCalculation } = this.props;

    return (
      <div className="calculator">
        <div className="display">
          <span>{this.createOutput()}</span>
        </div>
        <div className="digitContainer">
          <div className="digits">
            <button onClick={() => makeCalculation('%')}>%</button>
            <button onClick={() => makeCalculation('+/-')}>+/-</button>
            <button onClick={() => makeCalculation('AC')}>AC</button>
            {this.createDigits()}
            <button onClick={() => makeCalculation('.')}>.</button>
            <button onClick={() => makeCalculation('0')}>0</button>
          </div>
          <div className="operators">
            {oparations.map((item) => (
              <button
                key={oparations.indexOf(item)}
                onClick={() => makeCalculation(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
