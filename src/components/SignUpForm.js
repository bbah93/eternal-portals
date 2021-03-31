import React, { useRef, useState } from "react"
import "../css/SignUpForm.css";
// import { useAuth }  from "../context/AuthContext";
import {useHistory} from "react-router-dom"

export default function SignUpForm() {

const emailRef = useRef()
const passRef = useRef()
const nameRef = useRef()
const passConfRef = useRef()
const numberRef = useRef()
// const { signup, currentUser, googleSignup } = useAuth()
const [error, setError] = useState('')
const [loading, setLoading] = useState(false)
const history = useHistory()

// async function handleSubmit(e){
//     e.preventDefault()
// if (passRef.current.value !== passConfRef.current.value){
//     return setError('Passwords do not match')
// }

// try {
//     setError('')
//     setLoading(true)
//     await signup(nameRef.current.value, emailRef.current.value, numberRef.current.value ,passRef.current.value)
//     history.push('/profile')
// } 
// catch(error) {
//     console.log(error)
    
//    setError("Failed to create an account") 
//  }
//  setLoading(false)
// }

// async function handleOnclick(e){
//     e.preventDefault()

// try {
//     setError('')
//     setLoading(true)
//     await googleSignup()
//     history.push('/profile')
// } 
// catch(error) {
//     console.log(error)
    
//    setError("Failed to create an account") 
//  }
//  setLoading(false)
// }
     
        return (
           
            <form className = "form-signup" >
              
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Name" 
                    ref={nameRef}
                    required
                />
              
                <input 
                    type="text" 
                    name="email" 
                    placeholder="Email" 
                    ref={emailRef}
                    required

                />

                <input 
                    type="text" 
                    name="phoneNumber" 
                    placeholder="Phone Number" 
                    ref={numberRef}
                    required

                />

                <input 
                    type="text" 
                    name="password" 
                    placeholder="Password" 
                    ref={passRef}
                    required

                />
               
                <input 
                    type="text" 
                    name="password confirmation" 
                    placeholder="Password Confirmation" 
                    ref={passConfRef}
                    required

                />
                
                <button disabled ={loading} className= "create-button" >Create account</button>
                <hr /> <span className = "or"> OR</span> <hr />
                <button disabled={loading} className = "google-button" >Sign up with Google</button>
                <label htmlFor="checkbox" >
                    <input className = "signup-checkbox"
                        type="checkbox" 
                        name="terms"
                        required
                    /> I agree to Eternal's Terms of Service
                </label>
                <label htmlFor="checkbox" >
               
                    <input className = "signup-checkbox"
                        type="checkbox" 
                        name="privacyPolicy"
                        required
                    /> I accept Eternal 's use of my data for services described in the Privacy Policy
                </label>
    
            </form>
        
        )
    
}


