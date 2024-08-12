import { Link } from "react-router-dom";

const ProjectCard=(props) => {
    const {imgsrc,title,text,view,code}= props.data;
    return (
        <>
        <div className=" bg-zinc-900 shadow-md rounded-lg duration-500 p-4">
        <img src={imgsrc} alt="" className="h-40 w-full object-cover rounded-t-lg" />
            <div className="">
                
                <p className="text-lg md:text-2xl font-bold text-white block my-4">{title}</p>
                <p className="text-white text-lg text-justify my-4">{text}</p>
                <div className="flex justify-between">
                    <Link to={view} target={"_blank"} className="transition-all duration-500 bg-[#FFDA76] hover:bg-zinc-700 hover:text-white py-2 px-4 rounded  text-black uppercase">live link</Link>
                    <Link to={code} target={"_blank"} className="transition-all duration-500 bg-[#FFDA76] hover:bg-zinc-700 hover:text-white py-2 px-4 rounded   text-black uppercase">code repo</Link>
                
                
                </div>
            </div>
        </div>
        </>
    )
}

export default ProjectCard;