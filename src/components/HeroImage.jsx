
const HeroImage = (props) =>{
    const {heading,subHead} = props;
    return (
        <>
         <div className="relative text-white">
         <div className='hero-img'>
         <div className="absolute inset-0 bg-slate-800 opacity-50"></div>
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-center hero-transparent">
            <h1 className="text-5xl font-normal leading-tight mb-4">{heading}</h1>
            <p className="text-lg text-gray-300">{subHead}</p>
          </div>
        </div> 
        </div> 
        </>
    )
}

export default HeroImage;
