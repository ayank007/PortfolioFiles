import { React } from 'react';
import './p6.css';
import DelayLink from 'react-delay-link';
const P6 = ({props,doo}) => {
    return (
    	<div className="project" id='project6'>
        <DelayLink to='/projectDetails6' delay={1200}>
            <div className='project6 link hello' onClick={doo}>
                <img src='https://lh3.googleusercontent.com/bBAB-XMFSYAHhqr-WcuARcWjBekcGvsW47ZHxevJh2P2WY9w4Trec1j99vZ8Lmf6GJMgJKEzvx4wKALFgpmtHJ6UEC0EIO-UJTp8Pk4Mpqhz4-uOOgJal4BzVEYn5Q0WsCyR9zVANQ=w2400' />
            </div>
        </DelayLink>
            <h5>Wedding Planner Website</h5>
            <p>( html, css, js, jquery )</p>
    	</div>
    );
}

export default P6;