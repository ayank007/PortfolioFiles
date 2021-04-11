import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import './resume.css';

const modalVariant = {
    initial: { opacity: 0 },
    isOpen: { opacity: 1 },
    exit: { opacity: 0 }
};
const containerVariant = {
    initial: { top: "-50%", transition: { type: "spring" } },
    isOpen: { top: "50%" },
    exit: { top: "-50%" }
};
const Modal = ({ handleClose, children, isOpen }) => {
  return (
    <div className='AnimatePresence'>
        {isOpen && (
            <motion.div className='Overlay'
                initial={"initial"}
                animate={"isOpen"}
                exit={"exit"}
                variants={modalVariant}
            >
                <motion.div className='ModalContainer' variants={containerVariant}>
                    <svg className='CloseButton'
                        onClick={handleClose}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20.39 20.39"
                    >
                        <title>close</title>
                        <line
                            x1="19.39"
                            y1="19.39"
                            x2="1"
                            y2="1"
                            fill="none"
                            stroke="#5c3aff"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            strokeWidth="2"
                        />
                        <line
                            x1="1"
                            y1="19.39"
                            x2="19.39"
                            y2="1"
                            fill="none"
                            stroke="#5c3aff"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            strokeWidth="2"
                        />
                    </svg>
                    {children}
                </motion.div>
            </motion.div>
        )}
    </div>
  );
};

export default Modal;