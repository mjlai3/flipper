import React from 'react';
import InventoryCell from './InventoryCell';
import styled from 'styled-components';
import findIndex from 'lodash.findindex';

class Inventory extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      rows: 5,
      columns: 12
    };
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
          onCellClick={this.props.onCellClick}
          row={rowNumber}
          column={columnNumber}
          locked={this.isLockedCell(rowNumber, columnNumber)}
          stackSize={this.getCellStackSize(rowNumber, columnNumber)}
        />
      );
    }
    return column;
  }

  getCellStackSize(row, column) {
    const { stackSize, amount } = this.props;
    if (row * stackSize + (column - 1) * stackSize * 5 <= amount) {
      return stackSize;
    }
    if (row * stackSize + (column - 1) * stackSize * 5 - amount < stackSize) {
      return amount % stackSize;
    }
    return 0;
  }

  isLockedCell(row, column) {
    return (
      findIndex(this.props.lockedCells, {
        row: row,
        column: column
      }) > -1
    );
  }

  render() {
    return (
      <>
        <InventoryContainer style={{ display: 'flex' }}>
          {this.divideInventory()}
        </InventoryContainer>
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

export default Inventory;
