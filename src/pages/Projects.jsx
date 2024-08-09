import { Link } from "react-router-dom";
import HeroImage from "../components/HeroImage";
import ProjectCard from "../components/ProjectCard";
import ProjectCardData from "../components/ProjectCardData";

const Projects = () => {
    return (
        <>
         <HeroImage heading="PROJECTS." subHead="Some of my most recent works."/>
            <section className="bg-black">
            <div className="md:w-10/12 w-full mx-auto">  
               <div className="py-6">
                   <h1 className="text-xl md:text-4xl font-medium text-white text-center">Projects</h1>
               </div>
               <div className="pb-20 md:pb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-12 gap-x-12">
                    {
                        ProjectCardData.map((data,index)=>(
                            <ProjectCard key={index} data={data}/>
                        ))
                    }
                    
                </div>
               </div>
            </section>
            
        </>
    )
}

export default Projects;