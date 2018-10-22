import React from 'react';
import ReactDOM from 'react-dom';
import Inventory from './components/Inventory';

function App() {
  return (
    <div>
      <Inventory />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
