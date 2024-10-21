import '../styles/Project.css';

export default function Project({ image, name, website, github }) {
    return (
        <>
            <img src={image} className="project-img" alt="Project Picture" /><br />
            <a href={website} className="project-anchor">{name}</a><br />
            <a href={github} className="project-anchor">GitHub Repo</a>
        </>
    );
}