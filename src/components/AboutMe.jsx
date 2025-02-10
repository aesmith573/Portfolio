import ProfilePic from '../assets/ProfilePic.jpg';

function AboutMe() {
  return(
    <div className="about-me d-flex">
      <img
        src={ProfilePic}
        alt='Andrew Smith'
        className='profile-image me-4'
      />
      <div>
        <h5>Hi, I'm</h5>
        <h1 className="my-name">
          Andy
        </h1>
        <h3>
          Full-Stack Developer
        </h3>
      </div>
    </div>
  );
}

export default AboutMe;