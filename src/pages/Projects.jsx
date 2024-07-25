import { useNavigate } from "react-router-dom";

const Projects = () => {
    const navigate = useNavigate();
    return (
        <>
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