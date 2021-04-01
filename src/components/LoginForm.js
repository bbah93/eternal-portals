import React, { useRef, useState } from "react"
import "../css/SignUpForm.css";
import googleLogo from "../assets/google_logo.png";
import { useAuth }  from "../context/AuthContext";
import { useHistory} from "react-router-dom";


export default function LoginForm() {

const emailRef = useRef()
const passRef = useRef()
const { login, currentUser, googleSignup } = useAuth()
const [error, setError] = useState('')
const [loading, setLoading] = useState(false)
const history = useHistory()

async function handleSubmit(e){
    e.preventDefault()

try {
    setError('')
    setLoading(true)
    await login (emailRef.current.value, passRef.current.value)
    history.push('/profile')
} 
catch(error) {
    console.log(error)
    
   setError("Failed to Log In an account") 
 }
 setLoading(false)
}

async function handleOnclick(e){
    e.preventDefault()

try {
    setError('')
    setLoading(true)
    await googleSignup()
    history.push('/profile')
} 
catch(error) {
    console.log(error)
    
   setError("Failed to Log In an account") 
 }
 setLoading(false)
}
     
        return (
           
            <form className = "form-signup" onSubmit={handleSubmit}>
                {error && alert(error)}
                {currentUser && JSON.stringify(currentUser.email)}
    
              
                <input 
                    type="text" 
                    name="email" 
                    placeholder="Email" 
                    ref={emailRef}
                    required

                />


                <input 
                    type="text" 
                    name="password" 
                    placeholder="Password" 
                    ref={passRef}
                    required

                />
               
                
                <button disabled ={loading} className= "create-button" >Log In</button>
                <hr /> <span className = "or"> OR</span> <hr />
                <button disabled ={loading} className = "google-button" onClick={handleOnclick}><img className="google-img" src={googleLogo} alt="google logo" /><span className="google-text">Log In with Google</span></button>
            </form>
        
        )
    
}


