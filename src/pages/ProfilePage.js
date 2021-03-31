import React, { useState} from "react";
import "../css/ProfilePage.css";
import { Link, useHistory } from "react-router-dom"

export default function ProfilePage(){

    const [error, setError] = useState("")
    // const { currentUser, logout} = useAuth()
    const history = useHistory()
//    async function handleLogout(){
//             setError('')
//             try{
//                     await logout()
//                     history.push('/login')
//             }catch{
//                     setError('Failed to log out')
//             }
//     }
       
    return (
        <div className = "profile-body">
        <div className = "profile-container">  
            <div className = "profile-title">
                <p>Account</p>
                <Link to ="/update-profile">edit</Link>
            </div> 
            <div className = "profile-image-container"><img className= "profile-image"src="" alt="Profile Picture"/></div> 
                <form className = "profile-form" >
                    <input 
                            type="text" 
                            name="User's Name" 
                            // placeholder={} 
                        

                    />
                    <input 
                            type="text" 
                            name="User's Password" 
                            // placeholder={}

                    />
                    <input 
                            type="text" 
                            name="User's Email" 
                            // placeholder="Password Confirmation" 

                    />
                    <input 
                            type="text" 
                            name="User's Country" 
                            // placeholder={}

                    />
                    <input 
                            type="text" 
                            name="User's City" 
                            // placeholder={}

                    />
                    <input 
                            type="text" 
                            name="User's Data Of Birth" 
                            // placeholder={}

                    />
    `
                </form>
        <div className= "profile-plan">
         <hr />
         {error && alert(error)}
         <button >Log Out!</button>
        </div>

        </div>
        </div> 
    )
}