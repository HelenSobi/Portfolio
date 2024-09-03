import { Link } from "react-router-dom";
import HomeSkills from "./HomeSkills";
import SocialLinks from "./SocialLinks";
import HomeEducation from "./HomeEducation";

const HomeAbout=()=>{
    return (
        <>
         <section className="w-full  p-4">
            <div className="container flex flex-col md:flex-row mx-auto gap-8">
            <div className="w-full md:w-6/12">
            <h1 className="text-lg font-bold text-teal-300 py-4">Get to know me!</h1>
            <p className="text-base ">
            I'm a passionate  <span className="font-semibold text-slate-200">React front-end developer</span> building and managing the Front-end of Websites
             and Web Applications that leads to the success of the overall product.
              Check out some of my work in the <span className="font-semibold tracking-tight text-slate-200">
              <Link to="/projects">Projects</Link></span> section.
            </p>
            <p className="text-base">
            I'm open to Job opportunities where I can contribute, learn and grow.
             If you have a good opportunity that matches my skills and experience then
              don't hesitate to contact me.

            </p>
            <div className="md:mt-8">
            <SocialLinks/>
            </div>
                
            </div>
            <div className="w-full md:w-6/12  ">
            <h1 className="text-lg font-bold text-teal-300 py-4">Skills</h1>
            <HomeSkills/>
            </div>
            </div>
        </section>
        <section className="w-full  p-4">
            <HomeEducation/>
        </section>
        </>
    )
}

export default HomeAbout;
{/* <svg class="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clip-rule="evenodd" />
                </svg> 
                
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
<path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path></svg>




*/}