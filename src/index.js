import React from 'react';
import ReactDOM from 'react-dom';
import Inventory from './components/Inventory';
import Currency from './constants/Currency';
import styled from 'styled-components';
import lodash from 'lodash';

class App extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      stackSize: 10,
      amount: 75,
      lockedCells: []
    };
  }

  onCellClick(cellNumber) {
    let index = lodash.indexOf(this.state.lockedCells, cellNumber);
    let newLockedCells = this.state.lockedCells;

    if (index > -1) {
      newLockedCells.splice(index, 1);
    } else {
      newLockedCells.push(cellNumber);
    }
    this.setState({
      lockedCells: newLockedCells
    });
    console.log(this.state.lockedCells);
  }

  onAmountChange(event) {
    this.setState(
      {
        amount: event.target.value
      },
      () => console.log('amount: ' + this.state.amount)
    );
  }

  render() {
    const { stackSize, amount, lockedCells } = this.state;

    return (
      <>
        <Inventory
          stackSize={stackSize}
          amount={amount}
          lockedCells={lockedCells}
          onCellClick={cellNumber => this.onCellClick(cellNumber)}
        />
        <AmountInput
          type="number"
          value={this.state.amount}
          onChange={event => this.onAmountChange(event)}
        />
      </>
    );
  }
}

const AmountInput = styled.input``;

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
