import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Home from './pages/Home';
import About from './pages/About';
import ContactMe from './pages/ContactMe';
import Projects from './pages/Projects';
import Nopage from './pages/Nopage';

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>,
      },
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"/projects",
        element:<Projects/>,
      },
      {
        path:"/contact",
        element:<ContactMe/>,
      },
      
    ],
    // path:"*",
    // element:<Nopage/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

{/* 
  import React,{lazy, Suspense} from 'react';
  const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const ContactMe = lazy(() => import('./pages/ContactMe'));
const Nopage = lazy(() => import('./pages/Nopage'));
  
  <Suspense fallback={<div className="container">Loading...</div>}>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/projects" element={<Projects/>}/>
  <Route path="/contact" element={<ContactMe/>}/>
  <Route path="*" element={<Nopage/>}/>
</Routes>
</Suspense> */}