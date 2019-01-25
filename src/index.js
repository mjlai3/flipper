import React from 'react';
import ReactDOM from 'react-dom';
import Inventory from './components/Inventory';
import Currency from './constants/Currency';
import styled from 'styled-components';
import lodash from 'lodash';
import { Select, InputNumber } from 'antd';
import 'antd/dist/antd.css';

const Option = Select.Option;

class App extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      amount: 75,
      selectedCurrency: 'CurrencyRhoaFeather',
      lockedCells: []
    };
  }

  onCellClick(cellNumber) {
    let index = lodash.indexOf(this.state.lockedCells, cellNumber);
    let newLockedCells = lodash.clone(this.state.lockedCells);

    if (index > -1) {
      newLockedCells.splice(index, 1);
    } else {
      newLockedCells.push(cellNumber);
    }
    this.setState({
      lockedCells: newLockedCells
    });
  }

  onAmountChange(value) {
    this.setState({
      amount: value
    });
  }

  generateSelectOptions() {
    return lodash.map(Currency, (currency, key) => {
      return (
        <Option key={key} value={key}>
          {currency.name}
        </Option>
      );
    });
  }

  getStackSize() {
    return Currency[this.state.selectedCurrency].stackSize;
  }

  handleChange(value) {
    this.setState({ selectedCurrency: value });
  }

  render() {
    const { amount, lockedCells } = this.state;

    return (
      <>
        <Inventory
          stackSize={this.getStackSize()}
          amount={amount}
          lockedCells={lockedCells}
          onCellClick={cellNumber => this.onCellClick(cellNumber)}
        />
        <AmountInput
          defaultValue={this.state.amount}
          onChange={event => this.onAmountChange(event)}
        />
        <Select
          showSearch
          value={this.state.selectedCurrency}
          style={{ width: 200 }}
          placeholder="Select currency"
          optionFilterProp="children"
          onChange={value => this.handleChange(value)}
          filterOption={(input, option) =>
            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >=
            0
          }
        >
          {this.generateSelectOptions()}
        </Select>
      </>
    );
  }
}

const AmountInput = styled(InputNumber)``;

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
