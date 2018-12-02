import React from 'react';
import styled from 'styled-components';

class InventoryCell extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      locked: false
    };
  }

  generateNumber() {
    const { stackSize } = this.props;
    if (stackSize) {
      return <Number>{stackSize}</Number>;
    }
  }

  render() {
    return (
      <Cell onClick={() => this.props.onCellClick(this.props.cellNumber)}>
        {this.generateNumber()}
      </Cell>
    );
  }
}

const size = '2em';

const Cell = styled.div`
  height: ${size};
  width: ${size};
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:nth-child(n + 6) {
    margin-left: -1px;
  }

  &:not(:nth-child(5n + 1)) {
    margin-top: -1px;
  }
`;

const Number = styled.span`
  position: absolute;
  top: 0.25em;
  right: 0.25em;
`;

export default InventoryCell;
