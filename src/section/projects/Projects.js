import { React } from 'react';
import $ from 'jquery';
import './projects.css';
import P3 from '../../components/projects/P3';
import P4 from '../../components/projects/P4';
import P5 from '../../components/projects/P5';
import P1 from '../../components/projects/P1';
import P6 from '../../components/projects/P6';
import P7 from '../../components/projects/P7';
import P2 from '../../components/projects/P2';
const Projects = ({props,doo}) => {
    let currentPos = window.pageYOffset;
    const update = () => {
        const newPos = window.pageYOffset;
        const diff = newPos - currentPos;
        const speed = diff * 0.035;
        $('.gridProjects').css('transform',`skewY(${ speed }deg)`);
        currentPos = newPos;
        requestAnimationFrame(update);
    }
    update();
    return (
    	<div className="darkBg section" id="Projects">
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
            <span className='phead'>
                Projects
            </span>
            <div className='projectHead'>
                <h4>Some Of My Works</h4>
            </div>
            <div id='gridProjects' className='gridProjects'>
                <P3 doo={doo} />
                <P4 doo={doo} />
                <P5 doo={doo} />
                <P1 doo={doo} />
                <P6 doo={doo} />
                <P7 doo={doo} />
                <P2 doo={doo} />
            </div>
    	</div>
    );
}

export default Projects;