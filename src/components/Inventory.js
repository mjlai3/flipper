import React from 'react';
import InventoryCell from './InventoryCell';
import styled from 'styled-components';

class Inventory extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      rows: 5,
      columns: 12,
      stackSize: 10,
      number: 50
    };
  }

  divideInventory() {
    return this.generateInventory().map(item => (
      <ColumnContainer>{item}</ColumnContainer>
    ));
  }

  generateInventory() {
    const bar = [];
    for (let i = 0; i < this.state.columns; i++) {
      bar.push(this.generateColumn());
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
