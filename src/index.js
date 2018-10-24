import React from 'react';
import ReactDOM from 'react-dom';
import Inventory from './components/Inventory';
import Currency from './constants/Currency';
import styled from 'styled-components';
import findIndex from 'lodash.findindex';

class App extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      stackSize: 10,
      amount: 75,
      lockedCells: []
    };
  }

  onCellClick(row, column) {
    this.setState(
      (prevState, props) => {
        const newLockedCells = prevState.lockedCells.slice();
        const lockedCellIndex = findIndex(prevState.lockedCells, {
          row: row,
          column: column
        });

        if (lockedCellIndex > -1) {
          newLockedCells.splice(lockedCellIndex, 1);
        } else {
          newLockedCells.push({ row, column });
        }

        return {
          lockedCells: newLockedCells
        };
      },
      () => console.log(this.state.lockedCells)
    );
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
          onCellClick={(row, column) => this.onCellClick(row, column)}
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

const AmountInput = styled.input`
  
`;

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
