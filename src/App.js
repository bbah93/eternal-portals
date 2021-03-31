import './App.css';
import React from 'react';
import NavBar from './components/NavBar'
import { Switch } from 'react-router';
import {Route} from 'react-router-dom'

import AuthPage from './pages/AuthPage';
import ColoringPage from './pages/ColoringPage';
import HomePage from './pages/HomePage';
import SignUpForm from './components/SignUpForm';
import GalleryPage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import { useState } from 'react';


function App() {
  
  const fillPaths = pathData => {
    console.log("fillPaths: ", pathData);
    return pathData;
  }

  //This array is going to keep track of all the colors we apply, 
  //and which paths you’ve applied them to as they relate to the SVG.
  //we initially set all svg paths to white to make the image blank outline
  const [fillColors, setFillColors] = useState(Array(fillPaths).fill('white'))
  //The setCurrentColor function will allow for the currentColor to update
  const [currentColor, setCurrentColor] = useState('green')

  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.



  const onFillColor = i => {
    //takes in an index, makes a copy of the current fillColors array, 
    let newFillColors = fillColors.slice(0)
    //then apply the currentColor to that index in the array copy. 
    //This will change the string at that index from the previous color “white” to “blue” (or whichever color you choose). 
    newFillColors[i] = currentColor
    //Update the fillColors array in state with the new array.
    setFillColors(newFillColors)

  }



  return (
    <div className="App" >
      <NavBar id="header"/>
        <Switch>
          <Route path="/profile" component={ProfilePage} />
          <Route path="/login" component={SignUpForm}/>
          <Route path="/colorpage">
          <ColoringPage changeColor={setCurrentColor} currentColor={currentColor} fillSize={fillPaths} fillColors={fillColors} onFill={onFillColor}/>
          </Route>
          <Route path="/gallery" component={GalleryPage} />
          <Route exact path="/" component={HomePage} />
        </Switch>
 

    </div>
  );
}

export default App;
