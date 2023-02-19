import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Layouts/Footer/Footer';
import Header from './Layouts/Header/Header';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="appContainer">
        <Header />
        <main>
          <Routes>
            <Route exact path='/' element={<Home />}/>
          </Routes>
        </main>
        <Footer />
    </div>
  );
}

export default App;
