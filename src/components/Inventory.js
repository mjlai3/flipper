import React from 'react';
import InventoryCell from './InventoryCell';

class Inventory extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      rows: 5,
      columns: 12
    };
  }

  generateColumns() {
    const row = [];
    for (let i = 0; i < this.state.columns; i++) {
      row.push(<InventoryCell />);
    }
    return row;
  }

  render() {
    return <>{this.generateColumns()}</>;
  }
}

export default Inventory;
