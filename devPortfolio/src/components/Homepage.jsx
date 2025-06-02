import "../styles/homepage.css";
// begin image imports
import retroCartoon from "../images/homepageimgs/retroCartoon.jpeg";
import linkedIn from '../images/homepageimgs/linkedIn.svg';
import email from '../images/homepageimgs/email.svg';
import github from '../images/homepageimgs/github.svg';
// end image imports
function Homepage() {
  return (
    <>
      <div className="backgroundContainer">
        <nav className="navBar">
          <div className="homeTitle">
            <span>
              C.L.V<span className="innerHomeTitle">PORTFOLIO</span>
            </span>
          </div>

          <ul className="navLinks">
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </nav>
        <main className="container">

          <img
            src={retroCartoon}
            alt="retrowave styled image of a girl smiling"
            className="cartoonGirl"
          />


          <div className="nameIntro">
            <div className="socials">
              <img src={linkedIn} alt="linkedIn logo" className="linkedIn" />
              <img src={email} alt="mail logo" className="email" />
              <img src={github} alt="github logo" className="github" />
            </div>
              <h1>
                <span className='innerNameIntro'>Hi, I'm <span className="name">Cassandra</span></span><br/>
                <span className="jobIntro">Web developer</span>
              </h1><br/>

              <p>Passion for bridging creativity with technicality.</p>

              <div className="resumeBtn">
                <button>Resume</button>
              </div>
          </div>
        </main>
      </div>

    </>
  );
}

export default Homepage;
