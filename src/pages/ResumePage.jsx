import '../styles/Resume.css';
import Resume from '../assets/zhong-wenli-resume.pdf';

export default function ResumePage() {
  return (
    <div>
      <h2 className="page-title">Resume</h2>
      <p id="download">Download my <a href={Resume} id="resume" download>resume</a></p>
      {/* <div className="page-content">
        <div>
          <h3>Front-end Proficiencies</h3>
          <ul className="proficiencies-list">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>responsive design</li>
            <li>Bootstrap</li>
            <li>React</li>
            <li>PWA</li>
          </ul>
        </div>
        <div>
          <h3>Back-end Proficiencies</h3>
          <ul className="proficiencies-list">
            <li>Node</li>
            <li>Express</li>
            <li>REST APIs</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
            <li>GraphQL</li>
          </ul>
        </div>
      </div> */}
    </div>
  );
}
  