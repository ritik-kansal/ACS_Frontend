import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="appContainer">
        <Routes>
          <Route exact path='/' element={<Home />}/>
        </Routes>
    </div>
  );
}

export default App;
