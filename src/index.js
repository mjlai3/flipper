import React from 'react';
import ReactDOM from 'react-dom';
import Inventory from './components/Inventory';

class App extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      stackSize: 10,
      amount: 75,
      lockedCells: []
    };
  }

  render() {
    const { stackSize, amount, lockedCells } = this.state;

    return (
      <>
        <Inventory
          stackSize={stackSize}
          amount={amount}
          lockedCells={lockedCells}
        />
      </>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
