import React, { useContext, useEffect, useState } from 'react';
import { auth, provider } from '../firebase'

const AuthContext = React.createContext()


export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider( {children} ) {
    const [currentUser, setCurrentUser] = useState()

    function signup(name, email, phoneNumber ,password){

    auth.createUserWithEmailAndPassword(email,password)
    .then((userCredential)=>{

        console.log(userCredential)
        
        userCredential.user.updateProfile({
            displayName: name,

          }).then(() => {// Update successful.
            console.log("Update User display name information on Sign-in")
            console.log("User display name : "+ userCredential.user.displayName)
           

          }).catch(function(error) {

            console.log(error)
            // An error happened.
          });
        return userCredential
    }).catch((error)=> {

    console.log(error.code);
    console.log(error.message)

});
}

function googleSignup(){
    auth.signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;
        console.log(credential)
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    console.log(token)
    // The signed-in user info.
    var user = result.user;
    console.log(user)

  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
  
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    
      console.log(errorCode+"|"+email+"|"+credential+"|"+errorMessage)// ...
  });

}
function login(email, password){
  return auth.signInWithEmailAndPassword(email, password)
}
function logout(email, password){
  return auth.signOut()
}
useEffect(() => {
const unsubscribe = auth.onAuthStateChanged(user =>{
    setCurrentUser(user)
})
 return unsubscribe
}, [])


const value = {
        currentUser,
        signup,
        login,
        googleSignup,
        logout
    }
    
    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}