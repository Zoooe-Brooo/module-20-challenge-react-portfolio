import '../styles/Project.css';

export default function Project({ image, name, website, github }) {
    return (
        <>
            <img src={image} alt="Project Picture" />
            <a href={website}>{name}</a>
            <a href={github}>GitHub Code</a>
        </>
    );
}