import { React } from 'react';
import DelayLink from 'react-delay-link';
import './p5.css';
const P5 = ({props,doo}) => {
    return (
    	<div className="project" id='project5'>
        <DelayLink to='/projectDetails5' delay={1200}>
            <div className='project5 link hello' onClick={doo}>
                <img className='img1' src='https://lh3.googleusercontent.com/h81vCr40D66NkmuA6-s2FOMmu5XQZCP7xAbrHt3XpbaLLAeADzJS1QJLGayJP_7Jov8X5R_Kttv2Ir7x59A2eKXRYkQeBThezMCRoXKZEB16AkWUsCAO8YEkva8vsEpM67K9ggjyOA=w2400' />
                <img className='img2' src='https://lh3.googleusercontent.com/cj9Lf6OFhiepyeoRmv7fcJyHihwLjvWhERzHNFHci_tsO7hYjL3aWJEG5B4mlL0qczuR8yOITk-rKm-fHX5SIXQMMgnsTQcgIiKZgN8DucQhjUP8TOrPgBd4jQZGAUXnVHCocTn7zg=w2400' />
            </div>
        </DelayLink>
            <h5>Hospital & Diagnostic Center</h5>
            <p>( html, css )</p>
    	</div>
    );
}

export default P5;