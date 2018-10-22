import React from 'react';
import InventoryCell from './InventoryCell';
import styled from 'styled-components';
import find from 'lodash.find';
import findIndex from 'lodash.findindex';

class Inventory extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      rows: 5,
      columns: 12,
      stackSize: 10,
      amount: 0,
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

  divideInventory() {
    return this.generateInventory().map((item, index) => (
      <ColumnContainer key={index}>{item}</ColumnContainer>
    ));
  }

  generateInventory() {
    const inventory = [];
    for (
      let columnNumber = 1;
      columnNumber <= this.state.columns;
      columnNumber++
    ) {
      inventory.push(this.generateColumn(columnNumber));
    }
    return inventory;
  }

  generateColumn(columnNumber) {
    const column = [];
    for (let rowNumber = 1; rowNumber <= this.state.rows; rowNumber++) {
      column.push(
        <InventoryCell
          key={`${rowNumber}-${columnNumber}`}
          onCellClick={(row, column) => this.onCellClick(row, column)}
          row={rowNumber}
          column={columnNumber}
        />
      );
    }
    return column;
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
    return (
      <>
        <InventoryContainer style={{ display: 'flex' }}>
          {this.divideInventory()}
        </InventoryContainer>
        <AmountInput
          type="number"
          value={this.state.amount}
          onChange={event => this.onAmountChange(event)}
        />
      </>
    );
  }
}

const ColumnContainer = styled.div`
  & + & {
    margin-left: -1px;
  }
`;

const InventoryContainer = styled.div`
  display: flex;
`;

const AmountInput = styled.input`
  
`;

export default Inventory;
