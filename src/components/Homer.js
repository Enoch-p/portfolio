import React from 'react'
import { Link } from 'react-router-dom';

import './styles/stylee.css'
import DigitalBackgroundVideo from '../media/DigitalBackground.mp4';
import PicImage from '../media/pic.png';


const Homer = (props) => {
    const handleBookMeeting = () => {
        const meetingLink = 'https://calendly.com/enochprecious/30min'

        window.open(meetingLink, '_blank');
    }
// adding more link here
    // const handleCheckPortfolio = () => {
    //     const portfolioLink = 'https://behance.com/enoch-p_milo'

    //     window.open(behanceLink, '_blank');
    // }

    // const handleOnBuild = () => {
    //     const buildingLink = 'https://behance.com/h-p_milo'

    //     window.open(behanceLink, '_blank');
    // }
// new added link stopped here

    const handleStartChat = () => {
        // Replace the link with the desired external link
        const telegramLink = 'https://t.me/enochs_world';
        
        // Open the external link in a new tab
        window.open(telegramLink, '_blank');
      };


  return (
    <div className="homer-container">
      <div className="homer-container01">
        {/* Video background */}
        <video autoPlay loop muted>
          <source src={DigitalBackgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="homer-container02">
          <div className="homer-container03">

            <Link to="/">
              <img
                alt="image"
                src={PicImage}
                className="homer-image"
              />
            </Link>

            <button
                type="button"
                className="homer-button button"
                onClick={handleStartChat}
            >
              <svg viewBox="0 0 804.5714285714286 1024" className="homer-icon">
                <path d="M658.286 457.143v36.571c0 10.286-8 18.286-18.286 18.286h-201.143v201.143c0 10.286-8 18.286-18.286 18.286h-36.571c-10.286 0-18.286-8-18.286-18.286v-201.143h-201.143c-10.286 0-18.286-8-18.286-18.286v-36.571c0-10.286 8-18.286 18.286-18.286h201.143v-201.143c0-10.286 8-18.286 18.286-18.286h36.571c10.286 0 18.286 8 18.286 18.286v201.143h201.143c10.286 0 18.286 8 18.286 18.286zM731.429 713.143v-475.429c0-50.286-41.143-91.429-91.429-91.429h-475.429c-50.286 0-91.429 41.143-91.429 91.429v475.429c0 50.286 41.143 91.429 91.429 91.429h475.429c50.286 0 91.429-41.143 91.429-91.429zM804.571 237.714v475.429c0 90.857-73.714 164.571-164.571 164.571h-475.429c-90.857 0-164.571-73.714-164.571-164.571v-475.429c0-90.857 73.714-164.571 164.571-164.571h475.429c90.857 0 164.571 73.714 164.571 164.571z"></path>
              </svg>
              <span>Start Chat</span>
            </button>
            <button
                type="button"
                className="homer-button1 button"
                onClick={handleBookMeeting}
            >
              <svg viewBox="0 0 1024 1024" className="homer-icon2">
                <path d="M640 214q34 0 60 25t26 59v684l-300-128-298 128v-684q0-34 26-59t60-25h426zM810 768v-554q0-34-25-60t-59-26h-428q0-34 26-60t60-26h426q34 0 60 26t26 60v682z"></path>
              </svg>
              <span>Book a meeting</span>
            </button>
          </div>
          <div className="homer-container04">


            <Link to="/Home">
              <button type="button" className="portfolio-button2 button">
                <span>Our Service</span>
              </button>
            </Link>



            {/* <button
                type="button"
                className="homer-button2 button"
                // onClick={handleOnBuild}
            >
              <span>Our Service</span>
            </button> */}



            <button 
                type="button"
                className="homer-button3 button"
                // onClick={handleOnBuild}
            >
              <span>Check Portfolio</span>
            </button>
            <button
                type="button"
                className="homer-button4 button"
                // onClick={handleCheckPortfolio}
            >
              <span>Clients Reviews</span>
            </button>
          </div>
        </div>
        <div className="homer-container05">
          <div className="homer-container06">
            <div className="homer-container07">
              <h1 className="homer-text05">About Us</h1>
            </div>
            <div className="homer-container08">
              <div className="homer-container09">
                <span className="homer-text06">
                  <span>
                       Hey!  Meet Enoch, a Computer Science and Software
                    Engineering graduate from South America University,
                    passionate about creating exceptional digital experiences.
                    As a proficient web and app developer, I specialize in
                    crafting visually stunning UI/UX designs for applications
                    and websites.
                  </span>
                  <br className="homer-text08"></br>
                  <br></br>
                  <span>
                    My expertise extends to Python, where I excel in building
                    intelligent Telegram AI. Leveraging Python&apos;s
                    capabilities, I create advanced chatbots with GPT-like
                    intelligence, offering innovative user interactions.
                  </span>
                  <br className="homer-text11"></br>
                  <br></br>
                  <span>
                    Beyond coding, my skills include UI/UX design, where I bring
                    creativity to mobile app interfaces and intuitive website
                    layouts. With a solid foundation in frontend and backend
                    development, I use languages like HTML, CSS, JavaScript,
                    React, Tkinter, and WordPress.
                  </span>
                  <br className="homer-text14"></br>
                  <br></br>
                  <span>
                    In the realm of 3D modeling, I explore my creative side,
                    designing innovative structures during my free time.
                    Additionally, I offer top-notch software development
                    services, ensuring coding excellence and proficiency in
                    diverse programming languages.
                  </span>
                  <br className="homer-text17"></br>
                  <br></br>
                  <span>
                    Explore my portfolio to witness a showcase of my skills and
                    experiences, from intuitive UI/UX designs to intelligent AI
                    solutions. Let&apos;s collaborate and bring your digital
                    ideas to life!
                  </span>
                </span>
              </div>
            </div>
            {/* <textarea
              placeholder="placeholder"
              className="homer-textarea textarea"
            ></textarea> */}
          </div>
        </div>
      </div>
      {/* <div className="homer-container10"></div> */}
    </div>
  )
}

export default Homer
