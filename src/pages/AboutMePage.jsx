import '../styles/AboutMe.css';
import profilePicture from '../assets/zoe-profile.jpg';

export default function AboutMePage() {
  return (
    <div>
      <h2>About Me</h2>
      <img src={profilePicture} id="profile-img" alt="profile picture of zoe" />
      <p>I am passionate about being a new web developer in a near future!</p>
      <p>I was born and grow up in China, and first came to Australia in 2016. My background are Bachelor of Law and Master of Social Work, despite irrelevant to IT Industry, I still believe there are some transferable abilities and skills that I can utilise to my new role.</p>  
    </div>
  );
}
  