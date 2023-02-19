import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Layouts/Footer/Footer';
import Header from './Layouts/Header/Header';
import Awards from './Pages/Awards/Awards';
import Career from './Pages/Career/Career';
import GetJob from './Pages/Career/GetJob';
import Partners from './Pages/Career/Partners';
import Talent from './Pages/Career/Talent';
import GovernmentExperience from './Pages/GovernmentService/GovernmentExperience';
import GovernmentPlacements from './Pages/GovernmentService/GovernmentPlacements';
import GovernmentService from './Pages/GovernmentService/GovernmentService';
import Home from './Pages/Home/Home';
import News from './Pages/News/News';
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
            <Route exact path='/jobOpening' element={<Career />}/>
            <Route exact path='/getaJob' element={<GetJob />}/>
            <Route exact path='/talentCommunity' element={<Talent />}/>
            <Route exact path='/partner' element={<Partners />}/>
            <Route exact path='/news' element={<News />}/>
            <Route exact path='/awards' element={<Awards />}/>
          </Routes>
        </main>
        <Footer />
    </div>
  );
}

export default App;
