import './App.css';
import Landing from './Landing';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={ <Landing/>}></Route>

        </Routes>

      </Router>
  );
}

export default App;
