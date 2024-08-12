import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';

const NavBar = () =>{
    const [isOpen, setIsOpen]=useState(false)
    const [color, setColor]=useState(false);
    const changeColor = () =>{
        if(window.scrollY>=30){
            setColor(true);
        }else{
            setColor(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", changeColor);
        return () => {
            window.removeEventListener("scroll", changeColor);
            
        }
    }, []);
 
    return (
        <> 
        <nav className={`header-container ${color ? "header-bg-scroll" : "header-bg-noscroll"}`}>
                        <div>
                        <Link to="/" className="text-2xl font-bold text-white mr-2">
                        Portfolio.
                        {/* <img src="../src/assets/logo.png" className=" w-100 h-10 " alt="logo"/> */}
                        </Link>
                        </div>
                        <div className="block lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex px-3 py-2 rounded text-white">
                            <svg
                            className={`fill-white h-5 w-5 ${isOpen ? "hidden" : "block"}`}
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                            </svg>
                            <svg
                            className={`fill-white h-5 w-5 ${isOpen ? "block" : "hidden"}`}
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                            </svg>
                        </button>
                        </div>
                        <div
                        className={`w-full block lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}>
                        <div className="text-sm lg:flex-grow">
                        <Link  onClick={() => setIsOpen(!isOpen)} to="/" className="block mt-4 lg:mr-14 lg:inline-block lg:mt-0 text-white font-bold text-lg mr-4">Home</Link>
                        <Link  onClick={() => setIsOpen(!isOpen)} to="/projects" className="block mt-4 lg:mr-14 lg:inline-block lg:mt-0 text-white font-bold text-lg  mr-4">Projects</Link>
        
                        <Link  onClick={() => setIsOpen(!isOpen)} to="/about" className="block mt-4 lg:mr-14 lg:inline-block lg:mt-0 text-white font-bold text-lg  mr-4">About</Link>
                        
                        <Link  onClick={() => setIsOpen(!isOpen)} to="/contact" className="block mt-4 lg:inline-block lg:mt-0 text-white font-bold text-lg  mr-4" >Contact</Link>   
                        </div> 
                        </div> 
        </nav>
        </>
    )
}

export default NavBar;

   