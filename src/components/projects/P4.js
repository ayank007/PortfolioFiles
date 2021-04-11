import { React } from 'react';
import DelayLink from 'react-delay-link';
import './p4.css';
const P4 = ({props,doo}) => {
    return (
    	<div className="project hello" id='project4'>
        <DelayLink to='/projectDetails4' delay={1200}>
            <div className='project4 hello' onClick={doo}>
                <div className='project4con'>
                    <img className='img1' src='https://lh3.googleusercontent.com/6ZqZTWP3FLPJ5DL46mLzapdrNSijM1lJwrrxlf0C8IpNoSSuB8caNoS501s2dVKeJRJsB2B9EEBZhdP1_TBUK_B9LN4BWTNJXh6BA8D-gYDYMmsknAHS0De3lPeA6SMAfr0_47gcXw=w2400' />
                    <img className='img2' src='https://lh3.googleusercontent.com/s8fQ-FDpfakmDItr4SYzFWNw-dM-1GctyURjFAmGbe-FMx-e2EUSpTT4G9N47fxmnCM_NlyWQeHuXuUpx0gDffYDiANREXRz8LO3JGNee6eRlw5zeESotpCb5BCjqNra6xc-g1d9EA=w2400' />
                </div>
            </div>
        </DelayLink>
            <h5>Travel Agency</h5>
            <p>( figma, html, css, api )</p>
    	</div>
    );
}

export default P4;