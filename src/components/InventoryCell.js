import React from 'react';
import styled from 'styled-components';

const InventoryCell = props => {
  const {
    stackSize,
    locked,
    onCellClick,
    cellNumber,
    selectedCurrency
  } = props;
  return (
    <Cell
      locked={locked}
      onClick={() => {
        onCellClick(cellNumber);
      }}
    >
      {stackSize ? (
        <>
          <CurrencyIcon src={`./images/${selectedCurrency}.png`} />
          <Number>{stackSize}</Number>
        </>
      ) : null}
    </Cell>
  );
};

const size = '2em';

const Cell = styled.div`
  height: ${size};
  width: ${size};
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: ${props => (props.locked ? '#eee' : '#fff')};
  cursor: default;

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
  left: 0.25em;
  font-size: 0.5em;
`;

const CurrencyIcon = styled.img`
  /* width: ${size}; */
  max-width: 100%;
  width: 90%;
`;

export default InventoryCell;
