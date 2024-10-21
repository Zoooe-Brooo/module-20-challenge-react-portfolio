import Project from "../components/Project";
import '../styles/Portfolio.css';
import PersonalBlog from '../assets/personal-blog-screenshot.png';
import TaskBoard from '../assets/task-board-screenshot.png';
import WeatherDashboard from '../assets/weather-dashboard-screenshot.png';
import TechBlog from '../assets/tech-blog-screenshot.png';
import BookHive from '../assets/book-hive-screenshot.png';
import StudentSearchEngine from '../assets/student-search-engine-screenshot.png';

const projects = [
    {
        image: PersonalBlog,
        name: "Personal Blog",
        website: "https://zoooe-brooo.github.io/module-4-challenge-personal-blog/",
        github: "https://github.com/Zoooe-Brooo/module-4-challenge-personal-blog",
        project_id: 1,
    },
    {
        image: TaskBoard,
        name: "Task Board",
        website: "https://zoooe-brooo.github.io/module-5-challenge-task-board/",
        github: "https://github.com/Zoooe-Brooo/module-5-challenge-task-board",
        project_id: 2,
    },
    {
        image: WeatherDashboard,
        name: "Weather Dashboard",
        website: "https://zoooe-brooo.github.io/module-6-challenge-weather-dashboard/",
        github: "https://github.com/Zoooe-Brooo/module-6-challenge-weather-dashboard",
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
        image: BookHive,
        name: "Book Hive - Group Project",
        website: "https://book-hive-c90u.onrender.com/",
        github: "https://github.com/Zoooe-Brooo/book-hive",
        project_id: 5,
    },
    {
        image: StudentSearchEngine,
        name: "Student Search Engine - Group Project",
        website: "https://jovana667.github.io/student-search-engine/",
        github: "https://github.com/Zoooe-Brooo/student-search-engine",
        project_id: 6,
    },
];

export default function PortfolioPage() {
    return (
        <>
            <h2>Portfolio</h2>
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
