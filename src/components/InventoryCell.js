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
    height: ${size};
    width: ${size};
    border: 1px solid black;
    
    & + & {
      margin-top: -1px;
    }
`;

export default InventoryCell;
