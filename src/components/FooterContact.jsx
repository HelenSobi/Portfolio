import {FaHome, FaMailBulk } from 'react-icons/fa';

const FooterContact=() =>{
    return (
        <>
                <div className='flex'>
                    <FaHome size={20} style={{color:"white", marginRight:"1rem"}}/>
                    <div>
                    <p className="text-white">Dubai, UAE.</p>
                    </div>
                </div>
                <div className='flex'>
                    <FaMailBulk size={20} style={{color:"white", marginRight:"1rem"}}/>
                    <p className='text-white  font-medium md:font-semibold'>
                    helensobia88@gmail.com</p>
                </div>
        </>
    )
}

export default FooterContact;
