import "../styles/homepage.css";
// begin image imports
import retroCartoon from "../images/homepageimgs/retroCartoon.jpeg";
import triangle from "../images/homepageimgs/triangle.svg";
import square from "../images/homepageimgs/square.svg";
import hexagon from "../images/homepageimgs/hexagon.svg";
import reactLogo from '../images/homepageimgs/react-2.svg'
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

          <img src={reactLogo} alt="react logo" className="reactLogo" />

          <h1 className="nameIntro">
            Hi, I'm <span className="name">Cassandra</span>
          </h1>

          <h3 className="jobIntro">Web Developer</h3>

          <div className="resumeBtn">
            <button>Resume</button>
          </div>
        </main>
      </div>

    </>
  );
}

export default Homepage;
