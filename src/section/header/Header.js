import { React, useEffect } from 'react';
import { init } from 'ityped';
import './header.css';
import logo from '../../img/logo2.png';
import { HashLink as Link } from 'react-router-hash-link';
const Header = () => {
    useEffect(()=>{
        init('#whatIDo', { showCursor: true, 
                        strings: ['An Engineer !', 'Web Designer', 'Full-Stack Developer' ],
                        typeSpeed:  110, 
                        backSpeed:  55,
                        backDelay:  3000,
                    })
    },[]);
    
    return (
    	<div className="darkBg section" id="Heading">
            <div className="logo">
                <img src={ logo } alt="logo" />
                <div>
                    <h4>
                        <b>  
                            Ayan Koley
                        </b>
                    </h4>
                    <p>Portfolio</p>
                </div>
            </div>
			<div className="lines container-fluid">
                <div className="row h-100">
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                </div>
            </div>
    		
            <div className='headingCard'>
                <br/>
                <h5>Hello, my name is Ayan</h5>
                <div className='whatIDo'><div id='whatIDo'></div> &nbsp;</div>
                <p className='shortIntro'>
                    I am a fresher and currently pursuing my 
                    B-Tech degree from University of Engineering & Management, Kolkata. I 
                    shall graduate in june, 2021. I've been trained in various technologies and 
                    worked in many group projects. Looking forward to a full time job.
                </p>
                <div className='btns'>
                    <div className='link'>
                        <Link smooth to='#About'>
                            Know Me Better
                        </Link>
                    </div>
                    <div className='link'>
                        <Link smooth to='#Projects'>
                            See My Projects
                        </Link>
                    </div>
                </div>
            </div>
    	</div>
    );
}

export default Header;