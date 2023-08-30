import './App.css';
import Home from './components/Home'
import Navbar from './components/navbar/Navbar';
import Tipo from './components/Tipo/Tipo'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <main>
      </main>
        <Home/>
        <Tipo/>
    </div>
  );
}

export default App;
