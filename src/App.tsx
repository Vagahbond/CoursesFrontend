import React from 'react';
import './App.css';
import Header from './header/Header';
import Router from './Routes';


function App() {
  return (
    <div>
      <Router>
        <Header />
      </Router>
    </div>

  );
}

export default App;
