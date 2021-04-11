import React, {useState, useEffect} from 'react';
import $, { fn } from 'jquery';
import {
    motion,
    useViewportScroll,
    useSpring,
    useTransform
  } from "framer-motion";
import Header from './section/header/Header';
import Projects from './section/projects/Projects';
import About from './section/about/About';
import Contact from './section/contact/Contact';

const Home = ({props,doo}) => {
    const [isScrollingComplete, setisScrollingComplete] = useState(true);
    const { scrollYProgress } = useViewportScroll();
    const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
    const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

    useEffect(() => yRange.onChange(v => setisScrollingComplete(v >= 1)), [yRange]);
    useEffect(()=>{
        var hi=$('.tagcloud');
        for(let i=1;i<hi.length;i++){
            hi[i].remove()
        }
    },[isScrollingComplete]);

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

        document.addEventListener('scroll',function(){
            if(window.pageYOffset < 200){
				$('.scrollProgress').addClass('Opacity');
				$('.gladToHaveYou').addClass('Opacity');
            }
			else{
				$('.scrollProgress').removeClass('Opacity');
				$('.gladToHaveYou').removeClass('Opacity');
            }
        });
    },[]);
    return(
        <div className="home">
            <svg className="progress-icon scrollProgress Opacity" viewBox="0 0 60 60">
                <motion.path
                    fill="none"
                    strokeWidth="5"
                    stroke="white"
                    strokeDasharray="0 1"
                    d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
                    style={{
                        pathLength,
                        rotate: 90,
                        translateX: 5,
                        translateY: 5,
                        scaleX: -1 // Reverse direction of line animation
                    }}
                />
                <motion.path
                    fill="none"
                    strokeWidth="5"
                    stroke="white"
                    d="M14,26 L 22,33 L 35,16"
                    initial={false}
                    strokeDasharray="0 1"
                    animate={{ pathLength: isScrollingComplete ? 1 : 0 }}
                />
            </svg>
            
            <Header/>
            <Projects doo={ doo } />
            <About/>
            <Contact />
            {/* <div className='gladToHaveYou Opacity'>
                Glad to have you completed my portfolio!
            </div> */}
        </div>
    );
}
export default Home;