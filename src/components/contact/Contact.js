import { motion } from 'framer-motion'
import './contact.css'

const Contact = () => {
    return (
        <
        motion.div 
        initial={{scaleY: 0}} 
        animate={{scaleY: 1}}
        exit={{scaleY: 0}}
        transition={{duration: .5}}
        >
        <form className='contactForm'>
            <label>Your Name:</label>
            <input type='text' placeholder='Your name...'/>
            <label>Your Message</label>
            <textarea type='text' placeholder='Your message...' />
            <button>Submit</button>
        </form>
        </motion.div>
    );
};

export default Contact;