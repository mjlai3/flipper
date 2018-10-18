import React from 'react';
import InventoryCell from './InventoryCell';
import styled from 'styled-components';

class Inventory extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      rows: 5,
      columns: 12
    };
  }

  generatoeInventory() {
    return this.foo().map(item => <RowContainer>{item}</RowContainer>);
  }

  foo() {
    const bar = [];
    for (let i = 0; i < this.state.rows; i++) {
      bar.push(this.generateRow());
    }
    return bar;
  }

  generateRow() {
    const row = [];
    for (let i = 0; i < this.state.columns; i++) {
      row.push(<InventoryCell />);
    }
    return row;
  }

  render() {
    return <>{this.generatoeInventory()}</>;
  }
}

const RowContainer = styled.div`
  line-height: 0;
  margin-top: -1px;
`;

export default Inventory;
