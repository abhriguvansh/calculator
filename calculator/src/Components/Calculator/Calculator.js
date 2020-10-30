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
  onClick = (button) => {
    if (button === '=') {
      this.calculate();
    } else if (button === 'C') {
      this.reset();
    } else {
      this.setState({
        result: this.state.result + button,
      });
    }
  };
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
      <div className='calculator'>
        <Result result={this.state.result} />
        <InputKeys onClick={this.onClick} />
      </div>
    );
  }
}

export default Calculator;
