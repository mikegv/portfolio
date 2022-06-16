import { motion } from 'framer-motion'
import './contact.css'
import useForm from '../../hooks/useForm';

const Contact = () => {
    
    const { name, message, email, handleNameChange, handleEmailChange, handleMessageChange, submitAttempt, submitHandler } = useForm()

    return (
        <
        motion.div 
        initial={{scaleY: 0}} 
        animate={{scaleY: 1}}
        exit={{scaleY: 0}}
        transition={{duration: .5}}
        >
        <form onSubmit={submitHandler} className='contactForm'>
            <label>Your Name:</label>
            <input type='text' placeholder='Your name...' name='name' onChange={handleNameChange} value={name} />
            <label>Your Email:</label>
            <input type='text' placeholder='Your Email...' name='email' onChange={handleEmailChange} value={email} />
            <label>Your Message</label>
            <textarea type='text' placeholder='Your message...' name='message' onChange={handleMessageChange} value={message} />
            
            {submitAttempt && <p>Form is not completed.</p>}
            
            <button>Submit</button>
           
        </form>
        
        </motion.div>
    );
};

export default Contact;