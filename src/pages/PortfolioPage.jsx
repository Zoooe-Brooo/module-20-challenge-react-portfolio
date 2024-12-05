import Project from "../components/Project";
import '../styles/Portfolio.css';
import TaskBoard from '../assets/task-board-screenshot.png';
import WeatherDashboard from '../assets/weather-dashboard-screenshot.png';
import TechBlog from '../assets/tech-blog-screenshot.png';
import BookHive from '../assets/book-hive-screenshot.png';
import StudentSearchEngine from '../assets/student-search-engine-screenshot.png';
import Taskable from '../assets/taskable-screenshot.png';

const projects = [
    {
        image: Taskable,
        name: "Taskable - Group Project",
        website: "https://taskable.onrender.com/",
        github: "https://github.com/Zoooe-Brooo/taskable",
        project_id: 1,
    },
    {
        
        image: BookHive,
        name: "Book Hive - Group Project",
        website: "https://book-hive-xr6y.onrender.com/",
        github: "https://github.com/Zoooe-Brooo/book-hive",
        project_id: 2,
    },
    {
        image: StudentSearchEngine,
        name: "Student Search Engine - Group Project",
        website: "https://jovana667.github.io/student-search-engine/",
        github: "https://github.com/Zoooe-Brooo/student-search-engine",
        project_id: 3,
    },
    {
        image: TechBlog,
        name: "Tech Blog",
        website: "https://module-14-challenge-tech-blog.onrender.com/",
        github: "https://github.com/Zoooe-Brooo/module-14-challenge-tech-blog",
        project_id: 4,
    },
    {
        image: WeatherDashboard,
        name: "Weather Dashboard",
        website: "https://zoooe-brooo.github.io/module-6-challenge-weather-dashboard/",
        github: "https://github.com/Zoooe-Brooo/module-6-challenge-weather-dashboard",
        project_id: 5,
    },
    {
        image: TaskBoard,
        name: "Task Board",
        website: "https://zoooe-brooo.github.io/module-5-challenge-task-board/",
        github: "https://github.com/Zoooe-Brooo/module-5-challenge-task-board",
        project_id: 6,
    },
];

export default function PortfolioPage() {
    return (
        <>
            <h2 className="page-title">Portfolio</h2>
            <div className="flex-container">
                {projects.map((project) => (
                    <div key={project.project_id} className="project flex-item">
                        <Project {...project} />
                    </div>
                ))}
            </div>
        </>
    );
}
