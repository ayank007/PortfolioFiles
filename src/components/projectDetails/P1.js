import {React, useEffect} from 'react';
import DelayLink from 'react-delay-link';
import './p1.css';
import $ from 'jquery';
import logo from '../../img/logo2.png';
import Contact from '../../section/contact/Contact';

const ProjectDetails1 = ({props, doo}) => {
    useEffect(()=>{
        $('.homeLink').click(function(){
            doo();
            setTimeout(function(){
                window.location.href=`/Portfolio/#/#Root`;
            },1200);
        });
        $('.contactLink').click(function(){
            doo();
            setTimeout(function(){
                window.location.href=`/Portfolio/#/#Contact`;
            },1200);
        });
        $('.workLink').click(function(){
            doo();
            setTimeout(function(){
                window.location.href=`/Portfolio/#/#Projects`;
            },1200);
        });
        $('.goAboutLink').click(function(){
            doo();
            if(!$('#AboutSandE').hasClass('active')){
				$('#AboutSandE').click();
			}
            setTimeout(function(){
                window.location.href=`/Portfolio/#/#About`;
            },1200);
        });
        $('.AboutDetailsLink').click(function(){
            doo();
            if(!$('#ACademicDetails').hasClass('active')){
				$('#ACademicDetails').click();
			}
            setTimeout(function(){
                window.location.href=`/Portfolio/#/#AboutDetails`;
            },1200);
        });
        $('.ACademicDetailsLink').click(function(){
            doo();
            if(!$('#AboutDetails').hasClass('active')){
				$('#AboutDetails').click();
			}
            setTimeout(function(){
                window.location.href=`/Portfolio/#/#ACademicDetails`;
            },1200);
        });
    },[]);
    return(
        <div className='projectDetails1'>
            <div className='section darkBg'>
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
                <DelayLink to='/' delay={1200}>
                    <div className="logo hello" onClick={ doo }>
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
                </DelayLink>
                
                <div className="Content">
                    <h4>Student Portfolio Website</h4>
                    <p className='toolbelt'>Toolbelt : Html, Css, Js, Bootstrap, jQuery, animsition, skrollr</p>
                    <img className='mainImg' src='https://lh3.googleusercontent.com/-w9Ppmqqmz5yNFKPkwWx5Ro2pW9fOT9I3grbvT8qhccNDPsTQ-c-lWp9_0iWb-AcEXWqRijk7ie0xCiboNDsgwPEhxftfZjjyq0nFJpOofSKnSwZ6LG9Fy3izde_qXGHlt-6wXy4_w=w2400' />    
                    <p className='intro'>It is one of my very first projects I have worked on. It can be used as a 
                        student cv for projects outside college and for getting selected for internship 
                        or training programs. It is developed using basic html, css and js with the 
                        help of some libraries like jquery. 
                    </p>
                    <p className='workingDemo'><a href='https://ayank007.github.io/StudentPortfolio/home/' target="_blank">Working Demo</a></p>
                    <p className='description'>
                        It's a single page website with multiple sections. The sections can be changed with a navbar situated on the left side. The interpage animation is placed with the help of animsition library which is made for typeScript apps but i have implemented it in regular html, css website. The website has a typing animation in the home page and a rubber band animation in each page that makes an animated transition on hover effect over each letter. Both are implemented using pure vanilla js. The webpage doesn't have a local editable backend but with a google sheet as backend to store the contact form data. For me it is a better solution for a small scale landing page as the owner can view the message anywhere with a single click without checking the database.
                    </p>
                </div>
                <Contact />
            </div>
        </div>
    );
}

export default ProjectDetails1;