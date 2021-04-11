import {React, useEffect} from 'react';
import DelayLink from 'react-delay-link';
import './p1.css';
import $ from 'jquery';
import logo from '../../img/logo2.png';
import Contact from '../../section/contact/Contact';

const ProjectDetails5 = ({props, doo}) => {
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
        $('.contactLink').click(function(){
            doo();
            setTimeout(function(){
                window.location.href=`/Portfolio/#/#Contact`;
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
                    <h4>Diagnostic Center and Hospital Management Website</h4>
                    <p className='toolbelt'>Toolbelt : Html, Css, Bootstrap, Bootstrap Studio</p>
                    <img className='mainImg' src='https://lh3.googleusercontent.com/K7PX0ZkT6mHq9DOWS1ZFuwJE3RI2sVGGrJwpqjMb0zz6ZarhX1gmn1igq5DghFli3ZWlGeroT-sYtUTjZhwM-AQEL-zBOY-vx3D6aLRmBfaI5n8GAO16NVKGtE5l_s-B-bebuFKCkw=w2400' />
                    <img className='mainImg' src='https://lh3.googleusercontent.com/Kv4tZmX-XpXthSyWaONe2gv9_yjhdkIqONZy_p9vU1YVpGKLlW7fuXS03R4xycMGtFKfyMuIPLChw8rXmd5d4YQRGeaz-TLZwngt0M4_8o1cThtVMt3MRcSTek48V5w_134Qym7Z4g=w2400' />
                    <img className='mainImg' src='https://lh3.googleusercontent.com/h81vCr40D66NkmuA6-s2FOMmu5XQZCP7xAbrHt3XpbaLLAeADzJS1QJLGayJP_7Jov8X5R_Kttv2Ir7x59A2eKXRYkQeBThezMCRoXKZEB16AkWUsCAO8YEkva8vsEpM67K9ggjyOA=w2400' />
                    <img className='mainImg' src='https://lh3.googleusercontent.com/fnlszBmtUNx225Yph6okI6Uja3vDtlyc45c3KNkekS6HB5JIK1YMXjm-NXPegmMI1fktm-g7xmch0G2QEH48fWP_o2WDFvrJoiUC58gTr8p9Fy8NTkZ-lazg6vkiLcngt6am-eUfrg=w2400' />
                    <img className='mainImg' src='https://lh3.googleusercontent.com/cj9Lf6OFhiepyeoRmv7fcJyHihwLjvWhERzHNFHci_tsO7hYjL3aWJEG5B4mlL0qczuR8yOITk-rKm-fHX5SIXQMMgnsTQcgIiKZgN8DucQhjUP8TOrPgBd4jQZGAUXnVHCocTn7zg=w2400' />

                </div>
                <Contact />
            </div>
        </div>
    );
}

export default ProjectDetails5;