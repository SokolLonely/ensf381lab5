import logo from './logo.svg';
import './App.css';

function App() {
  let currentYear = new Date().getFullYear();
  var isLoggedIn = false;
  //currentYear = currentYear.getFullYear();
  
  return (
    <div className="App">
      <h1>ENSF-381: Full Stack Web Development</h1>
      <p>React Components</p>
      <p>{isLoggedIn ? "welcome back": "please log in"}</p>
    <p>{currentYear}</p>
    </div>
  );
}

export default App;
