import { Link } from 'react-router-dom';
import { FaGithub, FaHackerrank, FaLinkedin, FaPhone, FaEnvelope } from 'react-icons/fa';

const SocialLinks =() => {
    return (
        <>
        <div className='flex my-4'>
            <Link to="https://www.linkedin.com/in/helen-sobia" target="_blank"><FaLinkedin size={20} className="fa-icon"/></Link>
            <Link to="https://github.com/HelenSobi" target="_blank"><FaGithub size={20} className="fa-icon"/></Link>
            <a href="mailto:helensobia88@gmail.com" target="_blank"><FaEnvelope size={20} className="fa-icon"/></a>
           
        </div>
        </>
    )
}

export default SocialLinks;