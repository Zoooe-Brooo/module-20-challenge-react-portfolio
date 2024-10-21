import '../styles/Resume.css';
import Resume from '../assets/resume-zoe.pdf';

export default function ResumePage() {
    return (
      <div>
        <h2>Resume</h2>
        <p>Download my <a href={Resume} id="resume" download>resume</a></p>
        <div>
          <h3>Front-end Proficiencies</h3>
          <ul className="proficiencies-list">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>responsive design</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div>
          <h3>Back-end Proficiencies</h3>
          <ul className="proficiencies-list">
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
          </ul>
        </div>
      </div>
    );
  }
  