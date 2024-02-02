import { Route, Routes } from 'react-router-dom';
import Landing from './pages/LandingPage/Landing';
import Navbar from './components/NavBar/Navbar';
import './App.css';
import Blog from './pages/Blog/Blog';
import Footer from './components/Footer/Footer';
import Contacts from './pages/Contact/Contacts';

function App() {
  return (
    <div className='App font-Poppins'>
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path='/Blog' element={<Blog />} />
            <Route path='/Contact' element={<Contacts />} />
          </Routes>
        </div> 
        <Footer />
    </div>
  );
}

export default App;