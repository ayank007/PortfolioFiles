import {React, useEffect} from 'react';
import DelayLink from 'react-delay-link';
import './p1.css';
import $ from 'jquery';
import logo from '../../img/logo2.png';
import Contact from '../../section/contact/Contact';

const ProjectDetails6 = ({props, doo}) => {
    useEffect(()=>{
        $('.homeLink').click(function(){
            doo();
            setTimeout(function(){
                window.location.href=`/Portfolio/#/#Root`;
            },1200);
        });
        $('.workLink').click(function(){
            doo();
            setTimeout(function(){
                window.location.href=`/Portfolio/#/#Projects`;
            },1200);
        });
        $('.contactLink').click(function(){
            doo();
            setTimeout(function(){
                window.location.href=`/Portfolio/#/#Contact`;
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
                    <h4>Wedding Planner Home Page</h4>
                    <p className='toolbelt'>Toolbelt : Html, Css, Js, Bootstrap, jQuery</p>
                    <img className='mainImg' src='https://lh3.googleusercontent.com/bBAB-XMFSYAHhqr-WcuARcWjBekcGvsW47ZHxevJh2P2WY9w4Trec1j99vZ8Lmf6GJMgJKEzvx4wKALFgpmtHJ6UEC0EIO-UJTp8Pk4Mpqhz4-uOOgJal4BzVEYn5Q0WsCyR9zVANQ=w2400' />
                    <img className='mainImg' src='https://lh3.googleusercontent.com/zI7T4u9nJPAnGgDVMNod-DM_k39Z0SI-hay1D1bLD_p4GLpmAL4JUEkI7VXHPCC4bb-sZA2lTcvlytA5Gh7nfz27N2ZYvPHA3wgFYN2b9uZVEvzfHeDIKEpKTUqtPTBjg8AAnQKAgw=w2400' />
                    <p className='middleTxt'>
                        The entire website is based on the benefits and advantages of choosing the Fortunate Decorator wedding planner over any other business. It can also be used in other businesses.
                    </p>
                    <img className='mainImg' src='https://lh3.googleusercontent.com/xoNlkrx53SZG3YE4-m8JWc9Xmg60yPYFau1AZUzd9OlY1gqL2JvnIiplLpCvN-wfmdeSKsWXkwHuWlK4G2k5tZQ9KssoR2g3wn0plJ9ti3IyJYr0eIY588pCHTPP7oyFMJStwZa5Mw=w2400' />
                    <img className='mainImg' src='https://lh3.googleusercontent.com/t_7qx08n9-izurhGi3nEjLphaPjERL9qSM-gqVTCQQtB5mZ6kkK_YaslsD_YSTfybg8lXKmz08IbMzMvQRO8LhylLS_WDvIGxovFbfClfZcQ2izE53MnfKbG9TSUBJpHATQgHNukYA=w2400' />
                    <img className='mainImg' src='https://lh3.googleusercontent.com/iuiH-cSH0_AZgPA5TfQaPwbPNBBQ26YA0iS6DdhhPXXfeTP7qKo7SGzXdW4hwOz6vWZxjlD-bVv8v_pZJzGWGaoQ3Awv1Da_MNC0Q2x-bhvTngzGVeHNB_VSzqyfiV7USrD5tUZDDA=w2400' />
                    <img className='mainImg' src='https://lh3.googleusercontent.com/j-Yo3n7Xq0D10Vf_zL6nHxKWaz5V_ACOrLmixKqSixNXHCpyeB-OAPAI-lrU-gI4Ha1uGotKQwfEiBNbmEm-Tmmd-yfKn6Uow_Oyg48XzrcFdWXuPHnyOR45jtHxlouOiHEKjIjCDw=w2400' />
                    <img className='mainImg' src='https://lh3.googleusercontent.com/mZUWrO4sJBeZtMuSFcUNzpYI8jh78vdiTiSDMdJqj349Q8tzB0EGogqSVnNCXxlz8aHfsBwWhsX9eGQ2a796E4jFJxw_81GGAaJtsxNQ34gOUqE4vNeJP5tWzO23nYdSVaUK3hBZBQ=w2400' />
                </div>
                <Contact />
            </div>
        </div>
    );
}

export default ProjectDetails6;