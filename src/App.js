import './App.css';
import Home from './components/Home'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <main>
        <Home></Home>
      </main>
    </div>
  );
}

export default App;
