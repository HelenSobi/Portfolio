import { useNavigate } from "react-router-dom";
import NavBar from '../components/NavbBar';

const Projects = () => {
    const navigate = useNavigate();
    return (
        <>
        <NavBar/>
            <div className="container">
            <div className="title">
                <h1>Project page !!!</h1>
            </div>
            {/* <button className="btn" onClick={() => navigate('Footer')}>
            Project Info
            </button> */}
            </div>
        </>
    )
}

export default Projects;