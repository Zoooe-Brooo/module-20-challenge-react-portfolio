import '../styles/AboutMe.css';
import profilePicture from '../assets/zoe-profile.jpg';

export default function AboutMePage() {
  return (
    <div>
      <h2>About Me</h2>
      <img src={profilePicture} id="profile-img" alt="profile picture of zoe" />
      <p>I have recently and successfully completed a six-month Full Stack Coding Bootcamp study, and I’m passionate about building a career in web development.</p>
      <p>I was born and grew up in China, and first came to Australia in 2016. Previously I have studied Bachelor of Law & Master of Social Work. My current job position is a youth worker and I work with children and young people from traumatic backgrounds.</p>  
      <p>During my time in the web development course, instructors and classmates noted my ability to work both individually and collaborativley across multiple projects. I further developed my problem solving skills when working on my own and I also can recognise when I need to seek support. My logical thinking skills highlight my proficiency in back end web development and adaptable nature for front end.</p>
      <p>Additionally, I believe there are several transferable skills from my current position as a youth worker that I can utilise in a career in web development such as documentation skills, communication skills, building and maintaining strong relationship within the team as well as client.</p>
    </div>
  );
}
  