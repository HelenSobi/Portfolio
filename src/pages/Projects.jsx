import HeroImage from "../components/HeroImage";
import ProjectCard from "../components/ProjectCard";
import ProjectCardData from "../components/ProjectCardData";

const Projects = () => {
    return (
        <>
         <HeroImage heading="PROJECTS." subHead="Some of my most recent works."/>
            <section className="">
            <div className="md:w-10/12 w-full mx-auto">  
               <div className="p-4">
               <h1 className="text-2xl font-bold text-teal-300">Projects</h1>
               </div>
               <div className="p-4 pb-10 md:pb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 justify-items-center justify-center gap-y-8 gap-x-8">
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