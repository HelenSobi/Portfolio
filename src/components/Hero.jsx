import {Link} from 'react-router-dom';

const Hero = () =>{ 
    return (
        <>
        <div className="relative h-screen text-white overflow-hidden">
          <div className="absolute inset-0">
            <img src="/hero-img1.jpeg" alt="Background Image" className="object-cover object-center w-full h-full bg-transparent opacity-90" />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
          
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-center hero-transparent">
            <h1 className="text-5xl font-thin leading-tight mb-4">HELLO! I'M HELEN SOBIA</h1>
            {/* <p className="text-2xl text-gray-300 mb-8">React Developer</p> */}
            <p className="text-lg text-gray-300">
              A Frontend focused Web Developer building the Frontend of websites and </p>
              <p className="text-lg text-gray-300">
              Web Applications that leads to the success of the overall product
            </p>
            <Link to="/projects" className="btn my-5">projects</Link>
           
          </div>
        </div>      
        </>
    )
}

export default Hero;