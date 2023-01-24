//import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect} from 'react';
//import Home from '../home/Home';
import Navbar from '../navbar/Navbar';
import BotCollection from '../botcollection/BotCollection';
import BotCard from '../botcard/BotCard';



function App() {
  const[data, setData]= useState ("")
  //const [searchValue,setSearch]=useState("")
  useEffect (() => {
    const URL= "http://localhost:3000/bots"

    fetch (URL)
    .then (response => response.json())
    .then ((data) => {
      setData(data)
    })
  },[]) 

  return(
    <div>
    <Navbar/>
    <BotCard bots = {data}/>
    <BotCollection/>
  
    </div>
    
    
        );
}

export default App;
