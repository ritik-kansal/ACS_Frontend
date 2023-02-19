import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Layouts/Footer/Footer';
import Header from './Layouts/Header/Header';
import GovernmentExperience from './Pages/GovernmentService/GovernmentExperience';
import GovernmentPlacements from './Pages/GovernmentService/GovernmentPlacements';
import GovernmentService from './Pages/GovernmentService/GovernmentService';
import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';

function App() {
  return (
    <div className="appContainer">
        <Header />
        <main>
          <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route exact path='/services' element={<Services />}/>
            <Route exact path='/governmentCertification' element={<GovernmentService />}/>
            <Route exact path='/governmentExperience' element={<GovernmentExperience />}/>
            <Route exact path='/governmentPlacement' element={<GovernmentPlacements />}/>
          </Routes>
        </main>
        <Footer />
    </div>
  );
}

export default App;
