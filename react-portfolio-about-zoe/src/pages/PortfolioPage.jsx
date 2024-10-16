import Project from "../components/UI/ProjectSection/Project";

const projects = [
    {
        image: "https://via.placeholder.com/150",
        name: "Project 1",
        website: "https://www.example.com",
        github: "https://www.github.com",
        project_id: 1,
    },
    {
        image: "https://via.placeholder.com/150",
        name: "Project 2",
        website: "https://www.example.com",
        github: "https://www.github.com",
        project_id: 2,
    },
    {
        image: "https://via.placeholder.com/150",
        name: "Project 3",
        website: "https://www.example.com",
        github: "https://www.github.com",
        project_id: 3,
    },
    {
        image: "https://via.placeholder.com/150",
        name: "Project 4",
        website: "https://www.example.com",
        github: "https://www.github.com",
        project_id: 4,
    },
    {
        image: "https://via.placeholder.com/150",
        name: "Project 5",
        website: "https://www.example.com",
        github: "https://www.github.com",
        project_id: 5,
    },
    {
        image: "https://via.placeholder.com/150",
        name: "Project 6",
        website: "https://www.example.com",
        github: "https://www.github.com",
        project_id: 6,
    },
];

export default function PortfolioPage() {
    return (
        <>
            <h2>Portfolio</h2>
            <div className="container">
                <div className="row">
                    {projects.map((project) => (
                        <div key={project.project_id} className="col-md-4">
                            <Project {...project} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
