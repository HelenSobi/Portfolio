import { Link } from "react-router-dom";
import HeroImage from "../components/HeroImage";

const ContactMe = () => {
    return (
        <>
        <HeroImage heading="Let's catch up." subHead="Feel free to contact."/>
        <section className="bg-black">
            <div className="md:w-10/12 w-full mx-auto">  
               <div className="flex justify-between py-6">
                Contact US
               </div>
            </div>
        </section>
        </>
    )
}

export default ContactMe;