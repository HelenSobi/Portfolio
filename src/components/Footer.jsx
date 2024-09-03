import { Link } from 'react-router-dom';
import SocialLinks from "./SocialLinks";
import FooterContact from "./FooterContact";

const Footer=() =>{
    return (
        <>
        <footer className=" bg-slate-950">
        <div className="flex justify-between flex-col md:flex-row items-center p-4">
        <div className="w-full md:w-6/12 mb-4 md:mb-0">
            <SocialLinks/>
            <FooterContact/>
        </div>
            <div className="w-full md:w-6/12">
            <p className="text-zinc-500 text-sm">Loosely designed in 
            <Link to="https://www.figma.com/" target="_blank" className="text-zinc-300"> Figma</Link> and coded in 
            <Link to="https://code.visualstudio.com" target="_blank" className="text-zinc-300"> Visual Studio Code</Link> by yours truly. 
                Built with 
                <Link to="https://react.dev/" target="_blank" className="text-zinc-300"> React.js</Link> and 
                <Link to="https://tailwindcss.com/" target="_blank" className="text-zinc-300"> Tailwind CSS</Link>, deployed with 
                <Link to="https://www.netlify.com/" target="_blank" className="text-zinc-300"> Netlify</Link>. All text is set in the 
                <Link to="https://rsms.me/inter/" target="_blank" className="text-zinc-300"> Inter</Link> typeface.</p>
            
            </div>
        </div>
        <p className="text-gray-700 text-center">{new Date().getFullYear()} &copy;Designed by Helen Sobia</p>

        </footer>
        
        </>
    )
}

export default Footer;
