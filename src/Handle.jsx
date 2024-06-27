import logo from './logo.svg';
import './App.css';

function Clicker() {
  function handleClick(e) {
    alert('berhasil mengklik');
    e.preventDefault();
  }

  return (
    <a href="#" onClick={handleClick}>
      Hello
    </a>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello mas el</p>
        <Clicker />
        <span>Learn React.js by ell </span>
      </header>
    </div>
  );
}

export default App;
