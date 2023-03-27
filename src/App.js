import { useContext } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AdminLogin from "./Admin/AdminLogin/AdminLogin";
import GetInTouch from "./Admin/GetInTouch/GetInTouch";
import GovernmentExperiences from "./Admin/GovernmentExperiences/GovernmentExperiences";
import Jobs from "./Admin/Jobs/Jobs";
import JosbDetail from "./Admin/Jobs/JosbDetail";
import PartnerForm from "./Admin/PartnerForm/PartnerForm";
import TalentCommunity from "./Admin/TalentCommunity/TalentCommunity";
import "./App.css";
import { AuthContext } from "./contexts/AuthContext";
import Footer from "./Layouts/Footer/Footer";
import Header from "./Layouts/Header/Header";
import About from "./Pages/About/About";
import Awards from "./Pages/Awards/Awards";
import Career from "./Pages/Career/Career";
import GetJob from "./Pages/Career/GetJob";
import Partners from "./Pages/Career/Partners";
import Talent from "./Pages/Career/Talent";
import Contact from "./Pages/Contact/Contact";
import GovernmentExperience from "./Pages/GovernmentService/GovernmentExperience";
import GovernmentPlacements from "./Pages/GovernmentService/GovernmentPlacements";
import GovernmentService from "./Pages/GovernmentService/GovernmentService";
import Home from "./Pages/Home/Home";
import News from "./Pages/News/News";
import Services from "./Pages/Services/Services";
import ScrollToTop from "./ScrollToTop";

function App() {
  const location = useLocation();

  const { user, isAuthenticated } = useContext(AuthContext);

  return (
    <>
      <ScrollToTop />
      <div className="appContainer">
        <main className={(location.pathname === "/contact" ? "bg_black" : "" || location.pathname === "/awards" || location.pathname === "/news"  ? "removePadding" : "" || location.pathname === '/talentCommunity' || location.pathname === '/partner' ? 'excesPaddingWeb' : '')}>
          {isAuthenticated && (
            <Routes>
              <Route exact path="/admin-govermentExperiences" element={<GovernmentExperiences />} />
              <Route exact path="/admin-partnerForm" element={<PartnerForm />} />
              <Route exact path="/admin-talentCommunity" element={<TalentCommunity />} />
              <Route exact path="/admin-jobs" element={<Jobs />} />
              <Route exact path="/admin-getInTouch" element={<GetInTouch />} />
              <Route exact path="/admin-jobsDetail/:id" element={<JosbDetail />} />
            </Routes>
          )}

          <Routes>
            <Route exact path="/admin" element={<AdminLogin />} />
            {/* User Routes */}
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/services/:service" element={<Services />} />
            <Route exact path="/governmentCertification" element={<GovernmentService />} />
            <Route exact path="/governmentExperience" element={<GovernmentExperience />} />
            <Route exact path="/governmentPlacement" element={<GovernmentPlacements />} />
            <Route exact path="/jobOpening" element={<Career />} />
            <Route exact path="/getaJob/:id" element={<GetJob />} />
            <Route exact path="/talentCommunity" element={<Talent />} />
            <Route exact path="/partner" element={<Partners />} />
            <Route exact path="/news" element={<News />} />
            <Route exact path="/awards" element={<Awards />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </main>
        {location.pathname !== "/admin" &&
          location.pathname !== "/admin-govermentExperiences" &&
          location.pathname !== "/admin-partnerForm" &&
          location.pathname !== "/admin-talentCommunity" &&
          location.pathname !== "/admin-jobs" &&
          location.pathname !== "/admin-getInTouch" &&
          !location.pathname.startsWith("/admin-jobsDetail") && <Footer />}
      </div>
    </>
  );
}

export default App;
