import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Home from './pages/Home';
import About from './pages/About';
import ContactMe from './pages/ContactMe';
import Projects from './pages/Projects';
import Nopage from './pages/Nopage';
import './index.css';
import './assets/custom.css';

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

