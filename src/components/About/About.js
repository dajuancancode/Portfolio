import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import { StyledAbout } from './About.styled';


const About = () => {
    return (
        <StyledAbout>
            <h1>About</h1>
            <div className="aboutContent">
                <div className="aboutParagraphs">
                    <p>
                    My name is DaJuan Harris and I am a full stack web and mobile developer from Miami Florida. I have experience in working with a variety of tools and languages to build lightweight applications that are also perform well across many different devices.
                    </p>
                    <p>
                    Creating applications is something that I am extremely passionate about, and I always find myself hungry to learn more about the industry. This allows me to quickly adopt new languages and technologies that can enhance anything I put my hand to.
                    </p>
                    <p>
                    I’m also a student at Florida International University, where I am studying to obtain a degree in Computer Science. After graduating, I plan to enter the workforce, or start my own business.
                    </p>
                </div>

                <div className="skillsContent">
                    <div className="border"></div>
                    <div className="skillContainer">
                        <p>Languages</p>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>Python</li>
                            <li>Java</li>
                            <li>C++</li>
                        </ul>
                    </div>
                    <div className="skillContainer">
                        <p>Frameworks &amp; Tools</p>
                        <ul>
                            <li>Git / Github</li>
                            <li>React</li>
                            <li>React Native</li>
                            <li>Flask</li>
                            <li>Node JS</li>
                            <li>Express</li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </StyledAbout>
    )
}

export default About