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
        <nav className="fixed top-0 right-0 left-0 z-50 bg-transparent w-full">
            <div className={`flex flex-wrap justify-between p-4 bg-zinc-900 ${color ? "md:bg-opacity-90" : "md:bg-opacity-10"}`}>
            {/* <div className={`header-container ${color ? "header-bg-scroll" : "header-bg-noscroll"}`}> */}
                    <div>
                        <Link to="/" className="text-2xl font-bold text-white mr-2">
                        Portfolio.
                        {/* <img src="../src/assets/logo.png" className=" w-100 h-10 " alt="logo"/> */}
                        </Link>
                    </div>
                    <div className="block md:hidden">
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
                        className={`w-full max-md:h-screen flex flex-col justify-center md:block md:flex-row items-center md:w-auto ${isOpen ? "block" : "hidden"}`}>
                        {/* <div className="md:flex-grow"> */}
                            <Link  onClick={() => setIsOpen(!isOpen)} to="/" className="p-4 text-2xl text-white mt-4 md:p-0 md:mr-14 md:inline-block md:mt-0 md:text-lg hover:text-[#FFDA76]">Home</Link>
                            <Link  onClick={() => setIsOpen(!isOpen)} to="/projects" className="p-4 text-2xl text-white mt-4 md:p-0 md:mr-14 md:inline-block md:mt-0 md:text-lg hover:text-[#FFDA76]">Projects</Link>
            
                            <Link  onClick={() => setIsOpen(!isOpen)} to="/about" className="p-4 text-2xl text-white mt-4 md:p-0 md:mr-14 md:inline-block md:mt-0 md:text-lg hover:text-[#FFDA76]">About</Link>
                            
                            <Link  onClick={() => setIsOpen(!isOpen)} to="/contact" className="p-4 text-2xl text-white mt-4 md:p-0 md:mr-14 md:inline-block md:mt-0 md:text-lg hover:text-[#FFDA76]" >Contact</Link>   
                        {/* </div>  */}
                        <Link className="mt-4 transition-all duration-500 bg-[#FFDA76] hover:bg-zinc-700 hover:text-white py-2 px-4 rounded  text-black uppercase" to="https://drive.google.com/file/d/1DDggWU8Z3p7r14uccc3AU8V0LC_uLOlW/view" target="_blank">Resume</Link>
                    </div> 
                    {/* <div>
                    <Link className="transition-all duration-500 bg-[#FFDA76] hover:bg-zinc-700 hover:text-white py-2 px-4 rounded  text-black uppercase" to="https://drive.google.com/file/d/1DDggWU8Z3p7r14uccc3AU8V0LC_uLOlW/view" target="_blank">Resume</Link>
                    </div> */}
            </div>
        </nav>
        </>
    )
}

export default NavBar;

   