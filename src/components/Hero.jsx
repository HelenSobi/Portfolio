import { Link } from 'react-router-dom';

const Hero = () =>{ 
    return (
        <>
        <div className="relative h-screen text-white overflow-hidden">
          <div className="absolute inset-0">
            <img src="/hero-img1.jpeg" alt="Background Image" className="object-cover object-center w-full h-full bg-transparent opacity-90" />
            <div className="absolute inset-0 bg-slate-800 opacity-60"></div>
          </div>
          
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-center hero-transparent">
            <h1 className="text-xl font-thin leading-tight mb-4 text-teal-300">Hello, I'm</h1>
            <h1 className="text-2xl md:text-7xl font-normal leading-tight mb-4">HELEN SOBIA</h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">React Front-end Developer</p>
            <Link to="/projects" className="transition-all duration-500 bg-teal-300 text-teal-900 text-[1rem] font-semibold hover:bg-zinc-700 hover:text-white py-2 px-4 rounded uppercase my-4">projects</Link>
           
          </div>
        </div>      
        </>
    )
}

export default Hero;