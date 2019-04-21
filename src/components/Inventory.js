import React from 'react';
import InventoryCell from './InventoryCell';
import styled from 'styled-components';
import lodash from 'lodash';

class Inventory extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      inventorySize: 60
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
    return (
      <>
        <InventoryContainer>{this.generateInventory()}</InventoryContainer>
      </>
    );
  }
}

const InventoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-height: 11em;
  justify-content: flex-start;
  align-content: flex-start;
  margin: 1em 0;
`;

export default Inventory;
