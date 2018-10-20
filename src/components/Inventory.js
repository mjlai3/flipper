import React from 'react';
import InventoryCell from './InventoryCell';
import styled from 'styled-components';
import assign from 'lodash.assign';

class Inventory extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      rows: 5,
      columns: 12,
      stackSize: 10,
      number: 50,
      lockedCells: []
    };
  }

  onCellClick(row, column) {
    this.setState(
      (prevState, props) => {
        const newLockedCells = prevState.lockedCells.slice();
        newLockedCells.push({ row, column });
        return {
          lockedCells: newLockedCells
        };
      },
      () => console.log(this.state.lockedCells)
    );
  }

  divideInventory() {
    return this.generateInventory().map(item => (
      <ColumnContainer>{item}</ColumnContainer>
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
          onCellClick={(row, column) => this.onCellClick(row, column)}
          row={rowNumber}
          column={columnNumber}
        />
      );
    }
    return column;
  }

  generateColumn() {
    const column = [];
    for (let i = 0; i < this.state.rows; i++) {
      column.push(<InventoryCell />);
    }
    return column;
  }

  render() {
    return (
      <Container style={{ display: 'flex' }}>
        {this.divideInventory()}
      </Container>
    );
  }
}

const ColumnContainer = styled.div`
  & + & {
    margin-left: -1px;
  }
`;

const Container = styled.div`
  display: flex;
`;

export default Inventory;
