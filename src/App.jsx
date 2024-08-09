import {Outlet } from 'react-router-dom';
import NavBar from './components/NavbBar';
import Footer from './components/Footer';
import './assets/custom.css';


function App() {

  return (
    <>
    <NavBar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App;
