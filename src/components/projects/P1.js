import { React, useEffect } from 'react';
import $ from 'jquery';
import DelayLink from 'react-delay-link';
import anythingZoomer from '../../../node_modules/anythingzoomer/dist/jquery.anythingzoomer.min.js';
import './p1.css';
const P1 = ({props,doo}) => {
    useEffect(()=>{
        $("#zoom2").anythingZoomer();
    },[]);
    return (
        <div className="project ">
        <DelayLink to='/projectDetails1' delay={1200}>            
            <div className="project1 hello" onClick={doo}>
                <div id="zoom2">
                    <div className="small">
                        <img src='https://lh3.googleusercontent.com/-w9Ppmqqmz5yNFKPkwWx5Ro2pW9fOT9I3grbvT8qhccNDPsTQ-c-lWp9_0iWb-AcEXWqRijk7ie0xCiboNDsgwPEhxftfZjjyq0nFJpOofSKnSwZ6LG9Fy3izde_qXGHlt-6wXy4_w=w2400' />    
                    </div>
                    <div className="large">
                        <img src='https://lh3.googleusercontent.com/-w9Ppmqqmz5yNFKPkwWx5Ro2pW9fOT9I3grbvT8qhccNDPsTQ-c-lWp9_0iWb-AcEXWqRijk7ie0xCiboNDsgwPEhxftfZjjyq0nFJpOofSKnSwZ6LG9Fy3izde_qXGHlt-6wXy4_w=w2400' />    
                    </div>
                </div>
            </div>
        </DelayLink>
        <h5>Student Portfolio</h5>
        <p>( html, css, bootstrap, js, jquery )</p>
        </div>
    );
}

export default P1;