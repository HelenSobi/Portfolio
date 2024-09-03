
import ToDo from "../assets/images/toDo.jpg";
import movie from "../assets/images/movie.jpg"
import Weather from "../assets/images/weather.jpg";
import Caterar from "../assets/images/caterar.jpg";
import simon from "../assets/images/simon.jpg";
import portfolio from "../assets/images/portfolio.jpg"

const ProjectCardData = [
    {
        id:1,
        imgsrc : movie,
        title : "Movies Finder",
        text : "This React app uses the MovieDB API to display popular and trending movies. Hosted on Firebase, it offers a secure login through Firebase Authentication and allows users to explore movie details and watch trailer.",
        view : "https://movies-finder-2024.web.app/",
        code :"https://github.com/HelenSobi/MoviesFinder_ReactApp",
        language:"ReactJS,Redux,Firebase,MovieDB API,Tailwind CSS,HTML5",
    },
    {
        id:2,
        imgsrc: simon,
        title: "Simon-Game",
        text: "A ReactJS-based memory game that sharpens your focus by asking you to repeat sequences of tones and lights that become increasingly difficult. If the user succeeds, the series becomes complex.Once the user fails, the game is over.",
        view: "https://simon-game-react.netlify.app/",
        code: "https://github.com/HelenSobi/simon-game",
        language:"ReactJS,Tailwind CSS,HTML5",
    },

    {
        id:3,
        imgsrc : portfolio,
        title : "Portfolio",
        text : "My portfolio website showcases my skills as a React front-end developer. The website is designed with a modern, user-friendly interface, emphasizing responsiveness and aesthetics. It features four sections including Aboutme and projects.",
        view : "https://food-delivery-live-api.netlify.app/",
        code :"https://github.com/HelenSobi/Restaurant-App",
        language:"ReactJS, Tailwind CSS, HTML5"
    },
    {
        id:4,
        imgsrc : Caterar,
        title : "Caterar",
        text : "Designed and developed a full-featured culinary catering website with intuitive interfaces, enabling customers to easily navigate and explore the offerings.",
        view : "https://caterar.netlify.app/",
        code :"https://github.com/HelenSobi/caterar",
        language:"HTML5,BootStrap,Javascript"
    },

    {
        id:5,
        imgsrc : Weather,
        title : "Weather Forecast",
        text : "A sleek and responsive weather app built with React.js and Tailwind CSS, offering real-time weather updates and a 7-day forecast powered by the Visual Crossing API.",
        view : "https://weatherforecast-7days.netlify.app/",
        code :"https://github.com/HelenSobi/WeatherForecastApp-React",
        language:"ReactJS,Visual Crossing API,Tailwind CSS,HTML5"
    },

    {
        id:6,
        imgsrc : ToDo,
        title : "To-Do List",
        text : "A React.js app designed to enhance daily productivity by allowing users to add, edit, prioritize, and delete tasks, ensuring every minute is used effectively.",
        view : "https://dailynote-planner.netlify.app/",
        code :"https://github.com/HelenSobi/-To_Do_app_ReactJs",
        language:"ReactJS,Tailwind CSS,HTML5"
    },
    
]
export default ProjectCardData;

// {
//     imgsrc: Restaurant,
//     title: "Food Delivery",
//     text: "A responsive restaurant website listing top eateries and their menus using a live API.",
//     view: "https://food-delivery-live-api.netlify.app/",
//     code: "https://github.com/HelenSobi/Restaurant-App"
// },