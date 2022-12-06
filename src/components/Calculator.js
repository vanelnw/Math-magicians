import PropTypes from 'prop-types';
import './Calculator.css';

const Calculator = (props) => {
  const { makeCalculation, output } = props;

  const createDigits = () => {
    const digits = [];
    for (let i = 9; i > 0; i -= 1) {
      digits.push(
        <button type="button" key={i} onClick={makeCalculation}>
          <span>{i}</span>
        </button>,
      );
    }
    return digits;
  };

  const createOutput = () => {
    let expression = output.total || 0;
    if (!output.total && output.next) expression = '';
    const expression3 = output.next || '';
    const expression2 = output.operation || '';
    return expression + expression2 + expression3;
  };

  const oparations = ['÷', 'x', '-', '+', '='];

  return (
    <div className="calCalculator">
      <div className="calculator">
        <div className="display">
          <span>{createOutput()}</span>
        </div>
        <div className="digitContainer">
          <div className="digits">
            <button type="button" onClick={makeCalculation}>
              <span>%</span>
            </button>
            <button type="button" onClick={makeCalculation}>
              <span>+/-</span>
            </button>
            <button type="button" onClick={makeCalculation}>
              <span>AC</span>
            </button>
            {createDigits()}
            <button type="button" onClick={makeCalculation}>
              <span>.</span>
            </button>
            <button type="button" onClick={makeCalculation}>
              <span>0</span>
            </button>
          </div>
          <div className="operators">
            {oparations.map((item) => (
              <button
                type="button"
                key={oparations.indexOf(item)}
                onClick={makeCalculation}
              >
                <span>{item}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

Calculator.propTypes = {
  makeCalculation: PropTypes.func.isRequired,
  output: PropTypes.shape({
    total: PropTypes.string,
    next: PropTypes.string,
    operation: PropTypes.string,
  }).isRequired,
};

export default Calculator;
