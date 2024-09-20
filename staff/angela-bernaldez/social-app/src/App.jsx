import logo from './logo.svg';
import "./App.css";

function MyButton({ children, className }) {
  return (
    <>
      <button className={className}>{children}</button>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn together
        </a>
        <MyButton className="btn btn-secondary btn-md mt-12">
          hola a todos
        </MyButton>
      </header>
    </div>
  );
}

export default App;