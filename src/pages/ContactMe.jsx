import { Link } from "react-router-dom";
import HeroImage from "../components/HeroImage";
import Form from "../components/Form";

const ContactMe = () => {
    return (
        <>
        <HeroImage heading="Let's catch up." subHead="Feel free to contact."/>
        <section className="">
            <div className="md:w-6/12 w-full mx-auto">  
               <Form/>
            
            </div>
        </section>
        </>
    )
}

export default ContactMe;