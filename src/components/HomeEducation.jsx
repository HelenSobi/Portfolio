import { Link } from 'react-router-dom';
import { FaCalendarAlt } from "react-icons/fa";
import HomeProjects from "./HomeProjects";

const HomeEducation=()=>{
    return (
        <div className="container flex flex-col md:flex-row mx-auto gap-8">
       <HomeProjects/>
        <div className="w-full md:w-6/12  ">
        <h1 className="text-lg font-bold text-teal-300 py-4">Experiance</h1>
        <dl>
            <dt className="text-base leading-6 font-semibold">Junior Front-End Developer</dt>
                <dd className="text-sm leading-6">Tranz Software Solutions Pvt Ltd
                
                </dd>
                <dd className="text-sm leading-6"><FaCalendarAlt style={{color:"text-teal-300",display:"inline-block",marginRight:".5rem"}}/> 2019 - 2023</dd>
        </dl>
        <h1 className="text-lg font-bold text-teal-300 py-4">Certifications</h1>
        <dl>
        <dt className="text-base leading-6 font-semibold">The Complete 2024 Web
            Development</dt>
            <dd className="text-sm leading-6">Udemy
                <Link to="https://drive.google.com/file/d/1a782zqf78rCM8CYUuoBl4J4Zj-RvS6u0/view?usp=sharing" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="animate-pulse hover:animate-bounce inline-block h-4 w-4 ml-2" aria-hidden="true">
                <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                </svg></Link>
                </dd>
                <dd className="text-sm leading-6"><FaCalendarAlt style={{color:"text-teal-300",display:"inline-block",marginRight:".5rem"}}/>2024</dd>
                <dt className="text-base leading-6 font-semibold mt-4">C.Tech in Graphic & Web Design</dt>
                <dd className="text-sm leading-6">Image Creative Education
                <Link to="#" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="animate-pulse hover:animate-bounce inline-block h-4 w-4 ml-2" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg>
                </Link></dd>
                <dd className="text-sm leading-6"><FaCalendarAlt style={{color:"text-teal-300",display:"inline-block",marginRight:".5rem"}}/>2018 - 2019</dd>
        </dl>
        </div>
        </div>
    )
}

export default HomeEducation;