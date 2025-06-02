// begin image imports
import profileImg from '../images/aboutimgs/closeup.jpg';
// end image imports
import '../styles/aboutstyles.css';
function About() {

    return(
        <>
        <div className="aboutContainer">
          
                <img src={profileImg} alt="close up headshot" className='profileImg'/>
        
            
            <div className="getToKnowMe">
                <h2>Get To Know Me</h2>
                <p>Welcome to my page! My name is Cassandra. I'm from Chicago but currently reside in the DFW metroplex. I am a web developer with a passion for front-end development and design. My focus framework is REACT and my main language is Javascript.</p>
            </div>

            <div className="funFacts">
                <h2>Fun Facts:</h2>
                <ul>
                    <li>I love to cook and bake (especially delicious cookies!)</li>
                    <li>I'm a movie junkie</li>
                    <li>I'm a bit of a matcha and coffee snob</li>
                    <li>I currently have 3 fur babies (emphasis on the currently)</li>
                    <li>Sushi is my favorite food ever</li>
                    <li>If I could have any superpower, I would choose super sonic speed and break the world record for fastest application coded</li>
                </ul>
            </div>

            <div className="status">
                <h2>Current status</h2>
                <div className="circle">
                    <button></button>
                </div>
                <p>Available for work</p>
            </div>
        </div>
        </>
    )
}

export default About;