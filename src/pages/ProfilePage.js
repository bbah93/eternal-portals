import React, { useState, useRef } from "react";
import "../css/ProfilePage.css";
import { useAuth } from "../context/AuthContext";
import { Link, useHistory } from "react-router-dom"
import { gql, useQuery, useMutation } from '@apollo/client';
import QueryResults from '../components/query-result';



export default function ProfilePage() {


    const USER = gql` 
        query getUsers {
          user {
                id
                firstname
                lastname
                portal_url
                email
          }
         }
       `;

    const UPDATE_USER = gql`
       mutation Mutation($updateUserUser: UserInput) {
            updateUser(user: $updateUserUser) {
                id
                firstname
                lastname
                avatar_url
                email
                }
            }
         `;

    const emailRef = useRef()
    const dobRef = useRef()
    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const avatarRef = useRef()

    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    const [updateUser] = useMutation(UPDATE_USER);

    async function handleLogout() {
        setError('')
        try {
            await logout()
            console.log(currentUser.uid)
            history.push('/login')
        } catch {
            setError('Failed to log out')
        }
    }

    function handleUpdate() {
        const user = {
            
        }

        return user;
    }

    if (currentUser != null) {

        return (

            <div className="profile-body">
                <div className="profile-container">
                    <div className="profile-title">
                        <p>Account</p>
                        <Link to="/update-profile">edit</Link>
                    </div>
                    <div className="profile-image-container"><img className="profile-image" src="" alt="Profile Picture" /></div>
                    <form className="profile-form">

                        <label style={{ color: "white" }}>{"First name"}</label>
                        <input
                            ref={firstNameRef}
                            type="text"
                            name="User's Name"
                            placeholder={"Eternal"}


                        />

                        <label style={{ color: "white" }}>Last name</label>
                        <input
                            ref={lastNameRef}
                            type="text"
                            name="User's Password"
                            placeholder={"Portals"}

                        />

                        <label style={{ color: "white" }}>Email</label>
                        <input
                            ref={emailRef}
                            type="text"
                            name="User's Email"
                            placeholder="Eteranal@me"

                        />


                        <label style={{ color: "white" }}>DOB</label>
                        <input
                            ref={dobRef}
                            type="datetime-local"
                            name="User's Data Of Birth"
                        />

                        <button onClick={() => updateUser({
                            variables: {
                                updateUserUser:{
                                    
                                id: currentUser.uid,
                                firstname: firstNameRef?.current.value,
                                lastname: lastNameRef?.current.value,
                                email: emailRef?.current.value,
                                }
                            }
                                
                        })}>Save Info</button>
    `
                </form>
                    <div className="profile-plan">
                        {error && alert(error)}
                        <button onClick={handleLogout}>Log Out</button>
                        <button >Friends List 🌐 </button>

                    </div>

                </div>
            </div>

        )
    } else {
        return (
            <div>
                <h1 style={{ color: "white" }}> Not Logged In </h1>
            </div>

        )
    }
}