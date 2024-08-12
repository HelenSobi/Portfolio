import {FaHome, FaMailBulk } from 'react-icons/fa';
import SocialLinks from "./SocialLinks";

const Footer=() =>{
    const year=new Date().getFullYear();
    return (
        <>
        <footer className="bg-zinc-900">
        <div className="flex justify-between flex-col md:flex-row items-center p-4">
            <div className="self-start mb-4 md:mb-0">
            <div className='flex'>
                <FaHome size={20} style={{color:"white", marginRight:"1rem"}}/>
           <div>
            <p className="text-white">Dubai, UAE.</p>
            </div>
         </div>
         <div className='flex'>
         <FaMailBulk size={20} style={{color:"white", marginRight:"1rem"}}/>
         <p className='text-white font-bold text-xl'>
           helensobia88@gmail.com</p>
         </div>
            </div>
            <div className="self-stretch">
            <h4 className="text-white font-bold text-xl"> About me</h4>
            <p className="text-white  font-medium md:font-semibold ">This is Helen Sobia. </p>
            <p className="text-white text-sm">I enjoy playing with code and design new challenges <br></br>to make them in my own way.</p>
            <SocialLinks/>
            </div>
        </div>
        <p className="text-gray-700 text-center">{year} &copy;Designed by Helen Sobia</p>

        </footer>
        
        </>
    )
}

export default Footer;