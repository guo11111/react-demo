// import logo from './logo.svg';
import './App.css';
import Demod from './pages/In1/index';

function App() {
  const num = [1,2,3]
  return (
    <div className="App">
      <div>d</div>
      <Demod data={num}/>
      <form>
        <label>
          名字:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="提交" />
      </form>
      {/* <header className="App-header">
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
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
