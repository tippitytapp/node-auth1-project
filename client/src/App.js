import React, {useState, useEffect} from 'react';
import axios from "axios"
import {useHistory, Route, Link} from "react-router-dom";


function App() {
  return (
    <div className="App">
        <h1>Users@Users.Com</h1>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        
    </div>
  );
}

export default App;
