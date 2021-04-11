import { React } from 'react';
import './p7.css';
import DelayLink from 'react-delay-link';
const P7 = ({props,doo}) => {
    return (
    	<div className="project " id='project7'>
            <DelayLink to='/projectDetails7/#Root' delay={1200}>
                <div className='project7 link hello' onClick={doo}>
                    <img src='https://lh3.googleusercontent.com/y4RkF9qNUl3HH1bZfltsAothCIWpdroVzf8AaRebkntfuetfmXfXpi4XOOUEieWUua5Jr8Y-wnM-leZOL2Ew5ZfJY0HaVu8Yal5CHrTFMGBBhSS-Oh1zNi7ZddF5w9_KSLokdpFiIw=w2400' />
                </div>
            </DelayLink>
            <h5>SQL Injection</h5>
    	</div>
    );
}

export default P7;