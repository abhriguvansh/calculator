import React, { Component } from 'react';
import Result from '../Result/Result';
import InputKeys from '../InputKeys/InputKeys';
import './Calculator.css';

class Calculator extends Component {
  constructor() {
    super();

    this.state = {
      result: '',
    };
  }
  calculate() {
    try {
      this.setState({
        // eslint-disable-next-line
        result: (eval(this.state.result) || '') + '',
      });
    } catch (e) {
      this.setState({
        result: 'error',
      });
    }
  }
  onClick(button) {
    if (button === '=') {
      this.calculate();
    } else if (button === 'C') {
      this.reset();
    } else if (button === 'CE') {
      this.backspace();
    } else {
      this.setState({
        result: this.state.result + button,
      });
    }
  }
  reset() {
    this.setState({
      result: '',
    });
  }

  backspace() {
    this.setState({
      result: this.state.result.slice(0, -1),
    });
  }
  render() {
    return (
      <div>
        <div className='calculator-body'>
          <h1>Simple Calculator</h1>
          <ResultComponent result={this.state.result} />
          <KeyPadComponent onClick={this.onClick} />
        </div>
      </div>
    );
  }
}

export default Calculator;
