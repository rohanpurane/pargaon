import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Error404 from './components/Error404';
import NavBar from './components/header/NavBar'
import Footer from './components/footer/Footer2'
import Home from './components/public/home/Home'
import About from './components/public/about/About'
import GovernmentSchemes from './components/public/about/GovernmentSchemes';
import GrampanchayatBody from './components/public/grampanchayat/GrampanchayatBody';
import BusinessResources from './components/public/business_resources/BusinessResources';
import BusinessResItems from './components/public/business_resources/BusinessResItems';
import Business from './components/public/business/Business';
import BusinessDetail from './components/public/business/BusinessDetail';
import Contact from './components/public/contact/Contact';
import Traiding from './components/public/traiding/Traiding';
import TraidingDetails from './components/public/traiding/TraidingDetails';
import Farming from './components/public/farming/Farming';
import VegiDetails from './components/public/farming/vegi/VegiDetails';
import AnimalDetails from './components/public/farming/animales/AnimalDetails';
import BirdDetails from './components/public/farming/birds/BirdDetails';
import LatestUpdates from './components/public/latest_updates/LatestUpdates1';
import LatestUpdateDetails from './components/public/latest_updates/latestUpdateDetails/LatestUpdateDetails';
import Login from './components/auth/login/Login';
import Dashboard from './components/admin/dashboard/Dashboard';
import { useSelector } from "react-redux";


function App() {
  const { access_token } = useSelector(state => state.auth)
  return (
    <div className=''>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/gram' element={<GrampanchayatBody />} />
            <Route path='/governmentschemes' element={<GovernmentSchemes />} />
            <Route path='/businessresources' element={<BusinessResources />} />
            <Route path='/businessresitems' element={<BusinessResItems />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/business' element={<Business />} />
            <Route path='/businessdetail' element={<BusinessDetail />} />
            <Route path='/traiding' element={<Traiding />} />
            <Route path='/traidingdetail' element={<TraidingDetails />} />
            <Route path='/latestupdates' element={<LatestUpdates />} />
            <Route path='/latestupdatesdetails' element={<LatestUpdateDetails />} />
            <Route path='/farming' element={<Farming />} />
            <Route path='/vegidetail' element={<VegiDetails />} />
            <Route path='/animaldetail' element={<AnimalDetails />} />
            <Route path='/birddetail' element={<BirdDetails />} />
            <Route path='/login' element={!access_token ? <Login /> : <Navigate to="/dashboard" /> } />
            <Route path='/dashboard' element={access_token ? <Dashboard /> : <Navigate to="/login" /> } />
            <Route path="*" element={<Error404 />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
  );
}

export default App;
