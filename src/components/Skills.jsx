import { Link } from 'react-router-dom';
import HomeSkills from './HomeSkills'

const Skills = () =>{
    return (
        <>
        <div className="max-md:px-4">
        <h1 className="text-2xl font-bold text-teal-300 py-4">Skills & Proficiencies</h1>
        <HomeSkills/>
        </div>
        <div className="max-md:px-4">
        <h1 className="text-2xl font-bold text-teal-300 py-4">Social Handles</h1>
        <ul className="text-white font-medium text-sm ">
        <li className="inline-block border border-neutral-400 bg-slate-700 rounded-lg px-5 py-2.5 me-4 mb-4 md:mb-6">
        <Link to="https://www.linkedin.com/in/helen-sobia" target="_blank">Linkedin</Link></li>
        <li className="inline-block border border-neutral-400 bg-slate-700 rounded-lg px-5 py-2.5 me-4 mb-4 md:mb-6">
        <Link to="https://github.com/HelenSobi" target="_blank">Github</Link></li> 
        </ul>
        </div>
        </>
    )
}

export default Skills;