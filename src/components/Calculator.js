/* eslint-disable react/button-has-type */
import { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {};
  }

    createDigits = () => {
      const digits = [];
      let iterate = 9;
      while (iterate > 0) {
        digits.push(<button>{iterate}</button>);
        iterate -= 1;
      }
      return digits;
    }

    render() {
      return (
        <div className="calculator">
          <div className="display">
            <span>0</span>
          </div>
          <div className="digitContainer">
            <div className="digits">
              <button>%</button>
              <button>+/-</button>
              <button>AC</button>
              {this.createDigits()}
              <button>.</button>
              <button>0</button>
            </div>
            <div className="operators">
              <button>÷</button>
              <button>x</button>
              <button>-</button>
              <button>+</button>
              <button>=</button>
            </div>
          </div>
        </div>
      );
    }
}

export default Calculator;
