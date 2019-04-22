import React from 'react';
import InventoryCell from './InventoryCell';
import styled from 'styled-components';
import lodash from 'lodash';

class Inventory extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      inventorySize: 60,
      inventoryHeight: 11,
      inventoryCellSize: 2
    };
  }

  generateInventory() {
    let inventory = [];
    let amount = this.props.amount;
    let stackSize = this.props.stackSize;
    for (
      let cellNumber = 1;
      cellNumber < this.state.inventorySize + 1;
      cellNumber++
    ) {
      inventory.push(
        <InventoryCell
          key={cellNumber}
          cellNumber={cellNumber}
          onCellClick={cellNumber => this.props.onCellClick(cellNumber)}
          locked={this.isLocked(cellNumber)}
          stackSize={this.getCellStackSize(amount, stackSize, cellNumber)}
          selectedCurrency={this.props.selectedCurrency}
          inventoryCellSize={this.state.inventoryCellSize}
        />
      );
      if (
        (amount - stackSize > 0 || amount > 0) &&
        !this.isLocked(cellNumber)
      ) {
        amount -= stackSize;
      }
    }
    return inventory;
  }

  isLocked(cellNumber) {
    return lodash.includes(this.props.lockedCells, cellNumber);
  }

  getCellStackSize(amount, stackSize, cellNumber) {
    if (this.isLocked(cellNumber)) {
      return 0;
    }
    if (amount - stackSize > 0) {
      return stackSize;
    }
    if (amount > 0) {
      return amount;
    }
    return 0;
  }

  render() {
    const { inventoryCellSize, inventoryHeight } = this.state;
    return (
      <Container>
        <InventoryContainer
          inventoryCellSize={inventoryCellSize}
          inventoryHeight={inventoryHeight}
        >
          {this.generateInventory()}
        </InventoryContainer>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25em 1em;
  border-radius: 3px;
  margin: 0 0 1em 0;
  background: #080909;
  background: #eee;
`;

const InventoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-height: ${props => props.inventoryHeight}em;
  justify-content: flex-start;
  align-content: flex-start;
  margin: 1em 0;
  width: ${props => props.inventoryCellSize * 12}em;
`;

export default Inventory;
