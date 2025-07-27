
import './App.css';
import Home from './Components/Screens/Home';

import {
  BrowserRouter as Router,

  Route,
  Routes,

} from 'react-router-dom'
import Login from './Components/Screens/Login';
import SIgnup from './Components/Screens/SIgnup';

function App() {
  return (
    <Router >
      <div >
        <Routes>
          <Route exact path='/' element={<Home />} />

          <Route exact path='/login' element={<Login />} />
          <Route exact path='/createuser' element={<SIgnup />} />
        </Routes>

      </div>

    </Router>
  );
}

export default App;
