import React from 'react';
import './App.css';
import Profile from './profile/fullName';
import image from './profile/firass.jpg';
function App() {
  
  const styleObject = { color:  'black' , textAlign:'center'}
  return (
   <div className = "header_color"> 
<div className="App" style={styleObject}>
  <h1 style={{Color: "lightblue" ,fontFamily: "Stencil Std, fantasy"}}>Welcome</h1>
     <Profile img source={image} width="900"
     FullName='Firas Bouhamda'
     bio='I am a 24 year old man passionate about web development and photography  '
     profession='Full stack web developer in go my code sousse'
     />
    </div>
    </div>
  );
}

export default App;