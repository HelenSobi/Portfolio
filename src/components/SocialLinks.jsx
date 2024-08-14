import {Link} from 'react-router-dom';
import { FaGithub, FaHackerrank, FaLinkedin, FaPhone, FaEnvelope } from 'react-icons/fa';

const SocialLinks =() => {
    return (
        <>
        <div className='flex my-2'>
            <Link to="https://www.linkedin.com/in/helen-sobia" target="_blank"><FaLinkedin size={20} style={{color:"#FFDA76", marginRight:"1rem"}}/></Link>
            <Link to="https://github.com/HelenSobi" target="_blank"><FaGithub size={20} style={{color:"#FFDA76", marginRight:"1rem"}}/></Link>
            <a href="mailto:helensobia88@gmail.com" target="_blank"><FaEnvelope size={20} style={{color:"#FFDA76", marginRight:"1rem"}}/></a>
           
        </div>
        </>
    )
}

export default SocialLinks;