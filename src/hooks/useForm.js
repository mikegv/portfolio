import { useState, useRef } from "react";
import emailjs from 'emailjs-com'
const SERVICE_ID = process.env.REACT_APP_MY_SERVICE_ID
const TEMPLATE_ID = process.env.REACT_APP_MY_TEMPLATE_ID
const USER_ID = process.env.REACT_APP_MY_USER_ID

const useForm = () => {
    
    let formRef=useRef()
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

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, USER_ID)
        .then(result => {
            console.log("SUCCESS? ", result.text)
        }, (error) => {
            console.log("Error? ", error.text)
        })

        setSubmitAttempt(false)
        setName('')
        setMessage('')
        setEmail('')
    }
    return (
       {
        name,
        message,
        email,
        formRef,
        handleNameChange,
        handleEmailChange,
        handleMessageChange,
        submitAttempt,
        submitHandler
       }
    );
};

export default useForm;