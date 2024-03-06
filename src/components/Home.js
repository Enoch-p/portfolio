import React from 'react';
import { Link } from 'react-router-dom';

import './styles/style.css';
import DigitalBackgroundVideo from '../media/DigitalBackground.mp4';
import PicImage from '../media/pic.png';




const Portfolio = (props) => {

    const handleBookMeeting = () => {
        const meetingLink = 'https://calendly.com/enochprecious/30min'

        window.open(meetingLink, '_blank');
    }
    const handleStartChat = () => {
        // Replace the link with the desired external link
        const telegramLink = 'https://t.me/enochs_world';
        
        // Open the external link in a new tab
        window.open(telegramLink, '_blank');
      };


  return (
    <div className="portfolio-container">
      <div className="portfolio-container01">
        {/* Video background */}
        <video autoPlay loop muted>
          <source src={DigitalBackgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="portfolio-container02">
          <div className="portfolio-container03">

            <Link to="/">
              <img
                alt="image"
                src={PicImage}
                className="homer-image"
              />
            </Link>

            {/* <img
              alt="image"
              src={PicImage}
              className="portfolio-image"
            /> */}

            <button
                type="button"
                className="portfolio-button button"
                onClick={handleStartChat}
            >
                <svg viewBox="0 0 1024 1024" className="portfolio-icon2">
                    <path d="M640 214q34 0 60 25t26 59v684l-300-128-298 128v-684q0-34 26-59t60-25h426zM810 768v-554q0-34-25-60t-59-26h-428q0-34 26-60t60-26h426q34 0 60 26t26 60v682z"></path>
                </svg>
                <span>Start Chat</span>
            </button>


            <button
                type="button"
                className="portfolio-button1 button"
                onClick={handleBookMeeting}
            >
                <svg viewBox="0 0 1024 1024" className="portfolio-icon2">
                        <path d="M640 214q34 0 60 25t26 59v684l-300-128-298 128v-684q0-34 26-59t60-25h426zM810 768v-554q0-34-25-60t-59-26h-428q0-34 26-60t60-26h426q34 0 60 26t26 60v682z"></path>
                </svg>
                <span>Book a Meeting    </span>
            </button>

            
          </div>
          <div className="portfolio-container04">

            <Link to="/Home">
              <button type="button" className="portfolio-button2 button">
                <span>Our Service</span>
              </button>
            </Link>

            {/* <button
              type="button"
              className="portfolio-button2 button"
            >
              <span>Our Service</span>
            </button> */}



            <button type="button" className="portfolio-button3 button">
              <span>Check Portfolio</span>
            </button>
            <button type="button" className="portfolio-button4 button">
              <span>Clients Reviews</span>
            </button>
          </div>
        </div>
        <div className="portfolio-container05">
          <div className="portfolio-container06">
            <div className="portfolio-container07">
              <h1 className="portfolio-text05">Our Service</h1>
            </div>
            <div className="portfolio-container08">
              <div className="portfolio-container09">
                <div className="portfolio-container10">
                  <h1 className="portfolio-text06">Telegram Chat Bot</h1>
                  <span className="portfolio-text07">
                    Experts in Python &amp; JavaScript, we create advanced
                    Telegram chat bots with GPT-like intelligence, offering
                    seamless and innovative user interactions
                  </span>
                </div>
                <div className="portfolio-container11">
                  <h1 className="portfolio-text08">Frontend Dev</h1>
                  <span className="portfolio-text09">
                    Having good knowledge of Front-end coding like HTML, CSS,
                    JS, React, Tkinter and WordPress development made me a
                    logical thinker.
                  </span>
                </div>
                <div className="portfolio-container12">
                  <h1 className="portfolio-text10">Backend Dev</h1>
                  <span className="portfolio-text11">
                    Mastering Back-end development: expert in server-side tech.
                    Craft efficient, scalable systems for seamless, robust
                    digital performance
                  </span>
                </div>
              </div>
              <div className="portfolio-container13">
                <div className="portfolio-container14">
                  <h1 className="portfolio-text12">UI/UX design</h1>
                  <span className="portfolio-text13">
                    I have gnarly knowledge and experience in UI/UX Designing
                    and I&apos;m ecstatic to provide quality work to my clients.
                  </span>
                </div>
                <div className="portfolio-container15">
                  <h1 className="portfolio-text14">3D Modelling</h1>
                  <span className="portfolio-text15">
                    3D modeling pipeline Technology is my passion and I use to
                    design things whenever I feel lazy or stressed in my free
                    time
                  </span>
                </div>
                <div className="portfolio-container16">
                  <h1 className="portfolio-text16">Software Development</h1>
                  <span className="portfolio-text17">
                    Coding excellence defines our Software Development service.
                    Proficient in diverse languages, we craft robust solutions
                    tailored to your needs, ensuring innovation and reliability
                    in every line of code.
                  </span>
                </div>
              </div>
            </div>
            {/* <textarea
              placeholder="placeholder"
              className="portfolio-textarea textarea"
            ></textarea> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
