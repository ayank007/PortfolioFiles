import { React, useEffect, useRef } from 'react';
import hoverEffect from 'hover-effect';
import wn from '../../img/whiteNoise.jpeg';
import img1 from '../../img/MC1.png';
import img2 from '../../img/MC2.png';
import DelayLink from 'react-delay-link';
import './p2.css';
const P2 = ({props,doo}) => {
    const WP=useRef(null);
    useEffect(()=>{
        const effect = new hoverEffect({
            parent: WP.current,
            intensity: 0.8,
            speedIn: .9,
            speedOut: .5,
            image1: img1,
            image2: img2,
            displacementImage: wn
        });
    },[]);
    return (
    	<div className="project "id='project2'>
        <DelayLink to='/projectDetails2' delay={1200}>
            <div className="project2 hello" onClick={doo}  ref={WP}>
            </div>
        </DelayLink>
            <h5>It Sector Website</h5>
            <p>( html, css, js, jquery, bootstrap )</p>
    	</div>
    );
}

export default P2;