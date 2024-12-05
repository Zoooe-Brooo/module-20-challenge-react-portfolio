import '../styles/Project.css';

export default function Project({ image, name, website, github }) {
    return (
        <>
          <div className="project-container">
            <a href={website}><img src={image} className="project-img" alt="Project Picture" /></a>
            <a href={github} className="project-anchor github-anchor">➔GitHub Repo</a>
            <a href={website} className="project-anchor website-anchor">{name}</a>
          </div>
        </>
    );
}