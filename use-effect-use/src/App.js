import CopyrightIcon from '@mui/icons-material/Copyright';
import './App.css';
import Starwars from './components/starwars';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="head-left">
          <div className="head-logo">
            <img src={ process.env.PUBLIC_URL + 'static/images/useEffect_logo.jpg'}
                  alt="useEffect logo" width="120px" />
          </div>
        </div>
        <div className="head-right">
          React useEffect Example.<br />
        </div>
      </header>
      
      <main className="container" >
        <Starwars />        
      </main>
      <div className="App-footer">
        <div className="footer-info">
          A. V. Claverie  <CopyrightIcon sx={{fontSize: 14, marginRight: 1, marginLeft: 1}} />  Powered By React!
        </div>
      </div>
    </div>
  );
}

export default App;
