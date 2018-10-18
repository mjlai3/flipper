import React from 'react';
import styled from 'styled-components';

class InventoryCell extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      locked: false
    };
  }

  render() {
    return <Cell />;
  }
}

const size = '2em';

const Cell = styled.div`
    display: inline-block;
    height: ${size};
    width: ${size};
    border: 1px solid black;

    & + & {
        border-left: 0;
    }
`;

export default InventoryCell;
