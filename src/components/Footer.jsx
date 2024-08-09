import { FaCopyright, FaGithub, FaHackerrank, FaHome, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa'
const Footer=() =>{
    return (
        <>
        <footer className="bg-black">
        <div className="flex justify-between flex-col md:flex-row items-center p-6">
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
         <p className="text-white text-xs md:text-lg">I enjoy playing with code and design new challenges <br></br>to make them in my own way.</p>
         <div className='flex my-2'>
         <a href='#'><FaLinkedin size={20} style={{color:"white", marginRight:"1rem"}}/></a>
         <a href='#'><FaGithub size={20} style={{color:"white", marginRight:"1rem"}}/></a>
         {/* <a href='#'><FaHackerrank size={20} style={{color:"white", marginRight:"1rem"}}/></a> */}
         </div>
            </div>
        </div>
        <p>&copy;Designed by Helen Sobia</p>

        </footer>
        
        </>
    )
}

export default Footer;