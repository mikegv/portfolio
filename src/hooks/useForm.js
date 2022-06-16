import { useState } from "react";

const useForm = () => {
    
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [email, setEmail] = useState('')
    const [submitAttempt, setSubmitAttempt] = useState(false)
    
    const formIsValid = name !== '' && message !== '' && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email.trim())

    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handleMessageChange = (e) => {
        setMessage(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        if(!formIsValid){   
            setSubmitAttempt(true)
            console.log('not valid')
            return 
        }
        setName('')
        setMessage('')
        setEmail('')
    }
    return (
       {
        name,
        message,
        email,
        handleNameChange,
        handleEmailChange,
        handleMessageChange,
        submitAttempt,
        submitHandler
       }
    );
};

export default useForm;