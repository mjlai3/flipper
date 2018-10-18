import React from 'react';
import ReactDOM from 'react-dom';
import Inventory from './components/Inventory';

import './styles.css';

function App() {
  return (
    <div className="App">
      <Inventory />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
