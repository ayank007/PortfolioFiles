import { React, useState, useEffect } from 'react';
import './cursor.css';
import $ from 'jquery';
import { motion, useMotionValue, useSpring  } from "framer-motion";

export const Cursor = () => {

    const [cursorXY, setCursorXY] = useState({ x: -100, y: -100 })
    useEffect(() => {
        const moveCursor = (e) => { 
            const x = e.clientX - 3
            const y = e.clientY - 3
            setCursorXY({ x, y })
        }
        window.addEventListener('mousemove', moveCursor)
        return () => {
        window.removeEventListener('mousemove', moveCursor)
        }
    }, []);

    const followerX = useMotionValue(-100);
    const followerY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const followerXSpring = useSpring(followerX, springConfig);
    const followerYSpring = useSpring(followerY, springConfig);

    useEffect(() => {
        const movefollower = (e) => {
            if($('.cursor').hasClass('active')){
                followerX.set(e.clientX - 45);
                followerY.set(e.clientY - 45);
            }
            else{
                followerX.set(e.clientX - 15);
                followerY.set(e.clientY - 15);
            }
        };

        window.addEventListener("mousemove", movefollower);

        return () => {
        window.removeEventListener("mousemove", movefollower);
        };
    }, []);

    return (
        <>
            <div className="cursor"
                style={{
                    transform: `translate3d(${cursorXY.x}px, ${cursorXY.y}px, 0)`,
                }} 
            />
            <motion.div className="cursor-follower"
                style={{
                    translateX: followerXSpring,
                    translateY: followerYSpring,
                }}  
            />
        </>
    );
}