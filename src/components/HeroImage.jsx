
const HeroImage = (props) =>{
    const {heading,subHead} = props;
    return (
        <>
         <div className="relative text-white">
         <div className='hero-img'>
          
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-center hero-transparent">
            <h1 className="text-5xl font-thin leading-tight mb-4">{heading}</h1>
            {/* <p className="text-2xl text-gray-300 mb-8">React Developer</p> */}
            <p className="text-lg text-gray-300">{subHead}</p>
          </div>
        </div> 
        </div> 
        </>
    )
}

export default HeroImage;
