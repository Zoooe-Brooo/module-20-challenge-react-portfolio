import '../styles/AboutMe.css';
import profilePicture from '../assets/zoe-profile.jpg';

export default function AboutMePage() {
  return (
    <div>
      <div className="page-title">
        <h2 className="page-title">About Me</h2>
        <img src={profilePicture} id="profile-img" alt="profile picture of zoe" />
      </div>
      <p>I have recently and successfully completed a six-month Full Stack Coding Bootcamp study, and I’m passionate about building a career in web development.</p>
      <p>During my time in the web development course, instructors and classmates noted my ability to work both individually and collaborativley across multiple projects. I further developed my problem solving skills when working on my own and I also can recognise when I need to seek support. </p>
      <p>As a highly organised person, I tend to wirte the code in a clean and stuctured way so that it is easier to read and debug. My logical thinking skills highlight my proficiency in both back end web development and front end. The course has weekly challenges or projects, as I review the user story and acceptance criteria carefully, each of them has gain a high distinction marks.</p>
      <p>I have worked on three different group projects in the bootcamp course and have built supportive relationships within teams. There were a few disagreements among the teams, but I managed to solve them with teammates in respectful ways. My teammates from the BookHive project also expressed the affirmation about the APIs I had worked on.</p>
      <p>I’m confident with the above mentioned set of skills, combined with my desire to continuously learn, that I would succeed as a full stack web developer in the near future.</p>
    </div>
  );
}
  