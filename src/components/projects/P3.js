import { React } from 'react';
import DelayLink from 'react-delay-link';
import './p3.css';
const P3 = ({props,doo}) => {
    return (
    	<div className="project">
        <DelayLink to='/projectDetails3' delay={1200}>
            <div className="project3 link hello" onClick={doo}>
                <img src='https://lh3.googleusercontent.com/Xj6JswkU0xG6Ey6sHDwA3Y4ELTlyimgjFC-2IaP69bgDF9JLmhpDH0_EZWXQ8w_xdUQ0AuUcpD3qzwhGo_VanemWxKmVFGDISJKY7-ExMkV4JH1__y27IpgtSQp5XiNEjNdpq7ky4A=w2400' />
            </div>
        </DelayLink>
            <h5>Digital Agency</h5>
            <p>( html, css, js, jquery, bootstrap )</p>
    	</div>
    );
}

export default P3;