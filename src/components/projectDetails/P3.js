import {React, useEffect} from 'react';
import DelayLink from 'react-delay-link';
import './p1.css';
import $ from 'jquery';
import logo from '../../img/logo2.png';
import Contact from '../../section/contact/Contact';

const ProjectDetails3 = ({props, doo}) => {
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
                    <h4>Digital Agency Website</h4>
                    <p className='toolbelt'>Toolbelt : Html, Css, Js, Bootstrap, jQuery, figma</p>
                    <img className='mainImg' src='https://lh3.googleusercontent.com/Xj6JswkU0xG6Ey6sHDwA3Y4ELTlyimgjFC-2IaP69bgDF9JLmhpDH0_EZWXQ8w_xdUQ0AuUcpD3qzwhGo_VanemWxKmVFGDISJKY7-ExMkV4JH1__y27IpgtSQp5XiNEjNdpq7ky4A=w2400' />    
                    <p className='intro middleTxt'>
                    It's a small scaled digital agency website with header section, about, portfolio, contact us section in different routes. The website is made with html, css and vanilla javaScript. Some svg images with texts and icons made in figma are used here to describe the services properly. The theme is a combination of two different light blue shades with white. It's not published yet. 
                    </p>
                    <img className='mainImg' src='https://lh3.googleusercontent.com/fOlmogM7U9QgOT3_fVUgCJiCRV3AQvcCey9PNyJuqJLMR1ivv_hJsNPKCaNa7nl53lNZnjH5panJzwI-9RhLK17zMwx_Y1qqsS5tcLSB4GdCxlkj6VpFumeWF7mm90YQ9VKqjcSREg=w2400' />
                    <img className='mainImg' src='https://lh3.googleusercontent.com/VZ9P__pjgXHz5Tzj-tFKrwEQkTVlVbBoYaKBCwxNo8nlbW0Wz4camdapikil90Od04OxBeWKN8R997C9h-zlfEBQB2L2BpYnmv_6uxW0IgyJ5wAV9IUjUcqTqvcZnnQ-P3SJcvCNHw=w2400' />
                    <img className='mainImg' src='https://lh3.googleusercontent.com/woOgPG32ZoZbXdLaaqHWIP_YjyWm_9k4rQ99BIxFX1Ffpx85ddEkabhLepoiDBHg_V3AeyxQgP5Lu3h2TzVSRNKmxD37jAastBTPw8g4eZ05GQs7aaDw_PXtYqnjdT8wnS1RXSfXDw=w2400' />
                                        
                </div>
                <Contact />
            </div>
        </div>
    );
}

export default ProjectDetails3;