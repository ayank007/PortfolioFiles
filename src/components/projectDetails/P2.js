import {React, useEffect} from 'react';
import DelayLink from 'react-delay-link';
import './p1.css';
import $ from 'jquery';
import logo from '../../img/logo2.png';
import Contact from '../../section/contact/Contact';

const ProjectDetails2 = ({props, doo}) => {
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
                    <h4>IT Sector Landing Page</h4>
                    <p className='toolbelt'>Toolbelt : Html, Css, Js, Bootstrap, jQuery</p>
                    <img className='mainImg' src='https://lh3.googleusercontent.com/b_cvYrB-VTh4HzphPTM4gaXMKsGRh_cnAwF_6jYdeijYgu6ATZ34tHetmYH9KEiu2VfixtjCi0sSkF5uSx2JsOhkyEN41kRuf9iUatVDp2iSUys5I7vh1Bnwi-AO44KF33Ei0zsBNQ=w2400' />    
                    <p className='intro middleTxt'>
                    It's an It sector landing page developed mainly with html ,css and js. The website has 5 sections that are header section, service section, Portfolio section, About us, testimonials and a contact ussection. The theme is based on two colors, the background is a dark faded blue and it's other shades and texts are on white. It's not published yet.
                    </p>
                    <img className='mainImg' src='https://lh3.googleusercontent.com/oy4IC3NvxWa4w3IktKeFB4oJsCsb23vxt9b7zPcVME7bv7fewAbdU5laF0OJoJxuu8-umytWWH2Jnz9poyQkm_CFouMrJTJEMFjiKFjehdzZiZ79GK31IuZwziluz2h_6QoSaylOtA=w2400' />
                    <p className='description middleTxt'>
                    The header section has a vanilla javaScript typing animation along with some bubble animation triggered on mouse pointer move events. It has one sticky sidebar for quick contact for clients who instantly wants to start a project along with a whatsapp button that redirects and opens a whatsapp chat to a given number. The navbar is initially hidden and shows up on the hamburger menu with a scaling and fading animation. The service page is implemented with swiper js showing the services provided with proper thumbnails and a revealing animation. 
                    </p>
                    <img className='mainImg' src='https://lh3.googleusercontent.com/3-5CjcQzwKXl0kA5B_yT2LkDVtObuQY4BIxk8l1rQj1ufA4d7ujPzBsOrt_IcD9KPFRiTnZhgU0poaVtl_yIIX5RXf_duQeldxUQKE29t0BgNdfXKeg7RRjD7Ht_U_GFFU8qMHvVZQ=w2400' />
                    <p className='description middleTxt'>
                        
                    </p>
                    <img className='mainImg' src='https://lh3.googleusercontent.com/U16-_7BYbQ56eS1WkAQHWXLUoOTV0YoxcKcfW7ZY6z30gMNsp_fcc8EfDxzeZyOc9BuxOvA5FmMdOK2fI3T-BaqtThMKHHcZEb9Hhj0DJQsm-FHcINR853MBHUZuvxtNDkfrPmWacA=w2400' /> 
                    
                    <img className='mainImg' src='https://lh3.googleusercontent.com/8KEx9AEICWkwuojEW77xwK9sqCW7LccLs21pxN2TRpZAv-KzykheLhrXzfOItxHEjj-GvuBOe7s6CCXExJnLoK_jWAL3x91hHt8ZYxQIEN5kQK5lKgN4E5vAPgZUjhVC2KL8Glx7Ow=w2400' />
                    
                </div>
                <Contact />
            </div>
        </div>
    );
}

export default ProjectDetails2;