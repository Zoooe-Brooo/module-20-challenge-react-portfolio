export default function Project({ image, name, website, github }) {
    return (
        <>
            <img src={image} alt="Project Screenshot Picture" />
            <a href={website}>{name}</a>
            <a href={github}>GitHub Code</a>
        </>
    );
}