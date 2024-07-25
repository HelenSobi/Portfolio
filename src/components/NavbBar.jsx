import {NavLink} from 'react-router-dom';

const NavBar = () =>{
    return (
        <>
         <nav className="header-container">
            <div className="logo">
               <h1>Portfolio.</h1>
            </div>
            <div>
                <ul className="nav-menu">
                    <li> <NavLink to="/">Home</NavLink></li>
                    <li> <NavLink to="/about">About</NavLink></li>
                    <li> <NavLink to="/projects">Projects</NavLink></li>
                    {/* <li>Certifications</li> */}
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default NavBar;