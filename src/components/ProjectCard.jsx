import { Link } from "react-router-dom";

const ProjectCard=(props) => {
    const {imgsrc, title, text, view, code, language}= props.data;
    const skills = language.split(',');
    return (
        <>
      
            <div className="flex flex-col lg:flex-row gap-4 rounded overflow-hidden bg-slate-900 hover:bg-slate-700 p-2 mb-2 md:mb-4">
                    <div className="flex-shrink-0">
                    <img className="w-full object-cover md:w-52 md:h-52 mx-auto" src={imgsrc} alt=""/>
                        {/* <img className="w-full absolute left-0 top-0 p-2 object-cover object-center transition duration-50 shadown" src={imgsrc} alt="Movie Finder"/> */}
                    </div>
                    <div><p className="text-base leading-6 font-semibold">{title}</p>
                   
                   
                    <ul className="mt-2 text-xs font-medium">
                      {
                        skills.map((lang,index)=>(
                          <li key={index} className="inline-block text-teal-300 bg-teal-400/10 rounded-full px-3 py-1 mr-2 mb-2">{lang}</li>
                        ))
                      }
                        </ul>
                        <p className="text-[.8rem] leading-normal">{text}</p>
                        <div className="my-4 uppercase">
                    <Link to={view} target={"_blank"} className="inline-block transition-all duration-500 bg-teal-300 text-teal-900 text-[.8rem] hover:bg-zinc-700 hover:text-white py-2 px-4 rounded  mr-8">live link</Link>
                    <Link to={code} target={"_blank"} className="inline-block transition-all duration-500 bg-slate-300 hover:bg-zinc-700 hover:text-white text-[.8rem] py-2 px-4 rounded   text-black ">code repo</Link>
                    
                    
                    </div>
                    </div>
                   
                </div>
        {/* <div className="mb-4 shadow-md">
            <figure className="md:flex max-w-5xl  bg-slate-100 rounded-xl  dark:bg-slate-800">
            <img className="w-full h-full md:w-48 lg:w-72 md:h-auto  mx-auto object-cover p-2"  src={imgsrc} alt={title} />
                
                <div className="p-4 space-y-4">
                <figcaption className="font-medium">
                    <div className="font-bold text-lg mb-2 text-slate-900">
                    {title}
                    </div>
                    <ul className="mt-2 text-xs font-medium">
                      {
                        skills.map((lang)=>(
                          <li className="inline-block text-teal-300 bg-teal-400/10 rounded-full px-3 py-1 mr-2 mb-2">{lang}</li>
                        ))
                      }
                        </ul>
                  
                </figcaption>
                <blockquote>
                    <p className="text-base leading-7 text-gray-700 ">
                    {text}
                    </p>
                </blockquote>
                <div className="flex my-4 flex-1 uppercase">
                    <Link to={view} target={"_blank"} className="inline-block transition-all duration-500 bg-teal-300 text-teal-900 text-[1rem] hover:bg-zinc-700 hover:text-white py-2 px-4 rounded  mr-8">live link</Link>
                    <Link to={code} target={"_blank"} className="inline-block transition-all duration-500 bg-slate-300 hover:bg-zinc-700 hover:text-white text-[1rem] py-2 px-4 rounded   text-black ">code repo</Link>
                    
                    
                    </div>
                </div>
            </figure>
        </div> */}
        {/* <div class="p-4">
  <figure class="md:flex max-w-5xl bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto object-cover" src="https://images.unsplash.com/photo-1495716868937-273203d5bb0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxsYWR5fGVufDB8MHx8fDE2OTQxNzI4MTV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="" width="384" height="512"/>
    <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
      <blockquote>
        <p class="text-lg font-medium dark:text-slate-100">
          “Tailwind CSS is the only framework that I've seen scale
          on large teams. It’s easy to customize, adapts to any design,
          and the build size is tiny.”
        </p>
      </blockquote>
      <figcaption class="font-medium">
        <div class="text-sky-500 dark:text-sky-400">
          Sarah Dayan
        </div>
        <div class="text-slate-700 dark:text-slate-400">
          Staff Engineer, Algolia
        </div>
      </figcaption>
    </div>
  </figure>
</div> */}
        {/* <div className="bg-slate-900  shadow-xl rounded-lg duration-500 flex ">
    <div className="hover:bg-gray-900 hover:text-white transition duration-300 max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={imgsrc} alt={title}/>
        <div className="px-6 py-4">
            <div className="font-bold text-lg mb-2 text-teal-300">{title}</div>
            <p className="space-y-6 pt-2 text-base leading-7 text-gray-400 ">
                {text}
            </p>
        </div>
        <div className="px-6 py-4 flex justify-between my-4 flex-1">
        <Link to={view} target={"_blank"} className="inline-block transition-all duration-500 bg-teal-300 text-teal-900 text-[1rem] font-semibold hover:bg-zinc-700 hover:text-white py-2 px-4 rounded uppercase">live link</Link>
        <Link to={code} target={"_blank"} className="inline-block transition-all duration-500 bg-slate-300 hover:bg-zinc-700 hover:text-white py-2 px-4 rounded   text-black uppercase">code repo</Link>
          
           
        </div>
    </div>
</div> */}
        {/* <div className=" bg-zinc-900 shadow-md rounded-lg duration-500 p-4">
        <img src={imgsrc} alt="" className="w-full object-cover rounded-t-lg" />
            <div className="">
                
                <p className="text-lg md:text-2xl font-bold text-white block my-4">{title}</p>
                <p className="text-white text-md text-justify my-4">{text}</p>
                <div className="flex justify-between">
                    <Link to={view} target={"_blank"} className="transition-all duration-500 bg-[#FFDA76] hover:bg-zinc-700 hover:text-white py-2 px-4 rounded  text-black uppercase">live link</Link>
                    <Link to={code} target={"_blank"} className="transition-all duration-500 bg-[#FFDA76] hover:bg-zinc-700 hover:text-white py-2 px-4 rounded   text-black uppercase">code repo</Link>
                
                
                </div>
            </div>
        </div> */}
        </>
    )
}

export default ProjectCard;