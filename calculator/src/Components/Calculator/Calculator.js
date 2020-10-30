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
