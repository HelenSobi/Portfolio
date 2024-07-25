import { Routes, Route } from 'react-router-dom';
import {lazy, Suspense} from 'react';
import NavBar from './components/NavbBar';
import Footer from './components/Footer';
import './custom.css';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const ContactMe = lazy(() => import('./pages/ContactMe'));
const Nopage = lazy(() => import('./pages/Nopage'));

function App() {

  return (
    <>
    <NavBar/>
    <Suspense fallback={<div className="container">Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<ContactMe/>}/>
        <Route path="*" element={<Nopage/>}/>
      </Routes>
    </Suspense>
    <Footer/>
    </>
  )
}

export default App;
