import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Layouts/Header/Header';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="appContainer">
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />}/>
        </Routes>
    </div>
  );
}

export default App;
