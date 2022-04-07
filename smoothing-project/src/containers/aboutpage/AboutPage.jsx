import React from 'react'
import "./aboutpage.css";
import sahil from "../../assets/sahil.jpeg";
import twitter from "../../assets/twitter.svg";
import telegram from "../../assets/telegram.svg";
import github from "../../assets/github.svg";
import  FadeIn  from 'react-fade-in';

const AboutPage = () => {
  return (
    <div className='smoothing__aboutpage section__padding'>
        <FadeIn>
        <div className="smoothing__aboutpage-heading">
            Developed by
        </div>
        <div className='smoothing__aboutpage-container'>
            <div className='smoothing__aboutpage-image'>
                <img src={sahil} alt="Sahil Silare"/>
            </div>
            <div className='smoothing__aboutpage-content'>
                <div className='smoothing__aboutpage-content-heading'>
                    Sahil Silare
                </div>
                <div className='smoothing__aboutpage-content-subheading'>
                    Full Stack Developer (3rd year Computer Science Undergraduate at NIT Raipur)
                </div>
                <div className='smoothing__aboutpage-content-paragraph'>
                I'm a Web developer, Competitive coder and Hackathon enthusiast.

I'm doing my undergrad at the National Institute of Technology - Raipur graduating with a B.Tech degree in Computer Science and Engineering, and I spent most of my time coding. I love to design and develop webpages, solving complex AI problems, and building robust backend systems.
                </div>
                <div className='smoothing__aboutpage-content-contact_images'>
                <div className='smoothing__aboutpage-content-contact_image-twitter'>
                    <img src={twitter} alt="twitter"/>
                    </div>
                    <div className='smoothing__aboutpage-content-contact_image-twitter'>
                    <img src={telegram} alt="twitter"/>
                    
                    </div>
                    <div className='smoothing__aboutpage-content-contact_image-twitter'>
                    <img src={github} alt="twitter"/>
                    
                    </div>
                    
                </div>
            </div>
        </div>
        </FadeIn>
    </div>
  )
}

export default AboutPage