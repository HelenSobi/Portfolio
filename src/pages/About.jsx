import {Link} from 'react-router-dom';
import HeroImage from "../components/HeroImage";
import SocialLinks from "../components/SocialLinks";
import Skills from '../components/Skills';
const About = () =>{
    return (
        <>
        <HeroImage heading="It's me." subHead="Wanna know some facts about me."/>
        <section className="w-full  p-4">
            <div className="container flex flex-col md:flex-row mx-auto gap-8">
            <div className="w-full md:w-6/12">
            <h1 className="text-2xl font-bold text-teal-300 py-4">Who am I</h1>
            <p className="text-md ">
            I'm a passionate  <span className="font-semibold text-slate-200">React front-end developer</span> building and managing the Front-end of Websites
             and Web Applications that leads to the success of the overall product.
              Check out some of my work in the <span className="font-semibold tracking-tight text-slate-200">Projects</span> section.
            </p>
            <p className="text-md"> My journey into web development started
               from a love for technology and a desire to solve problems creatively. I thrive on turning
                ideas into visually appealing and functional digital experiences. When I’m not coding,
                 I enjoy learning about the latest tech trends and improving my skills to stay ahead
                  in this fast-evolving field.
            </p>
            <p className="text-md">
            I'm open to Job opportunities where I can contribute, learn and grow.
             If you have a good opportunity that matches my skills and experience then
              don't hesitate to contact me.


            </p>
            </div>
            <div className="w-full md:w-6/12 flex flex-col justify-center items-center">
                <img className="w-36 h-36 md:w-48 md:h-48 p-1 rounded-full ring-2 ring-teal-300" src="./avatar.jpeg" alt="Bordered avatar"/>
                    <div className="">
                        <h1 className="text-xl font-bold leading-tight my-4 text-white">Helen Sobia</h1>
                        <SocialLinks/>
                    </div>
            </div>
            </div>
            </section>
            <section className="w-full  p-4">
                <div className="container flex flex-col mx-auto gap-8">
                    <Skills/>
                </div>
            </section>
        
       
        </>
    )
}

export default About;
