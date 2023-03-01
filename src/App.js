import { Route, Routes, useLocation } from 'react-router-dom';
import AdminLogin from './Admin/AdminLogin/AdminLogin';
import GovernmentExperiences from './Admin/GovernmentExperiences/GovernmentExperiences';
import './App.css';
import AdminSideMenu from './Components/AdminSideMenu/AdminSideMenu';
import AddAwardPopup from './Components/Popups/AddAwardPopup/AddAwardPopup';
import AdminHeader from './Layouts/AdminHeader/AdminHeader';
import Footer from './Layouts/Footer/Footer';
import Header from './Layouts/Header/Header';
import About from './Pages/About/About';
import Awards from './Pages/Awards/Awards';
import Career from './Pages/Career/Career';
import GetJob from './Pages/Career/GetJob';
import Partners from './Pages/Career/Partners';
import Talent from './Pages/Career/Talent';
import Contact from './Pages/Contact/Contact';
import GovernmentExperience from './Pages/GovernmentService/GovernmentExperience';
import GovernmentPlacements from './Pages/GovernmentService/GovernmentPlacements';
import GovernmentService from './Pages/GovernmentService/GovernmentService';
import Home from './Pages/Home/Home';
import News from './Pages/News/News';
import Services from './Pages/Services/Services';

function App() {
const location = useLocation();

  return (
    <div className="appContainer">
      <AddAwardPopup isActive={false}/>
        {location.pathname === '/admin' || location.pathname === '/govermentExperiences' ? <AdminHeader /> : <Header />}
        <main className={`${location.pathname === '/admin' || location.pathname === '/govermentExperiences' ? 'clearAll' : ''}`}>
        {location.pathname === '/govermentExperiences' && <AdminSideMenu />}
          <Routes>
            {/* Admin Routes */}
            <Route exact path='/admin' element={<AdminLogin />}/>
            <Route exact path='/govermentExperiences' element={<GovernmentExperiences />}/>


            {/* User Routes */}
            <Route exact path='/' element={<Home />}/>
            <Route exact path='/about' element={<About />}/>
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
            <Route exact path='/contact' element={<Contact />}/>
          </Routes>
        </main>
        {location.pathname !== '/admin' && location.pathname !== '/govermentExperiences' && <Footer />}

    </div>
  );
}

export default App;
