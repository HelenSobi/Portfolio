import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import movie from "../assets/images/movie.jpg"
import Weather from "../assets/images/weather.jpg";
import simon from "../assets/images/simon.jpg";

const HomeProjects=()=>{
    return (
        <div className="w-full md:w-6/12">
        <h1 className="text-lg font-bold text-teal-300 py-4">Featured Projects</h1>
        <div className="flex flex-col gap-4">
        <Link to="https://movies-finder-2024.web.app/">
            <div className="flex gap-4 rounded overflow-hidden bg-slate-900 hover:bg-slate-700 p-2">
                <div className=" w-32 h-24 relative flex-shrink-0">
                    <img className="w-full absolute left-0 top-0 p-2 object-cover object-center transition duration-50 shadown" src={movie} alt="Movie Finder"/></div>
                <div><p className="text-sm leading-6 font-semibold">Movie Finder</p>
               
                <p className="text-xs leading-normal">This React app uses the MovieDB API to display popular and trending movies</p>
                <ul className="mt-2 text-xs font-medium">
                    <li className="inline-block text-teal-300 bg-teal-400/10 rounded-full px-3 py-1 mr-2 mb-2">React</li>
                    <li className="inline-block text-teal-300 bg-teal-400/10 rounded-full px-3 py-1 mr-2 mb-2">Redux</li>
                    <li className="inline-block text-teal-300 bg-teal-400/10 rounded-full px-3 py-1 mr-2 mb-2">MDB API</li>
                    <li className="inline-block text-teal-300 bg-teal-400/10 rounded-full px-3 py-1 mr-2 mb-2">Firebase</li>
                    <li className="inline-block text-teal-300 bg-teal-400/10 rounded-full px-3 py-1 mr-2 mb-2">Tailwind CSS</li>
                    </ul>
                </div>
            </div>
            </Link>
            <Link to="https://simon-game-react.netlify.app/">
            <div className="flex gap-4 rounded overflow-hidden bg-slate-900 hover:bg-slate-700 p-2">
            <div className="w-32 h-24 relative flex-shrink-0">
                    <img className="w-full absolute left-0 top-0 p-2 object-cover object-center transition duration-50" src={simon} alt="Simon Game"/>
                    </div>
                <div><p className="text-sm leading-6 font-semibold text-slate-200">Simon Game</p>
               
                <p className="text-xs leading-normal">TA ReactJS-based memory game that sharpens your focus by asking you to repeat sequences of tones and lights that become increasingly difficult.</p>
                <ul className="mt-2 text-xs font-medium">
                    <li className="inline-block text-teal-300 bg-teal-400/10 rounded-full px-3 py-1 mr-2 mb-2">React</li>
                    <li className="inline-block text-teal-300 bg-teal-400/10 rounded-full px-3 py-1 mr-2 mb-2">Tailwind CSS</li>
                    <li className="inline-block text-teal-300 bg-teal-400/10 rounded-full px-3 py-1 mr-2 mb-2">Netlify</li>
                   
                    </ul>
                </div>
            </div>
            </Link>
        </div>
        <Link to="/projects"><h1 className="text-sm font-bold text-teal-300 py-4 float-right">
        More Projects<FaArrowRight className="animate-pulse" style={{color:"text-teal-300",display:"inline-block",marginLeft:".5rem"}}/></h1></Link>
        </div>
    )
}

export default HomeProjects;