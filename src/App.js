import { React, useEffect, useState } from 'react';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Cursor} from './components/cursor/Cursor';
import $ from 'jquery';
import { HashRouter as Router,Switch,Route } from 'react-router-dom';
import Home from './Home';
import './App.css';
import Navbar from './section/navbar/Navbar';
import Sidebar from './section/sidebar/Sidebar';
import ProjectDetails1 from './components/projectDetails/P1';
import ProjectDetails2 from './components/projectDetails/P2';
import ProjectDetails3 from './components/projectDetails/P3';
import ProjectDetails4 from './components/projectDetails/P4';
import ProjectDetails5 from './components/projectDetails/P5';
import ProjectDetails6 from './components/projectDetails/P6';
import ProjectDetails7 from './components/projectDetails/P7';

const App = () => {
    const [route, setRoute] = useState('Home');
    const onRouteChange = (route) => {
        setRoute(route)
    }
    const doo=()=>{
        console.log('heloooooooooooooooooooooooooooooo')
        $('.hello').addClass('cursor-none');
        $('.pageX').addClass('come');
        setTimeout(function () {
            $('.pageX').addClass('go');
        },1200);
        setTimeout(function(){
            $('.pageX').removeClass('go');
            $('.pageX').removeClass('come');
            $('.hello').removeClass('cursor-none');
        },2600);
    }

    useEffect(()=>{
        $(".link").on("mouseenter", function() {
            $('.cursor').addClass("active");
            $('.cursor-follower').addClass("active");
        });
        $(".link").on("mouseleave", function() {
            $('.cursor').removeClass("active");
            $('.cursor-follower').removeClass("active");
        });
        $(".project7").on("mouseenter", function() {
            $('.cursor-follower').addClass("activeVideo");
        });
        $(".link").on("mouseleave", function() {
            $('.cursor-follower').removeClass("activeVideo");
        });
    },[]);
    return (
    	<Router>
            <div className="pageX1 pageX"></div>
            <div className="pageX2 pageX"></div>
            <div className="pageX3 pageX"></div>
            <div className="pageX4 pageX">
                <div className='pageTxt'>Ayan is Thinking</div>
            </div>
            <Cursor/>

            <div id="Main">
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
                <Navbar doo = { doo } />
                <Sidebar/>
                <Switch>
                    <Route path='/' exact
                        render={props => <Home doo = { doo } />}
                    />
                    <Route path='/ProjectDetails1' exact
                        render={props => <ProjectDetails1 doo = { doo } />}
                    />
                    <Route path='/ProjectDetails2' exact
                        render={props => <ProjectDetails2 doo = { doo } />}
                    />
                    <Route path='/ProjectDetails3' exact
                        render={props => <ProjectDetails3 doo = { doo } />}
                    />
                    <Route path='/ProjectDetails4' exact
                        render={props => <ProjectDetails4 doo = { doo } />}
                    />
                    <Route path='/ProjectDetails5' exact
                        render={props => <ProjectDetails5 doo = { doo } />}
                    />
                    <Route path='/ProjectDetails6' exact
                        render={props => <ProjectDetails6 doo = { doo } />}
                    />
                    <Route path='/ProjectDetails7' exact
                        render={props => <ProjectDetails7 doo = { doo } />}
                    />
                </Switch>
            </div>
    	</Router>
    );
}

export default App;