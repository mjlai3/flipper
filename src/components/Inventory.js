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
      if (amount - stackSize > 0) {
        inventory.push(
          <InventoryCell
            key={cellNumber}
            cellNumber={cellNumber}
            onCellClick={this.props.onCellClick}
            stackSize={stackSize}
          />
        );
        amount = amount - stackSize;
      } else if (amount > 0) {
        inventory.push(
          <InventoryCell
            key={cellNumber}
            cellNumber={cellNumber}
            onCellClick={this.props.onCellClick}
            stackSize={amount}
          />
        );
        amount = amount - stackSize;
      } else {
        inventory.push(
          <InventoryCell
            key={cellNumber}
            cellNumber={cellNumber}
            onCellClick={this.props.onCellClick}
            stackSize={0}
          />
        );
      }
    }
    return inventory;
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
