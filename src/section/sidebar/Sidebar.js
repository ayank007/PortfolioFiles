import { React, useEffect } from 'react';
import './sidebar.css';
import $ from 'jquery';
import { HashLink as Link } from 'react-router-hash-link';
import {isMobile} from 'react-device-detect';
const hamBoxME = (e) => {
	if (!isMobile) {
		const ham = document.getElementsByClassName('hamBox')[0]; 
		ham.style.setProperty('--bg',`black`);
		$('.cursor-follower').css('display','none');
		$('.cursor').css('display','none');
	}
}
const hamBoxML = (e) => {
	if (!isMobile) {
		const ham = document.getElementsByClassName('hamBox')[0]; 
		ham.style.setProperty('--x',`50%`);
		ham.style.setProperty('--y',`50%`);
		ham.style.setProperty('--bg',`white`);
		$('.cursor-follower').css('display','block');
		$('.cursor').css('display','block');
	}	
}
const hamBoxMM = (e) => {
	if (!isMobile) {
		const ham = document.getElementsByClassName('hamBox')[0]; 
		ham.style.setProperty('--x',`${e.pageX - window.innerWidth + 80}px`);
		ham.style.setProperty('--y',`${e.pageY - window.pageYOffset}px`);
	}
}
const hamBoxClick = (e) => {
	if(document.getElementById('Navbar').classList.contains('opened')){
        $('#Navbar').removeClass('opened');
        $('.hamburger').removeClass('opened');
        setTimeout(function(){
            $('#Navbar').addClass('putBehind');
        },300);
        document.querySelectorAll('.nav1con ul li').forEach(function(link){
            link.style.animation='';
        });
    }
    else{
        $('#Navbar').addClass('opened');
        $('#Navbar').removeClass('putBehind');
        $('.hamburger').addClass('opened');
        document.querySelectorAll('.nav1con ul li').forEach(function(link,index){
            link.style.animation=`navLinkFade 0.5s ease forwards ${0.3 + index / 11}s`;
        });
    }
}

const Sidebar = () => {
	useEffect(()=>{
        document.addEventListener('scroll',function(){
            if(window.pageYOffset > 200){
				$('.goToTop').addClass('active');
            }
			else{
				$('.goToTop').removeClass('active');
            }
        });
    },[]);
    return (
    	<>
			<div id="Sidebar">
				<div className="hamBox"
					onMouseEnter={ hamBoxME } 
					onMouseLeave={ hamBoxML }
					onMouseMove={ hamBoxMM }
					onClick={ hamBoxClick }
				>
					<div className="hamburger">
						<div className="hamburgerIcon">
							<div>
								<div className="hamLine1"></div>
								<div className="hamLine2"></div>
								<div className="hamLine3"></div>
							</div>
						</div>
					</div>
				</div>
				<div className="sideNav">
					<div>
						<Link smooth to="#Projects" className="link workLink">My Projects</Link>
					</div>
				</div>
				<div className="sideContact">
					<div>
						<Link smooth to="#Contact" className="link">Contact Me</Link>
					</div>
				</div>
				<Link className="goToTop" smooth to="#Root">
					<div>
						<svg width="23" height="26" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M13.0607 1.37473C12.4749 0.788944 11.5251 0.788944 10.9393 1.37473L1.3934 10.9207C0.807611 11.5065 0.807611 12.4562 1.3934 13.042C1.97919 13.6278 2.92893 13.6278 3.51472 13.042L12 4.55671L20.4853 13.042C21.0711 13.6278 22.0208 13.6278 22.6066 13.042C23.1924 12.4562 23.1924 11.5065 22.6066 10.9207L13.0607 1.37473ZM13.5 27.7202L13.5 2.43539H10.5L10.5 27.7202H13.5Z" fill="black"/>
						</svg>                    
					</div>
				</Link>
			</div>
    	</>
    );
}

export default Sidebar;