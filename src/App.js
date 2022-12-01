import { Component } from 'react';
import './App.css';
import Calculator from './components/Calculator';
import calculate from './logic/calculate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  makeCalculation = (buttonName) => {
    const obj = this.state;
    const output = calculate(obj, buttonName);
    this.setState(output);
  };

  render() {
    return (
      <div className="App">
        <Calculator
          makeCalculation={this.makeCalculation}
          output={this.state}
        />
      </div>
    );
  }
}

export default App;
