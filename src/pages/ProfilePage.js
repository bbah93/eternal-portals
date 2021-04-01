import React, { useState} from "react";
import "../css/ProfilePage.css";
import { useAuth } from "../context/AuthContext";
import { Link, useHistory } from "react-router-dom"


export default function ProfilePage(){

    const [error, setError] = useState("")
    const { currentUser, logout} = useAuth()
    const history = useHistory()

   async function handleLogout(){
            setError('')
            try{
                    await logout()
                    history.push('/login')
            }catch{
                    setError('Failed to log out')
            }
    }

    if(currentUser != null){
       
    return (
        <div className = "profile-body">
        <div className = "profile-container">  
            <div className = "profile-title">
                <p>Account</p>
                <Link to ="/update-profile">edit</Link>
            </div> 
            <div className = "profile-image-container"><img className= "profile-image"src="" alt="Profile Picture"/></div> 
                <form className = "profile-form" >
                
                <label style={{color: "white"}}>First name</label>
                    <input 
                        
                            type="text" 
                            name="User's Name" 
                            // placeholder={} 
                        

                    />
                    
                    <label style={{color: "white"}}>Last name</label>
                    <input 
                            type="text" 
                            name="User's Password" 
                            // placeholder={}

                    />

                <label style={{color: "white"}}>Email</label>
                    <input 
                            type="text" 
                            name="User's Email" 
                            // placeholder="Password Confirmation" 

                    />
                    <label style={{color: "white"}}>Country</label>
                    <input 
                            type="text" 
                            name="User's Country" 
                            // placeholder={}

                    />

                <label style={{color: "white"}}>City</label>
                    <input 
                            type="text" 
                            name="User's City" 
                            // placeholder={}

                    />

                <label style={{color: "white"}}>DOB</label>
                    <input 
                            type="text" 
                            name="User's Data Of Birth" 
                            // placeholder={}

                    />

                    <button>Save Info</button>
    `
                </form>
        <div className= "profile-plan">
         {error && alert(error)}
         <button onClick={handleLogout}>Log Out!</button>
        </div>

        </div>
        </div> 
    )
    } else{
            return(
            <div>
                    <h1 style={{color: "white"}}> Not Logged In </h1>
            </div>
            )
    }
}