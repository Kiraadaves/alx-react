import { getFullYear, getFooterCopy } from './utils';
import logo from './holberton-logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <div className='App-body'>
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email </label>&nbsp;
        <input type="text" id="email" name="email"></input> &nbsp;
        <label htmlFor="password">Password </label> &nbsp;
        <input type="text" id="password" name="password"></input> &nbsp;
        <button>OK</button>
      </div>
      <div className='App-footer'>
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </div>
    </div>
  );
}

export default App;
