import {Link} from 'react-router-dom';
import Hero from "../components/Hero";
import tech from "/tech.png";
import HelenCV from "/HelenCV.jpg";
const Home = () => {
    return (
        <>
        <Hero/>
        <section className="bg-black">
            <div className="md:w-10/12 w-full mx-auto">  
               <div className="flex justify-between py-6">
                Home
               </div>
            </div>
        </section>
        </>
    )}
export default Home;