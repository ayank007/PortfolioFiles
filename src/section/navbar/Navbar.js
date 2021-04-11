import { React, useEffect, useState } from 'react';
import './navbar.css';
import 'font-awesome/css/font-awesome.min.css';
import $ from 'jquery';
import logo from '../../img/logo2.png';
import Modal from '../../components/cv/Resume';
import DelayLink from 'react-delay-link';
import { HashLink as Link } from 'react-router-hash-link';
const Navbar = ({props,doo}) => {
	const [isOpen, toggle] = useState(false);
	function handlOpenModal(open) {
		toggle(open);
	}
	useEffect(()=>{
		$('.nav1con ul li a').click(function(){
			$('#Navbar').addClass('putBehind');
			$('#Navbar').removeClass('opened');
			$('.hamburger').removeClass('opened');
		});
		$('.AboutDetailsLink').click(function(){
			if(!$('#AboutDetails').hasClass('active')){
				$('#AboutDetails').click();
			}
		});
		$('.ACademicDetailsLink').click(function(){
			if(!$('#ACademicDetails').hasClass('active')){
				$('#ACademicDetails').click();
			}
		});
		$('.goAboutLink').click(function(){
			if(!$('#AboutSandE').hasClass('active')){
				$('#AboutSandE').click();
			}
		});
	},[]);
    return (
    	<>
			<nav id="Navbar" className="putBehind">
				<Modal isOpen={isOpen} handleClose={() => handlOpenModal(false)}>
					<h6>My Resume</h6>
					<iframe src='https://www.youtube.com/embed/48deIoNls_E' className='videoCVIf'></iframe>
				</Modal>
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
				<div className="nav1 darkBg">
					<div className="lines container-fluid">
						<div className="row h-100">
							<div className="col"></div>
							<div className="col"></div>
							<div className="col"></div>
						</div>
					</div>
					<div className="nav1con">
						<div className="heading">
							<div>Menu</div>
						</div>
						<ul>
							<li><Link smooth to="#Root" className="link homeLink">Home</Link></li>
							<li><Link smooth to="#Projects" className="link workLink">My Recent Works</Link></li>
							<li><Link smooth to="#AboutDetails" className="link AboutDetailsLink">About Me</Link></li>
							<li><Link smooth to="#About" className="link goAboutLink">Skills & Experience</Link></li>
							<li><Link smooth to="#ACademicDetails" className="link ACademicDetailsLink">Academic Details</Link></li>
							<li><Link smooth to="#Contact" className="link contactLink">Contact Details</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="nav2">
					<div className="lines container-fluid">
						<div className="row h-100">
							<div className="col"></div>
							<div className="col"></div>
							<div className="col"></div>
						</div>
					</div>
					<div className="nav2con">
						<div className="heading">
							<div>More</div>
						</div>
						<div className="noticeHead">
							Welcome to my Portfolio website. I'm Ayan, a designer and developer
						</div>
						<div className="noticeBg">
							<div className="notice">
								<div onClick={() => handlOpenModal(true)}>Video CV</div>
								
							</div>
						</div>						
						<div className="social">
							<ul className="social-list">
								<li className="media github">
									<a href="https://www.github.com/ayank007" target="_blank">
										<i className="fa fa-github"></i>
									</a>
								</li>
								<li className="media linkedin">
									<a href="https://www.www.linkedin.com/in/ayan-koley-3370a9190" 
										target="_blank">
											<i className="fa fa-linkedin" aria-hidden="true"></i>
									</a>
								</li>
								<li className="media xing">
									<a href="https://www.xing.com/profile/Ayan_Koley" target='_blank'>
									<i className="fa fa-xing" aria-hidden="true"></i></a>
								</li>
								<li className="media gmail">
									<a href="https://mail.google.com/mail/?view=cm&fs=1&to=ayankoley@gmail.com&su=SUBJECT&body=BODY" target='_blank'>
									<i className="fa fa-envelope" aria-hidden="true"></i></a>
								</li>
								<li className="media twitter">
									<a href="https://twitter.com/messages/1129830842065346560-1129830842065346560?text="
										target='_blank'>
										<i className="fa fa-twitter" aria-hidden="true"></i>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
    	</>
    );
}

export default Navbar;