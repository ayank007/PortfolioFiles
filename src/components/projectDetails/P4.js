import {React, useEffect} from 'react';
import DelayLink from 'react-delay-link';
import './p1.css';
import $ from 'jquery';
import logo from '../../img/logo2.png';
import Contact from '../../section/contact/Contact';

const ProjectDetails4 = ({props, doo}) => {
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
        <div className='projectDetails1 projectDetails4'>
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
                    <h4>Travel Agency</h4>
                    <p className='toolbelt'>Toolbelt : Figma, Html, Css, javaScript, Google Api</p>
                    <img className='mainImg' src='https://lh3.googleusercontent.com/fWO27zKwo4jmjR9ziu7Vlx8dX0vlMPXnV9IgeO14DO-WY5nXkNEp_JtkiyrkAUoJnqgdvYIXI_EvQUnMth88EOlc5oZmPpoekz5Qx--wBYIRPBVKbuMPgzHI-6H5WKqYn1d0dyHF5Q=w2400' />    
                    <p className='intro middleTxt'>
                    A design of travel agency or tour operator sketched in figma and a dashboard to keep track of everything made with html, css, js interacting with google charts api.
                    </p>
                    <img className='mainImg' src='https://lh3.googleusercontent.com/6ZqZTWP3FLPJ5DL46mLzapdrNSijM1lJwrrxlf0C8IpNoSSuB8caNoS501s2dVKeJRJsB2B9EEBZhdP1_TBUK_B9LN4BWTNJXh6BA8D-gYDYMmsknAHS0De3lPeA6SMAfr0_47gcXw=w2400' />
                    <img className='mainImg' src='https://lh3.googleusercontent.com/s8fQ-FDpfakmDItr4SYzFWNw-dM-1GctyURjFAmGbe-FMx-e2EUSpTT4G9N47fxmnCM_NlyWQeHuXuUpx0gDffYDiANREXRz8LO3JGNee6eRlw5zeESotpCb5BCjqNra6xc-g1d9EA=w2400' />
                                        
                </div>
                <Contact />
            </div>
        </div>
    );
}

export default ProjectDetails4;