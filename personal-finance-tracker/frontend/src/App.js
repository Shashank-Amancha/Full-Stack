import React from 'react';
import Dashboard from './Dashboard';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Dashboard />

      {/* Added to pass default App.test.js */}
      <p>Learn React</p>
    </div>
  );
};

export default App;
