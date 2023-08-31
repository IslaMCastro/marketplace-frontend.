import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Rotas from './Routes';


function App() {
  return (
    <Router>
      <header className='App-header'>
        <Navbar />
        </header>
        <main>
          <div className='p-3 m-0 border-0 bd-example m-0 border-0'>
            <Rotas />
          </div>
        </main>
    </Router>
  );
}

export default App;
