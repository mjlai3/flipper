import React from 'react';
import styled from 'styled-components';

const InventoryCell = props => {
  const {
    stackSize,
    locked,
    onCellClick,
    cellNumber,
    selectedCurrency,
    inventoryCellSize
  } = props;
  return (
    <Cell
      locked={locked}
      onClick={() => {
        onCellClick(cellNumber);
      }}
      inventoryCellSize={inventoryCellSize}
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

const Cell = styled.div`
  height: ${props => props.inventoryCellSize}em;
  width: ${props => props.inventoryCellSize}em;
  border: 1px solid #644015;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: ${props =>
    props.locked
      ? 'repeating-linear-gradient(45deg, #606dbc, #606dbc 5px, #465298 5px, #465298 10px)'
      : '#080909'};
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
  top: 0;
  left: 0;
  font-size: 0.5em;
  color: #fff;
`;

const CurrencyIcon = styled.img`
  max-width: 100%;
  width: 90%;
`;

export default InventoryCell;
