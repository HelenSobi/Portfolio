import {Link} from 'react-router-dom';
import HeroImage from "../components/HeroImage";
import SocialLinks from "../components/SocialLinks";
import Education from '../components/Education';
import Skills from '../components/Skills';
const About = () =>{
    return (
        <>
        <HeroImage heading="It's me." subHead="Wanna know some facts about me."/>
        <section className="bg-black">
            <div className="md:w-10/12 w-full mx-auto">  
               <div className="flex flex-col md:flex-row py-6 max-md:px-4 max-md:justify-center max-md:items-center">
                    <div className="md:w-6/12">
                        <img className=" w-36 h-36 p-1 rounded-full ring-2 ring-[#FFDA76]" src="./avatar.jpeg" alt="Bordered avatar"/>
                        <div className="">
                        <h1 className="text-xl font-bold leading-tight my-4 text-white">Helen Sobia</h1>
                        <SocialLinks/>
                        </div>
                        
                    </div>
                    <div className="md:w-6/12 max-md:mt-4">
                         <h1 className="text-2xl md:text-4xl font-bold text-white">Who am I ?</h1>
                            {/* <p className="text-lg text-gray-300">I am a react front-end developer. I create responsive and secure websites for my clients.</p> */}
                         <p className="text-lg text-gray-300 mb-4 max-md:text-justify">
                            A Frontend focused Web Developer building the Frontend of websites 
                            and Web Applications that leads to the success of the overall product</p>
                        <Link to="/contact" className="transition-all duration-500 bg-[#FFDA76] hover:bg-zinc-700 hover:text-white py-2 px-4 rounded  text-black uppercase">contact</Link>
                    </div>
               </div>
               {/** Education Section 
               <Education/> */}
               {/** Education Section */}
               <Skills/>
            </div>
        </section>
       
        </>
    )
}

export default About;
