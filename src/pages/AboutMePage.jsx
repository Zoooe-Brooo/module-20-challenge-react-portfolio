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
      <p>I have worked on three different group projects in the bootcamp course:</p>
      <ul className='about-list'>
        <li>The first one is a front end web applicatipn Student Search Engine, which can search either vedios from YouTube or articles from Wikipedia. I mainly worked on the JavaScript functions. I worked with another three teammates, we have built trusts and being supportive to each other.</li><br /><br />
        <li>The second one is called Bookhive where people can registerd as a user and write reviews about different books. It follows the MVC architecture. I mostly worked on the API routes but also integrated and debugged for models, handlebars, and front end functions. During the project, there were a few disagreements among the team, but we managed to solve them in a respectful way. After finished the project, my teammates express the affirmation about the APIs I had worked on.</li><br /><br />
        <li>The third one is called Taskable, it is a freelancer e-commerce web application where user can find the freelancer developers to do the tech tasks. It uses MERN stack framework. I focused on the back end, applied graphQL for queries and mutations, Redux for state management, integrated JWT for authentication and Stripe as the third party payment platform. The team had experienced the web clash due to the code conflict, but successfully got it fixed. A strong team relationship has been built during the project.</li><br /><br />
      </ul>
      <p>I’m confident with the above mentioned set of skills, combined with my desire to continuously learn, that I would succeed as a full stack web developer in the near future.</p>
    </div>
  );
}
  